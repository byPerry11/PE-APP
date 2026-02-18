import { MoreHorizontal } from "lucide-react";

export function WorkoutResultsCard() {
    return (
        <div className="relative w-full h-full bg-[#E6E0D6] rounded-[40px] p-8 overflow-hidden shadow-sm flex flex-col justify-between">
            {/* Header */}
            <div className="flex justify-between items-start z-10">
                <div>
                    <h3 className="text-xl font-medium text-gray-800">Your Workout<br />Results for Today</h3>
                </div>
                <button className="p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors">
                    {/* Keeping it simple, maybe an icon */}
                    <div className="w-1 h-1 bg-black rounded-full mb-0.5"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                </button>
            </div>

            {/* Visual Bubbles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Black Bubble */}
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-black/80 rounded-full flex flex-col items-center justify-center text-white backdrop-blur-md z-20 shadow-xl transform -translate-y-1/2">
                    <span className="text-xl font-bold">2.30</span>
                    <span className="text-xs opacity-70">hours</span>
                </div>

                {/* Yellow Bubble */}
                <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-[#FQD76D] rounded-full flex flex-col items-center justify-center text-black/80 blur-0 z-10 opacity-90 mix-blend-multiply transform -translate-y-1/2 translate-x-4">
                    {/* Fix color code: FQD76D is invalid. Using #FCD34D (yellow-400) or similar. */}
                </div>
                <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-[#FFD54F] rounded-full flex flex-col items-center justify-center text-gray-900 shadow-inner z-10 transform -translate-y-1/2 translate-x-4">
                    <span className="text-2xl font-bold">1.875</span>
                    <span className="text-xs font-medium">kcal</span>
                </div>

                {/* Red/Pink Bubble */}
                <div className="absolute bottom-12 left-1/3 w-28 h-28 bg-[#FF8A80] rounded-full flex flex-col items-center justify-center text-gray-900 shadow-lg z-10 opacity-90 transform translate-y-4 -translate-x-4">
                    <span className="text-xl font-bold">850</span>
                    <span className="text-xs font-medium">kcal</span>
                </div>
            </div>

            {/* Legend */}
            <div className="z-10 mt-auto space-y-2">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-1.5 rounded-full bg-[#FFD54F]"></div>
                    <span className="text-xs text-gray-600 font-medium">Calories intake</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-1.5 rounded-full bg-[#FF8A80]"></div>
                    <span className="text-xs text-gray-600 font-medium">Calories burned</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-1.5 rounded-full bg-black"></div>
                    <span className="text-xs text-gray-600 font-medium">Activity time</span>
                </div>
            </div>
        </div>
    );
}
