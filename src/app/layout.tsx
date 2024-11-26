import type { Metadata } from "next";
import "../styles/globals.scss";
import { Montserrat, Caveat, Poppins } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const poppins = Poppins({
  subsets:['latin'],
  variable:'--font-poppins',
  weight:['100', '200', '300', '400','500', '600', '700', '800', '900']
})

const caveat = Caveat({
  subsets:['latin'],
  variable:'--font-caveat'
})

export const metadata: Metadata = {
  title: "Linko",
  description: "Deixando a internet pequena e organizada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-br" className={`app-container ${montserrat.variable} ${caveat.variable} ${poppins.variable}`}>
        <body>
          {children}
        </body>
      </html>
  );
}
