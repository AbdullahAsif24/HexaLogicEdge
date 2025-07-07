import { Poppins } from "next/font/google";
import '../styles/globals.css';

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Hexalogic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
