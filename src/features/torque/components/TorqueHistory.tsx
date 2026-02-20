'use client';

import { TorqueRecord } from '../domain/torque.entity';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface TorqueHistoryProps {
    records: TorqueRecord[];
}

export function TorqueHistory({ records }: TorqueHistoryProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Historial de Mediciones</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Fecha</TableHead>
                                <TableHead>Herramienta</TableHead>
                                <TableHead className="text-right">Valor (Nm)</TableHead>
                                <TableHead className="text-right">Rango (Nm)</TableHead>
                                <TableHead className="text-center">Estado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {records.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                        No hay registros disponibles.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                records.map((record) => (
                                    <TableRow key={record.id}>
                                        <TableCell>
                                            {format(new Date(record.created_at), 'dd MMM yyyy, HH:mm', { locale: es })}
                                        </TableCell>
                                        <TableCell className="font-medium">{record.tool_id}</TableCell>
                                        <TableCell className="text-right">{record.measured_value.toFixed(2)}</TableCell>
                                        <TableCell className="text-right text-muted-foreground">
                                            {record.min_limit.toFixed(2)} - {record.max_limit.toFixed(2)}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Badge variant={record.status === 'pass' ? 'default' : 'destructive'} className={record.status === 'pass' ? 'bg-green-500 hover:bg-green-600' : ''}>
                                                {record.status === 'pass' ? 'CUMPLE' : 'FALLO'}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
