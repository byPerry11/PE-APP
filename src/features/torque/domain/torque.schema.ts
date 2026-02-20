import { z } from 'zod';

export const torqueSchema = z.object({
    tool_id: z.string().min(1, 'El ID de la herramienta es requerido'),
    measured_value: z.number().min(0, 'El valor medido debe ser mayor o igual a 0'),
    min_limit: z.number().min(0, 'El límite mínimo debe ser mayor o igual a 0'),
    max_limit: z.number().min(0, 'El límite máximo debe ser mayor o igual a 0'),
    notes: z.string().optional(),
}).refine((data) => data.max_limit >= data.min_limit, {
    message: "El límite máximo debe ser mayor o igual al límite mínimo",
    path: ["max_limit"],
});

export type TorqueSchemaType = z.infer<typeof torqueSchema>;
