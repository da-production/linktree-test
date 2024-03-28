import { DM_Sans } from "next/font/google";
import "@/app/globals.css";
import MockupProfile from "@/app/components/Reusable/landing/MockupProfile";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "LinkHub",
  description: "SocialLink Hub simplifies your online presence by consolidating all your social media links into one easy-to-access platform. Stay connected effortlessly with our streamlined solution.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${font.className} `}>
                <div className="min-h-screen flex w-full">
                    <div className=" w-16 bg-[#1a2c3b] col-span-1"></div>
                    <div className=" w-[calc(100%-64px)] flex flex-nowrap col-span-11">
                        <div className="w-3/4 h-full">
                            <div className="w-full h-16 bg-[#e3e6e9] border-r-2 border-r-slate-400 flex justify-start items-center px-10 ">
                                <ul className="flex items-center h-full w-full gap-6 text-sm">
                                    <li className="top__navbar__link active">Links</li>
                                    <li className="top__navbar__link">Design</li>
                                    <li className="top__navbar__link">Analytics</li>
                                    <li className="top__navbar__link">Settings</li>
                                    <li className="top__navbar__link">PRO</li>
                                </ul>
                            </div>
                            <div className=" w-full  border-r-2 border-r-slate-300">

                            </div>
                        </div>
                        <div className="w-1/4 h-full">
                            <div className="h-16 tex-sm bg-[#e3e6e9] flex justify-center items-center">
                                <span>linkhub/@enimablack</span>
                            </div>
                            <div className="flex min-h-full justify-center items-center">
                                <MockupProfile />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* {children} */}
            </body>
        </html>
    );
}
