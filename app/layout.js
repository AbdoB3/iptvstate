import Navbar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "iptvstate",
  description: "the best iptv provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app main-content relative ">
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
