import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "./Context/authContext";
import { DbProvider } from "./Context/dbContext";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Blog App",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <DbProvider>
            {children}
          </DbProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
