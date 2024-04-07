import { DM_Sans } from "next/font/google";
import "@/app/globals.css";
import MockupProfile from "@/app/components/Reusable/landing/MockupProfile";
import Link from "next/link";
import Sidebar from "@/app/components/Reusable/Sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/models/User";
import { UserMeta } from "@/models/UserMeta";
import mongoose from "mongoose";
import AccountContextProvider from "@/stores/Account";
import RightTopNavBar from "@/app/components/Reusable/RightTopNavBar";
import { auth } from "@/auth";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "LinkHub",
  description: "SocialLink Hub simplifies your online presence by consolidating all your social media links into one easy-to-access platform. Stay connected effortlessly with our streamlined solution.",
};

export default async function RootLayout({ children }) {
    const session = await auth()
    return (
        <html lang="en">
            <body className={`${font.className} `}>
                <AccountContextProvider values={session.user}>
                    <div className="min-h-screen flex w-full">
                        {/* bg-[#1a2c3b] */}
                        <div className=" w-16 bg-black col-span-1">
                            <Sidebar />
                        </div>
                        <div className=" w-[calc(100%-64px)] flex flex-nowrap col-span-11">
                            <div className="w-3/4 h-full border-r-2 border-r-slate-300">
                                <div className="w-full h-16 bg-[#e3e6e9]  flex justify-start items-center px-10 ">
                                    <ul className="flex items-center h-full w-full gap-6 text-sm">
                                        <Link href="/" className="top__navbar__link">Home</Link>
                                        <li className="top__navbar__link active">Links</li>
                                        <li className="top__navbar__link">Design</li>
                                        <li className="top__navbar__link">Analytics</li>
                                        <Link href='/account/settings' className="top__navbar__link">Settings</Link>
                                        <li className="top__navbar__link">PRO</li>
                                    </ul>
                                </div>
                                <div className=" w-full h-full ">
                                    {children}
                                </div>
                            </div>
                            <div className="w-1/4 h-full">
                                <RightTopNavBar />
                                <div className="flex min-h-full justify-center items-center">
                                    <MockupProfile />
                                </div>
                            </div>
                        </div>
                    </div>
                </AccountContextProvider>
            </body>
        </html>
    );
}
