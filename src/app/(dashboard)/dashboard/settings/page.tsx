import { Settings, Globe, Moon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
    return (
        <div className="flex-1 space-y-8 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Ajustes del Sistema</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Idioma */}
                <Card className="border-2 border-black">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Idioma</CardTitle>
                        <Globe className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="text-lg font-bold uppercase tracking-widest">Español (ES)</div>
                        <p className="text-xs text-muted-foreground">
                            Predeterminado según el sistema.
                        </p>
                    </CardContent>
                </Card>

                {/* Tema */}
                <Card className="border-2 border-black">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Tema Visual</CardTitle>
                        <Moon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="text-lg font-bold uppercase tracking-widest">Minimal B/W</div>
                        <p className="text-xs text-muted-foreground">
                            Tema blanco y negro activado por defecto.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
