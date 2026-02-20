'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { torqueSchema, TorqueSchemaType } from '../domain/torque.schema';
import { createTorqueRecordAction } from '../application/torque.actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircledIcon, CrossCircledIcon, ReloadIcon } from '@radix-ui/react-icons';

export function TorqueForm() {
    const [isPending, startTransition] = useTransition();
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<TorqueSchemaType>({
        resolver: zodResolver(torqueSchema),
        defaultValues: {
            tool_id: '',
            measured_value: 0,
            min_limit: 0,
            max_limit: 0,
            notes: ''
        }
    });

    const onSubmit = (data: TorqueSchemaType) => {
        setMessage(null);
        startTransition(async () => {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                if (value !== undefined) formData.append(key, value.toString());
            });

            const result = await createTorqueRecordAction(formData);

            if (result.success) {
                setMessage({ type: 'success', text: 'Registro guardado exitosamente.' });
                reset();
            } else {
                setMessage({ type: 'error', text: result.error || 'Ocurrió un error inesperado.' });
            }
        });
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Registro de Torque</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="tool_id">ID de Herramienta</Label>
                        <Input id="tool_id" {...register('tool_id')} placeholder="HERR-001" />
                        {errors.tool_id && <p className="text-sm text-red-500">{errors.tool_id.message}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="min_limit">Límite Mín (Nm)</Label>
                            <Input id="min_limit" type="number" step="0.01" {...register('min_limit', { valueAsNumber: true })} />
                            {errors.min_limit && <p className="text-sm text-red-500">{errors.min_limit.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="max_limit">Límite Máx (Nm)</Label>
                            <Input id="max_limit" type="number" step="0.01" {...register('max_limit', { valueAsNumber: true })} />
                            {errors.max_limit && <p className="text-sm text-red-500">{errors.max_limit.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="measured_value">Valor Medido (Nm)</Label>
                        <Input id="measured_value" type="number" step="0.01" {...register('measured_value', { valueAsNumber: true })} className="text-lg font-bold" />
                        {errors.measured_value && <p className="text-sm text-red-500">{errors.measured_value.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="notes">Notas (Opcional)</Label>
                        <Textarea id="notes" {...register('notes')} placeholder="Observaciones adicionales..." />
                    </div>

                    {message && (
                        <Alert variant={message.type === 'success' ? 'default' : 'destructive'}>
                            <div className="flex items-center gap-2">
                                {message.type === 'success' ? <CheckCircledIcon className="h-4 w-4 text-green-600" /> : <CrossCircledIcon className="h-4 w-4" />}
                                <AlertDescription>{message.text}</AlertDescription>
                            </div>
                        </Alert>
                    )}
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? (
                            <>
                                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                Guardando...
                            </>
                        ) : 'Guardar Registro'}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
