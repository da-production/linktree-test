import { DM_Sans } from "next/font/google";
import "./globals.css";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "LinkHub",
  description: "SocialLink Hub simplifies your online presence by consolidating all your social media links into one easy-to-access platform. Stay connected effortlessly with our streamlined solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
