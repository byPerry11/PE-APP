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
                    <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-xs">
                        PE
                    </div>
                    <span className="font-semibold text-gray-900 tracking-tight">System</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50">Log In</Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">Sign Up</Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center text-center z-10 px-4">
                <div className="max-w-4xl space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
                        Process Engineering <br />
                        <span className="text-green-500">System</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Streamline your production workflow with advanced real-time monitoring and data analytics.
                    </p>
                    <div className="flex justify-center gap-4 pt-8">
                        <Link href="/dashboard">
                            <Button size="lg" className="rounded-full text-base px-8 py-6 h-auto bg-black hover:bg-gray-800 shadow-lg shadow-green-500/20 border-2 border-transparent hover:border-green-500/50 transition-all">
                                Get Started
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="rounded-full text-base px-8 py-6 h-auto border-gray-200 hover:bg-gray-50 text-gray-600">
                            Learn More
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
