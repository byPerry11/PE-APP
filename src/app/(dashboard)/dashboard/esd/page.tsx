import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function ESDPage() {
    const mockRecords = [
        { id: '1', date: '2026-02-20', mat: 'MAT-A1', station: 'ST-01', value: '1.2e6', status: 'pass' },
        { id: '2', date: '2026-02-19', mat: 'MAT-B2', station: 'ST-14', value: '5.8e6', status: 'pass' },
        { id: '3', date: '2026-02-19', mat: 'MAT-C3', station: 'ST-05', value: '1.2e8', status: 'fail' },
    ];

    return (
        <div className="flex-1 space-y-8 p-8 pt-6">
            <h2 className="text-3xl font-black tracking-tighter uppercase">Control de Tapetes ESD</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Formulario Placeholder */}
                <Card className="border-2 border-black lg:col-span-1">
                    <CardHeader>
                        <CardTitle className="uppercase text-sm tracking-widest">Nuevo Registro</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-1">
                            <Label>ID de Tapete</Label>
                            <Input placeholder="MAT-XXX" className="border-gray-200" />
                        </div>
                        <div className="space-y-1">
                            <Label>Estación</Label>
                            <Input placeholder="ST-XX" className="border-gray-200" />
                        </div>
                        <div className="space-y-1">
                            <Label>Resistencia (Ohms)</Label>
                            <Input type="number" placeholder="0.00" className="border-gray-200 font-mono" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-black text-white hover:bg-gray-800 uppercase font-bold tracking-widest">
                            Registrar Medición
                        </Button>
                    </CardFooter>
                </Card>

                {/* Historial Placeholder */}
                <Card className="border-2 border-black lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="uppercase text-sm tracking-widest">Últimas Mediciones</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow className="border-b-2 border-black hover:bg-transparent">
                                    <TableHead className="text-black font-bold">Fecha</TableHead>
                                    <TableHead className="text-black font-bold">Tapete/Estación</TableHead>
                                    <TableHead className="text-black font-bold text-right">Valor</TableHead>
                                    <TableHead className="text-black font-bold text-center">Estado</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mockRecords.map((r) => (
                                    <TableRow key={r.id} className="border-b border-gray-100">
                                        <TableCell>{r.date}</TableCell>
                                        <TableCell>
                                            <div className="font-bold">{r.mat}</div>
                                            <div className="text-xs text-gray-500">{r.station}</div>
                                        </TableCell>
                                        <TableCell className="text-right font-mono">{r.value} Ω</TableCell>
                                        <TableCell className="text-center">
                                            <Badge variant={r.status === 'pass' ? 'default' : 'destructive'} className={r.status === 'pass' ? 'bg-black' : ''}>
                                                {r.status.toUpperCase()}
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
