import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, Package } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function InventoryPage() {
    const mockProducts = [
        { id: '1', name: 'Puntas de Desarmador #2', part: 'PD-002', stock: 45, alert: 'none' },
        { id: '2', name: 'Alcohol Isopropílico 1L', part: 'AI-100', stock: 5, alert: 'critical' },
        { id: '3', name: 'Guantes ESD Talla M', part: 'G-ESD-M', stock: 12, alert: 'warning' },
    ];

    return (
        <div className="flex-1 space-y-8 p-8 pt-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black tracking-tighter uppercase">Sistema de Inventario</h2>
                <div className="flex gap-2">
                    <Button variant="outline" className="border-2 border-black font-bold uppercase text-xs">
                        <Package className="mr-2 h-4 w-4" /> Stock
                    </Button>
                    <Button className="bg-black text-white hover:bg-gray-800 font-bold uppercase text-xs shadow-lg">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Terminal POS
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 space-y-6">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                            placeholder="Buscar producto por nombre o No. de Parte..."
                            className="pl-12 py-6 border-2 border-black text-lg focus-visible:ring-0"
                        />
                    </div>

                    <Card className="border-2 border-black">
                        <CardHeader>
                            <CardTitle className="uppercase text-sm tracking-widest">Niveles de Stock</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-b-2 border-black hover:bg-transparent">
                                        <TableHead className="text-black font-bold">Descripción</TableHead>
                                        <TableHead className="text-black font-bold">No. Parte</TableHead>
                                        <TableHead className="text-black font-bold text-right">Cantidad</TableHead>
                                        <TableHead className="text-black font-bold text-center">Alertas</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockProducts.map((p) => (
                                        <TableRow key={p.id} className="border-b border-gray-100">
                                            <TableCell className="font-bold">{p.name}</TableCell>
                                            <TableCell className="font-mono text-sm">{p.part}</TableCell>
                                            <TableCell className="text-right font-black text-lg">{p.stock}</TableCell>
                                            <TableCell className="text-center">
                                                {p.alert === 'critical' && <Badge variant="destructive" className="uppercase font-bold animate-pulse text-[10px]">Crítico</Badge>}
                                                {p.alert === 'warning' && <Badge className="bg-black text-white uppercase font-bold text-[10px]">Bajo</Badge>}
                                                {p.alert === 'none' && <Badge variant="outline" className="text-gray-400 text-[10px]">OK</Badge>}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-1">
                    <Card className="border-2 border-black bg-black text-white sticky top-8">
                        <CardHeader>
                            <CardTitle className="uppercase text-xs tracking-[0.2em] text-gray-400">Resumen de Salida (POS)</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="text-center py-8 border-2 border-dashed border-gray-700 rounded-xl">
                                <ShoppingCart className="mx-auto h-12 w-12 text-gray-700 mb-2" />
                                <p className="text-xs text-gray-500 font-bold uppercase">Carrito Vacío</p>
                            </div>
                            <div className="space-y-2 border-t border-gray-800 pt-4">
                                <div className="flex justify-between text-xs uppercase font-bold">
                                    <span>Productos</span>
                                    <span>0</span>
                                </div>
                                <div className="flex justify-between text-lg font-black uppercase">
                                    <span>Total</span>
                                    <span>--</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardContent>
                            <Button disabled className="w-full bg-white text-black hover:bg-gray-200 font-black uppercase tracking-widest text-xs">
                                Confirmar Salida
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
