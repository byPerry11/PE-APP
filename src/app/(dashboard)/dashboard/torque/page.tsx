import { TorqueForm } from '@/features/torque/components/TorqueForm';
import { TorqueHistory } from '@/features/torque/components/TorqueHistory';
import { getTorqueRecordsAction } from '@/features/torque/application/torque.actions';
import { Suspense } from 'react';
import { ReloadIcon } from '@radix-ui/react-icons';

export const metadata = {
    title: 'Registro de Torque | PE-APP',
    description: 'Gestión y control de mediciones de torque en herramientas.',
};

async function TorqueContent() {
    const result = await getTorqueRecordsAction();
    const records = result.success ? result.data || [] : [];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
                <TorqueForm />
            </div>
            <div className="lg:col-span-2">
                <TorqueHistory records={records} />
            </div>
        </div>
    );
}

export default function TorquePage() {
    return (
        <div className="flex-1 space-y-8 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Registro de Torque</h2>
            </div>

            <Suspense fallback={
                <div className="flex items-center justify-center min-h-[400px]">
                    <ReloadIcon className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
            }>
                <TorqueContent />
            </Suspense>
        </div>
    );
}
