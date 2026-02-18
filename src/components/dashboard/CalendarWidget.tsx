"use client";

import { ChevronDown } from "lucide-react";

export function CalendarWidget() {
    // Static calendar for demo purposes, replicating the image
    const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const days = [
        // Previous month (dimmed)
        // Current month start
        { date: 1, type: "normal" }, { date: 2, type: "normal" }, { date: 3, type: "highlight-yellow" }, { date: 4, type: "normal" }, { date: 5, type: "highlight-yellow" },
        { date: 6, type: "normal" }, { date: 7, type: "normal" }, { date: 8, type: "normal" }, { date: 9, type: "normal" }, { date: 10, type: "normal" }, { date: 11, type: "normal" }, { date: 12, type: "normal" },
        { date: 13, type: "dimmed" }, { date: 14, type: "dimmed" }, { date: 15, type: "dimmed" }, { date: 16, type: "normal" }, { date: 17, type: "highlight-black" }, { date: 18, type: "normal" }, { date: 19, type: "highlight-black" },
        { date: 20, type: "normal" }, { date: 21, type: "normal" }, { date: 22, type: "normal" }, { date: 23, type: "highlight-black" }, { date: 24, type: "normal" }, { date: 25, type: "normal" }, { date: 26, type: "normal" },
        { date: 27, type: "highlight-black" }, { date: 28, type: "highlight-black" }, { date: 29, type: "normal" }, { date: 30, type: "normal" }
    ];

    return (
        <div className="w-full h-full bg-[#1C1C1E] text-white rounded-[40px] p-8 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Your Training Days</h3>
                <div className="flex items-center gap-1 text-gray-400 text-sm cursor-pointer hover:text-white">
                    June <ChevronDown className="w-4 h-4" />
                </div>
            </div>

            <div className="flex-1">
                {/* Weekday Headers */}
                <div className="grid grid-cols-7 mb-4 text-center">
                    {weekDays.map((day, i) => (
                        <div key={i} className="text-xs text-gray-500 font-medium">{day}</div>
                    ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center place-items-center">
                    {days.map((d, i) => {
                        if (d.type === 'highlight-yellow') {
                            return (
                                <div key={i} className="w-8 h-8 rounded-full bg-[#FFD54F] text-black flex items-center justify-center text-sm font-bold shadow-sm shadow-yellow-500/20">
                                    {d.date}
                                </div>
                            )
                        }
                        if (d.type === 'highlight-black') {
                            return (
                                <div key={i} className="w-8 h-8 rounded-full bg-[#2C2C2E] text-gray-300 border border-gray-700 flex items-center justify-center text-sm">
                                    {d.date}
                                </div>
                            )
                        }
                        if (d.type === 'dimmed') {
                            return (
                                <div key={i} className="w-8 h-8 flex items-center justify-center text-xs text-gray-600 cursor-default">
                                    {d.date}
                                </div>
                            )
                        }
                        return (
                            <div key={i} className="w-8 h-8 flex items-center justify-center text-sm text-gray-300 cursor-default hover:bg-white/10 rounded-full transition-colors">
                                {d.date}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex gap-4 text-[10px] text-gray-500 justify-center">
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full border border-gray-500"></div> Current day</div>
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#FFD54F]"></div> Done</div>
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#2C2C2E] border border-gray-700"></div> Scheduled</div>
            </div>
        </div>
    );
}
