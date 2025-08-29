import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TecnoFact - Soluciones Tecnológicas para tu Empresa",
  description: "TecnoFact ofrece soluciones tecnológicas innovadoras para impulsar tu negocio. Especialistas en facturación electrónica, desarrollo web y consultoría IT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
