"use client";

import { Home, LayoutDashboard, Flag, Calendar, Bell, Settings, Plus, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Flag, label: "Goals", href: "/goals" },
    { icon: Calendar, label: "Scheudle", href: "/schedule" },
];

const secondaryNavItems = [
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-4 top-4 bottom-4 w-20 bg-white rounded-[40px] shadow-sm flex flex-col items-center py-8 z-50 hidden md:flex border border-gray-100/50">
            {/* Logo */}
            <div className="mb-8">
                <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xs">
                    Be.
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 flex flex-col gap-4 w-full px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 mx-auto group relative",
                                isActive
                                    ? "bg-black text-white shadow-lg shadow-black/20"
                                    : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {isActive && (
                                <div className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                                    {item.label}
                                </div>
                            )}
                        </Link>
                    );
                })}

                <div className="my-2 border-b border-gray-100 w-8 mx-auto" />

                {secondaryNavItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 mx-auto text-gray-400 hover:bg-gray-50 hover:text-gray-900"
                        )}
                    >
                        <item.icon className="w-5 h-5" />
                    </Link>
                ))}
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto flex flex-col gap-4 items-center">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    <LogOut className="w-4 h-4" />
                </button>
                <Avatar className="w-10 h-10 border-2 border-white shadow-sm cursor-pointer hover:scale-105 transition-transform">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </aside>
    );
}
