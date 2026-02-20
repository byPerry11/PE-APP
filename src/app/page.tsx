import { Particles } from "@/components/landing/Particles";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="relative min-h-screen bg-white flex flex-col overflow-hidden">
            {/* Background Particles */}
            <Particles />

            {/* Header */}
            <header className="absolute top-0 w-full z-50 p-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg">
                        PE
                    </div>
                    <span className="font-black text-black uppercase tracking-widest text-sm">System</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" className="text-xs font-black uppercase tracking-widest hover:bg-gray-50">Log In</Button>
                    </Link>
                    <Link href="/login">
                        <Button className="bg-black text-white hover:bg-gray-800 rounded-none px-8 py-2 text-xs font-black uppercase tracking-widest">Comenzar</Button>
                    </Link>
                </div>

            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center text-center z-10 px-4">
                <div className="max-w-4xl space-y-6">
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-tight uppercase">
                        Process Engineering <br />
                        <span className="text-gray-400">System</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        Optimización de procesos de ingeniería mediante monitoreo en tiempo real y trazabilidad total.
                    </p>
                    <div className="flex justify-center gap-4 pt-8">
                        <Link href="/dashboard">
                            <Button size="lg" className="rounded-none text-xs uppercase tracking-[0.2em] font-black px-12 py-8 h-auto bg-black hover:bg-gray-800 shadow-[8px_8px_0px_0px_rgba(200,200,200,1)] transition-all">
                                Comenzar
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="rounded-none text-xs uppercase tracking-[0.2em] font-black px-12 py-8 h-auto border-2 border-black hover:bg-gray-50">
                            Más Información
                        </Button>
                    </div>

                </div>
            </main>

            {/* Footer Details */}
            <footer className="absolute bottom-6 w-full text-center text-gray-400 text-sm z-10">
                <p>&copy; 2026 Process Engineering System. All rights reserved.</p>
            </footer>
        </div>
    );
}
