import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen relative bg-white">
            <Sidebar />
            <main className="flex-1 md:ml-24 p-4 md:p-8 transition-all duration-300 w-full text-black">
                {children}
            </main>
        </div>

    );
}
