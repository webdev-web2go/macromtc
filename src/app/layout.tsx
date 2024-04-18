import type { Metadata } from "next";
import "./globals.css";
import { kastelov, verdana } from "@/fonts";
import { Toaster } from "sonner";
import WhatsappButton from "./whatsapp-button";

export const metadata: Metadata = {
  title: "MTC | Macrotráfico Comercial",
  description:
    "En MTC, nos dedicamos a ofrecer soluciones integrales para tus necesidades de abastecimiento y servicios comerciales. Con años de experiencia en el mercado, nos enorgullece ser líderes en la industria, brindando productos de calidad y servicios confiables a nuestros clientes en todo momento.",
  // openGraph: {
  //   type: "website",
  //   url: "https://serviciosprocargodelsureste.vercel.app/",
  //   siteName: "Servicios Procargo del Sureste",
  //   title: "Servicios Procargo del Sureste",
  //   description: "Soluciones logísticas para tus necesidades.",
  //   images: [
  //     {
  //       url: "https://serviciosprocargodelsureste.vercel.app/hero/og_image.webp",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${verdana.variable} ${kastelov.variable}`}>
        {children}
        <WhatsappButton />
        <Toaster richColors />
      </body>
    </html>
  );
}
