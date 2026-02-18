import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen relative bg-beige-50">
            <Sidebar />
            <main className="flex-1 md:ml-28 p-4 md:p-8 transition-all duration-300 w-full">
                {children}
            </main>
        </div>
    );
}
