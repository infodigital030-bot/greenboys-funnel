import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata = {
  title: "Gartenpflege & Baumpflege Bernau | Galabau Barnim",
  description: "Gartenpflege, Baumpflege und Galabau in Bernau und Barnim. Tätig im Umkreis von 50 km – Angebot, Vor-Ort-Termin oder Rückruf anfragen.",
  openGraph: {
    title: "Gartenpflege & Baumpflege Bernau | Galabau Barnim",
    description: "Gartenpflege, Baumpflege und Galabau in Bernau und Barnim. Tätig im Umkreis von 50 km – einfach anfragen.",
    images: [{ url: "/hero.jpg", width: 1000, height: 667 }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${geist.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
