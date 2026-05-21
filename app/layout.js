import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata = {
  title: "Green Boys – Baum & Gartenservice Barnim",
  description: "Professioneller Gartenbau, Baumpflege und Gartengestaltung für Barnim und Umland. Tätig im Umkreis von 50 km um Bernau.",
  openGraph: {
    title: "Green Boys – Baum & Gartenservice Barnim",
    description: "Ihr Gartenbau-Experte für Barnim und Umland. Angebot, Rückruf oder Vor-Ort-Termin – ganz einfach anfragen.",
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
