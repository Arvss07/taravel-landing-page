import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Tara-Vel",
  description: "Tara-Vel landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="taravel">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={poppins.variable} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
