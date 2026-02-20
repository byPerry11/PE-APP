export type TorqueStatus = 'pass' | 'fail';

export interface TorqueRecord {
    id: string;
    created_at: string;
    tool_id: string;
    measured_value: number;
    min_limit: number;
    max_limit: number;
    status: TorqueStatus;
    operator_id: string | null;
    notes?: string;
}

export interface CreateTorqueInput {
    tool_id: string;
    measured_value: number;
    min_limit: number;
    max_limit: number;
    notes?: string;
}
