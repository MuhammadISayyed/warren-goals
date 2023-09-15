import "./globals.css";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Warren Goals",
  description: "Focus only on 5 goals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>
        <h1 className="max-sm:text-4xl text-center mt-16 mb-32 font-bold text-7xl bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          Warren Goals
        </h1>
        {children}
      </body>
    </html>
  );
}
