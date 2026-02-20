'use server';

import { torqueSchema } from '../domain/torque.schema';
import { torqueRepository } from '../infrastructure/torque.repository';
import { supabase } from '@/infrastructure/supabaseClient';
import { revalidatePath } from 'next/cache';

export async function createTorqueRecordAction(formData: FormData) {
    // Obtener usuario actual (esto debería venir de una sesión de servidor real en producción)
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return { error: 'No autorizado' };
    }

    const rawData = {
        tool_id: formData.get('tool_id') as string,
        measured_value: Number(formData.get('measured_value')),
        min_limit: Number(formData.get('min_limit')),
        max_limit: Number(formData.get('max_limit')),
        notes: (formData.get('notes') as string) || undefined,
    };

    // Validar con Zod
    const validated = torqueSchema.safeParse(rawData);

    if (!validated.success) {
        return {
            error: 'Error de validación',
            details: validated.error.flatten().fieldErrors
        };
    }

    const { measured_value, min_limit, max_limit } = validated.data;

    // Lógica de negocio: Calcular estado
    const status = (measured_value >= min_limit && measured_value <= max_limit) ? 'pass' : 'fail';

    try {
        const record = await torqueRepository.create({
            ...validated.data,
            status,
            operator_id: user.id
        });

        revalidatePath('/dashboard/torque');
        return { success: true, data: record };
    } catch (err: any) {
        return { error: err.message || 'Error desconocido al guardar' };
    }
}

export async function getTorqueRecordsAction() {
    try {
        const records = await torqueRepository.getAll();
        return { success: true, data: records };
    } catch (err: any) {
        return { error: err.message || 'Error al obtener registros' };
    }
}
