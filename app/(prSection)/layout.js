import Navbar from "@/components/Navbar";

export default function ProjectRootLayout({ children }) {
  return (
      <div className="overflow-hidden">
        <Navbar/>
          {children}
      </div>
  );
}