import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white p-4">
            <div className="w-full max-w-sm space-y-8">
                <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                        PE
                    </div>
                    <h1 className="text-3xl font-black tracking-tighter uppercase">Bienvenido</h1>
                    <p className="text-gray-500 font-medium">Ingresa tus credenciales para acceder al sistema.</p>
                </div>

                <Card className="border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <CardHeader>
                        <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Iniciar Sesión</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="uppercase text-[10px] font-black tracking-widest">Email</Label>
                            <Input id="email" type="email" placeholder="usuario@empresa.com" className="border-gray-200 focus-visible:ring-black" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="uppercase text-[10px] font-black tracking-widest">Contraseña</Label>
                            <Input id="password" type="password" className="border-gray-200 focus-visible:ring-black" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button className="w-full bg-black text-white hover:bg-gray-800 uppercase font-black tracking-widest py-6">
                            Entrar al Sistema
                        </Button>
                        <p className="text-center text-xs text-gray-400">
                            ¿No tienes cuenta? <Link href="/signup" className="text-black font-bold underline">Contacta a Soporte</Link>
                        </p>
                    </CardFooter>
                </Card>

                <p className="text-center text-[10px] text-gray-300 uppercase font-bold tracking-[0.3em]">
                    Process Engineering v1.0 • 2026
                </p>
            </div>
        </div>
    );
}
