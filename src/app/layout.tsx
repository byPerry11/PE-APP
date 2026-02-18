import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for now, request mentioned Outfit can be added later
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Be.run Dashboard",
    description: "Your personal fitness dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "bg-beige-50 min-h-screen text-foreground antialiased")}>
                <div className="flex min-h-screen relative">
                    <Sidebar />
                    <main className="flex-1 md:ml-28 p-4 md:p-8 transition-all duration-300 w-full">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
