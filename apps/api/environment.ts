import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const schema = z.object({
    DB_PRISMA_URL: z.string().min(6),
    DB_URL_NON_POOLING: z.string().min(6),
});

const parsed = schema.safeParse(process.env);

if (parsed.success === false) {
    console.error("❌ Invalid environment variables:", JSON.stringify(parsed.error.format(), null, 4));
    process.exit(1);
}

export const environments = () => parsed.data;
export type ConfigType = ReturnType<typeof environments>;