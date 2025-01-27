import "./globals.css";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

const Preloader = dynamic(() => import("../components/Preloader/PreLoader"), {
  ssr: false, // Disable server-side rendering for this component
});
// import NextTopLoader from "nextjs-toploader";
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
        <Preloader>
          {/* <NextTopLoader showSpinner={false} /> */}
          {children}
          <Footer />
        </Preloader>
      </body>
    </html>
  );
}
