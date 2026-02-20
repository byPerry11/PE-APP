import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity, Zap, Wind, Package, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
    {
        title: "Torque Hoy",
        value: "124",
        description: "Mediciones realizadas",
        icon: Activity,
        trend: "up",
        trendValue: "+12%"
    },
    {
        title: "ESD Status",
        value: "100%",
        description: "Estaciones conformes",
        icon: Zap,
        trend: "neutral",
        trendValue: "0%"
    },
    {
        title: "Ionizadores",
        value: "2",
        description: "Mantenimientos hoy",
        icon: Wind,
        trend: "down",
        trendValue: "-1"
    },
    {
        title: "Stock Crítico",
        value: "5",
        description: "Productos bajo umbral",
        icon: Package,
        trend: "urgent",
        trendValue: "Requiere atención"
    }
];

export default function HomePage() {
    return (
        <div className="flex-1 space-y-12 p-8 pt-6">
            <div className="flex flex-col space-y-2">
                <h2 className="text-4xl font-black tracking-tighter uppercase">Overview General</h2>
                <p className="text-gray-500 font-medium">Estado actual de la planta de ingeniería de procesos.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, idx) => (
                    <Card key={idx} className="border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-gray-500">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-black" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-black">{stat.value}</div>
                            <div className="flex items-center pt-1">
                                {stat.trend === "up" && <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />}
                                {stat.trend === "down" && <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />}
                                <p className={`text-[10px] font-bold uppercase tracking-tighter ${stat.trend === "urgent" ? "text-red-600 animate-pulse" : "text-gray-400"
                                    }`}>
                                    {stat.trendValue} {stat.description}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 border-black">
                    <CardHeader>
                        <CardTitle className="text-sm font-black uppercase tracking-[0.2em]">Actividad Reciente</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                <div className="space-y-1">
                                    <p className="text-sm font-black leading-none">Registro de Torque - HERR-092</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-tighter">Hace 15 minutos • Operador: J. Pérez</p>
                                </div>
                                <div className="px-2 py-1 bg-black text-white text-[10px] font-bold rounded">PASS</div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card className="border-2 border-black bg-black text-white">
                    <CardHeader>
                        <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-gray-400">Alertas del Sistema</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 mt-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                            <div>
                                <p className="text-sm font-bold uppercase tracking-tighter">Stock Crítico: Alcohol Isopropílico</p>
                                <p className="text-xs text-gray-500">Nivel actual: 5L. Umbral mínimo: 15L.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 mt-1.5 rounded-full bg-yellow-500" />
                            <div>
                                <p className="text-sm font-bold uppercase tracking-tighter">Mantenimiento Pendiente: ST-ION-12</p>
                                <p className="text-xs text-gray-500">Vencimiento: 25 de Febrero.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
