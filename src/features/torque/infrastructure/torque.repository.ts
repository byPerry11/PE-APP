import { supabase } from '@/infrastructure/supabaseClient';
import { CreateTorqueInput, TorqueRecord } from '../domain/torque.entity';

export const torqueRepository = {
    async create(record: CreateTorqueInput & { status: 'pass' | 'fail', operator_id: string }): Promise<TorqueRecord> {
        const { data, error } = await supabase
            .from('torque_records')
            .insert([record])
            .select()
            .single();

        if (error) {
            throw new Error(`Error al crear el registro de torque: ${error.message}`);
        }

        return data as TorqueRecord;
    },

    async getAll(): Promise<TorqueRecord[]> {
        const { data, error } = await supabase
            .from('torque_records')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            throw new Error(`Error al obtener los registros de torque: ${error.message}`);
        }

        return data as TorqueRecord[];
    }
};
