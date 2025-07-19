
import '../styles/globals.css';


export const metadata = {
  title: "Hexalogic",
  description: "HexaLogic - A digital agency that helps businesses grow through innovative and creative solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body >

          {children}


      </body>
    </html>
  );
}
