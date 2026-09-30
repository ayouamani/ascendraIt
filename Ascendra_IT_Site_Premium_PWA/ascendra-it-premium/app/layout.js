import "./styles.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ascendra-it.fr"),
  title: {
    default: "Ascendra IT | Conseil, Développement, Support & TMA",
    template: "%s | Ascendra IT"
  },
  description:
    "Ascendra IT accompagne les entreprises en conseil SI, développement, intégration, maintenance, TMA, support technique et fonctionnel, audit et pilotage de projets IT.",
  keywords: [
    "Ascendra IT",
    "conseil informatique",
    "développement logiciel",
    "support IT",
    "helpdesk N1",
    "TMA",
    "maintenance applicative",
    "audit informatique",
    "pilotage projet IT"
  ],
  openGraph: {
    title: "Ascendra IT",
    description: "Des solutions IT fiables, agiles et adaptées à vos enjeux.",
    type: "website",
    locale: "fr_FR"
  },
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon.svg"
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
