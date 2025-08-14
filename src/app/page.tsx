// app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../app/home/page"; 

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1">
          <Home /> {/* Render your home page directly here */}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
