import { Edit2 } from "lucide-react";

export function StepsWidget() {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-medium text-gray-900">Steps for Today</h3>
                    <p className="text-xs text-gray-400 mt-1">Keep your body toned</p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-4">
                <button className="flex items-center gap-2 bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                    Change Goal <Edit2 className="w-3 h-3" />
                </button>

                <div className="relative w-24 h-24 flex items-center justify-center">
                    {/* Simple SVG Radial Progress */}
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="#F3F4F6"
                            strokeWidth="6"
                            fill="none"
                        />
                        <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="#FF8A80"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="100" // (1 - 5201/8500) * 251.2 roughly
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-xs text-gray-400">Goal</span>
                        <span className="text-lg font-bold text-gray-900">8.500</span>
                    </div>
                    {/* Floating badge */}
                    <div className="absolute top-0 right-0 bg-white shadow-sm border border-gray-100 rounded-full px-1.5 py-0.5 text-[10px] font-bold text-gray-600">
                        5.201
                    </div>
                </div>
            </div>
        </div>
    );
}
