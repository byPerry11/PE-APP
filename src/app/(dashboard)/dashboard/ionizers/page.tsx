import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export default function IonizersPage() {
    const mockSchedules = [
        { id: '1', unit: 'ION-04', line: 'L-01', nextDate: '2026-03-05', status: 'pending' },
        { id: '2', unit: 'ION-12', line: 'L-03', nextDate: '2026-02-25', status: 'urgent' },
        { id: '3', unit: 'ION-08', line: 'L-01', nextDate: '2026-02-10', status: 'completed' },
    ];

    return (
        <div className="flex-1 space-y-8 p-8 pt-6">
            <h2 className="text-3xl font-black tracking-tighter uppercase">Mantenimiento de Ionizadores</h2>

            <div className="grid gap-8">
                <Card className="border-2 border-black">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="uppercase text-sm tracking-widest">Próximos Mantenimientos</CardTitle>
                        <Button size="sm" className="bg-black text-white uppercase text-[10px] font-bold tracking-tighter">
                            Programar Nuevo
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow className="border-b-2 border-black hover:bg-transparent">
                                    <TableHead className="text-black font-bold">Unidad</TableHead>
                                    <TableHead className="text-black font-bold">Línea</TableHead>
                                    <TableHead className="text-black font-bold">Fecha Programada</TableHead>
                                    <TableHead className="text-black font-bold text-center">Prioridad/Estado</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mockSchedules.map((s) => (
                                    <TableRow key={s.id} className="border-b border-gray-100">
                                        <TableCell className="font-bold">{s.unit}</TableCell>
                                        <TableCell>{s.line}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-3 w-3" />
                                                {s.nextDate}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Badge
                                                variant={s.status === 'urgent' ? 'destructive' : s.status === 'completed' ? 'outline' : 'default'}
                                                className={s.status === 'pending' ? 'bg-black' : ''}
                                            >
                                                {s.status.toUpperCase()}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
