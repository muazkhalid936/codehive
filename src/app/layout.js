import "./globals.css";
import Footer from "../components/Footer";
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
        {/* <NextTopLoader showSpinner={false} /> */}
        {children}
      </body>
    </html>
  );
}
