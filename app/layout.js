import { Poppins } from "next/font/google";
import '../styles/globals.css';
import Navbar from "@/components/Navbar";
import AnimatedAbstract from "@/components/AnimatedAbstract";

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
        <Navbar />
        <div
          className="
          relative
          h-[90vh] md:h-[97vh] overflow-x-hidden
          bg-[#1e2235] text-[#ede8f5]
          font-sans rounded-lg m-2  
          flex items-center justify-center
        "
        >
          <AnimatedAbstract />
          {children}
        </div>
      </body>
    </html>
  );
}
