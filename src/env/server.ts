import "server-only";

import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

const serverEnv = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
});

export default serverEnv;
