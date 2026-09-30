import { NextResponse } from "next/server";
import { Resend } from "resend";

function safe(value = "") {
  return String(value).replace(/[<>]/g, "").trim().slice(0, 5000);
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Honeypot anti-spam
    if (body.website) return NextResponse.json({ ok: true });

    const name = safe(body.name);
    const email = safe(body.email);
    const company = safe(body.company);
    const phone = safe(body.phone);
    const service = safe(body.service);
    const message = safe(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, e-mail et message sont obligatoires." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { error: "Configuration e-mail incomplète." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.CONTACT_FROM_EMAIL || "Ascendra IT <onboarding@resend.dev>";

    await resend.emails.send({
      from,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Nouveau contact — ${service || "Demande générale"}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#172033;line-height:1.65">
          <h2 style="margin-bottom:20px">Nouvelle demande via Ascendra IT</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Entreprise :</strong> ${company || "Non renseignée"}</p>
          <p><strong>E-mail :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
          <p><strong>Prestation :</strong> ${service || "Non renseignée"}</p>
          <hr style="border:none;border-top:1px solid #e6e8ec;margin:22px 0"/>
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `
    });

    await resend.emails.send({
      from,
      to: email,
      subject: "Ascendra IT — Votre demande a bien été reçue",
      html: `
        <div style="font-family:Arial,sans-serif;color:#172033;line-height:1.65">
          <h2>Bonjour ${name},</h2>
          <p>Merci d'avoir contacté Ascendra IT.</p>
          <p>Votre demande a bien été reçue. Nous reviendrons vers vous rapidement pour échanger sur votre besoin.</p>
          <p style="margin-top:30px"><strong>L'équipe Ascendra IT</strong></p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Impossible d'envoyer le message." }, { status: 500 });
  }
}
