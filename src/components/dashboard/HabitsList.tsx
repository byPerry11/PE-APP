import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";

const habits = [
    {
        id: 1,
        title: "Stretching",
        subtitle: "Trainer: Alice McCain",
        completed: 9,
        total: 12,
        avatar: "https://i.pravatar.cc/150?u=alice",
        color: "bg-orange-400"
    },
    {
        id: 2,
        title: "Yoga training",
        subtitle: "Trainer: Jennifer Lubin",
        completed: 6,
        total: 10,
        avatar: "https://i.pravatar.cc/150?u=jen",
        color: "bg-red-400"
    },
    {
        id: 3,
        title: "Massage",
        subtitle: "Masseur: Johnson Cooper",
        completed: 4,
        total: 8,
        avatar: "https://i.pravatar.cc/150?u=john",
        color: "bg-red-400"
    },
    {
        id: 4,
        title: "Ab exercises",
        subtitle: "Sessions completed: 8/10",
        completed: 8,
        total: 10,
        avatar: "https://i.pravatar.cc/150?u=abs", // Placeholder
        isGeneric: true,
        color: "bg-orange-500"
    }
];

export function HabitsList() {
    return (
        <div className="w-full h-full">
            {/* Container handled by parent grid */}
            <div className="flex flex-col gap-4">
                {habits.map((habit) => (
                    <div key={habit.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl transition-colors group">
                        <div className="flex items-center gap-4">
                            <Avatar className="w-10 h-10 rounded-xl">
                                <AvatarImage src={habit.avatar} />
                                <AvatarFallback>{habit.title[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="font-medium text-sm text-gray-900">{habit.title}</h4>
                                <p className="text-xs text-gray-400 truncate max-w-[120px] sm:max-w-none">
                                    {habit.isGeneric ? `Sessions completed: ${habit.completed}/${habit.total}` : habit.subtitle}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex flex-col items-end gap-1">
                                <span className="text-xs text-gray-400">Sessions completed: {habit.completed}/{habit.total}</span>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-1 h-3 rounded-full ${i < habit.completed ? 'bg-red-400' : 'bg-gray-200'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
