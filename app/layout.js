
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
      </head>
      <body >

          {children}


      </body>
    </html>
  );
}
