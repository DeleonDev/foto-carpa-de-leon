import Script from "next/script";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/grid.css";
import "./styles/headline.css";
import "./styles/jquery.lineProgressbar.min.css";
import "./styles/magnific-popup.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foto Carpa",
  description:
    "Paquetes fotográficos de graduación y reconocimientos. Sesiones fotográficas. Souvenirs, Fotografía de eventos. Fotografía de producto.",
  keywords:
    "Foto Carpa, Fotografía, Fotógrafo, Fotógrafa, Fotografía de eventos, Fotografía de producto, Paquetes fotográficos, Graduaciones, Reconocimientos, Sesiones fotográficas, Fotografías Tapachula, Foto Carpa Graduaciones Tapachula, Fotografos Tapachula, Fotos Tapachula Chiapas, Fotos Tapachula, Paquetes Fotográficos para Bodas, Paquetes Fotográficos para xv años, Estudios Fotográficos en Tapachula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/all.min.css"
          integrity="sha512-3M00D/rn8n+2ZVXBO9Hib0GKNpkm8MSUU/e2VNthDyBYxKWG+BftNYYcuEjXlyrSO637tidzMBXfE7sQm0INUg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
          integrity="sha512-3P8rXCuGJdNZOnUx/03c1jOTnMn3rP63nBip5gOP2qmUh5YAdVAvFZ1E+QLZZbC1rtMrQb+mah3AfYW11RUrWA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
          integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
