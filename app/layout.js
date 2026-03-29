import "./globals.css";

export const metadata = {
  title: "Ferran Moreno — Reorganizacion estructural",
  description: "El cuerpo no falla. Se desorganiza. Trabajo sobre el sistema. No sobre el sintoma. Lluca (Barcelona) y online.",
  openGraph: {
    title: "Ferran Moreno — Reorganizacion estructural",
    description: "El cuerpo no falla. Se desorganiza. Trabajo sobre el sistema. No sobre el sintoma.",
    url: "https://www.ferran-moreno.com",
    siteName: "Ferran Moreno",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
