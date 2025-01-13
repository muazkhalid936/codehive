import "./globals.css";
import Footer from "../components/Footer";
import NextTopLoader from "nextjs-toploader";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Code Hive" />
        <title>Code Hive</title>
      </head>
      <body>
        <NextTopLoader showSpinner={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
