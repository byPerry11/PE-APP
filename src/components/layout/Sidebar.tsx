"use client";

import { Home, Activity, Zap, Wind, Package, Settings, User, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
    { icon: Home, label: "Home", href: "/dashboard" },
    { icon: Activity, label: "Torque", href: "/dashboard/torque" },
    { icon: Zap, label: "ESD", href: "/dashboard/esd" },
    { icon: Wind, label: "Ionizadores", href: "/dashboard/ionizers" },
    { icon: Package, label: "Inventario", href: "/dashboard/inventory" },
];


const secondaryNavItems = [
    { icon: User, label: "Perfil", href: "/dashboard/profile" },
    { icon: Settings, label: "Ajustes", href: "/dashboard/settings" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-4 top-4 bottom-4 w-20 bg-white rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.05)] flex flex-col items-center py-8 z-50 hidden md:flex border border-gray-100">
            {/* Logo */}
            <div className="mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-lg">
                    PE
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 flex flex-col gap-6 w-full px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-200 mx-auto group relative",
                                isActive
                                    ? "bg-black text-white shadow-xl shadow-black/10 scale-110"
                                    : "text-gray-400 hover:bg-gray-100 hover:text-black"
                            )}
                        >
                            <item.icon className="w-6 h-6" />
                            <div className="absolute left-16 bg-black text-white text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none uppercase tracking-widest font-bold">
                                {item.label}
                            </div>
                        </Link>
                    );
                })}

                <div className="my-4 border-b border-gray-100 w-10 mx-auto" />

                {secondaryNavItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-200 mx-auto group relative",
                                isActive
                                    ? "bg-black text-white shadow-xl shadow-black/10 scale-110"
                                    : "text-gray-400 hover:bg-gray-100 hover:text-black"
                            )}
                        >
                            <item.icon className="w-6 h-6" />
                            <div className="absolute left-16 bg-black text-white text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none uppercase tracking-widest font-bold">
                                {item.label}
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto flex flex-col gap-6 items-center">
                <button className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all group relative">
                    <LogOut className="w-5 h-5" />
                    <div className="absolute left-16 bg-black text-white text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none uppercase tracking-widest font-bold">
                        Salir
                    </div>
                </button>
            </div>
        </aside>
    );
}
