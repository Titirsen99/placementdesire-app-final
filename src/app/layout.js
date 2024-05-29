import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:"Placement Cracker Website",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body className={inter.className} 
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh", 
      backgroundColor: "#CECAB3" }}>
        <Header />
        <main style={{ flex: "1" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
