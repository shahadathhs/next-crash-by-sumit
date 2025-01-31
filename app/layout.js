import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Crash",
  description: "By Learn With Sumit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body className={inter.className}>
        <nav>
          <ul className="flex gap-2">
            <li><Link href='/'> Home </Link></li>
            <li><Link href='/about'> About </Link></li>
            <li><Link href='/blogs'> Blogs </Link></li>
            <li><Link href='/posts'> Posts </Link></li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
