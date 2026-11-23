import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OLA · Tu llegada a Barcelona, con claridad",
  description: "Una ruta clara para organizar tus primeros pasos como estudiante internacional en Barcelona.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
