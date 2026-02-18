"use client";

import { Search, Plus } from "lucide-react";
import { WorkoutResultsCard } from "@/components/dashboard/WorkoutResultsCard";
import { CalendarWidget } from "@/components/dashboard/CalendarWidget";
import { HabitsList } from "@/components/dashboard/HabitsList";
import { StepsWidget } from "@/components/dashboard/StepsWidget";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <div className="space-y-6 max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Hi, Amanda!</h1>
                    <p className="text-gray-500 mt-2 text-lg">Let's take a look at your activity today</p>
                </div>

                <div className="flex items-center gap-4 self-start md:self-auto">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-dark-900 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search for health data"
                            className="pl-12 pr-6 py-3 bg-white rounded-full border-2 border-white focus:border-gray-200 shadow-sm focus:outline-none focus:ring-0 text-gray-900 placeholder:text-gray-400 w-64 md:w-80 transition-all font-medium"
                        />
                    </div>
                    <button className="bg-dark-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-black transition-all hover:scale-105 shadow-md shadow-dark-900/20">
                        Upgrade
                    </button>
                </div>
            </header>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
                {/* Workout Card - Large (Span 7) */}
                <div className="col-span-12 lg:col-span-7 h-[360px]">
                    <WorkoutResultsCard />
                </div>

                {/* Calendar Widget - Dark (Span 5) */}
                <div className="col-span-12 lg:col-span-5 h-[360px]">
                    <CalendarWidget />
                </div>

                {/* Steps Widget - White (Span 4) */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-[40px] p-8 shadow-sm min-h-[300px]">
                    <StepsWidget />
                </div>

                {/* Habits List - White (Span 8) */}
                <div className="col-span-12 md:col-span-6 lg:col-span-8 bg-white rounded-[40px] p-8 shadow-sm min-h-[300px]">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-gray-900 text-lg">My Habits</h3>
                        <button className="text-xs font-bold flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors">
                            Add New
                            <div className="bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]"><Plus className="w-3 h-3" /></div>
                        </button>
                    </div>
                    <HabitsList />
                </div>
            </div>
        </div>
    );
}
