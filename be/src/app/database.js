import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query",
        },
        {
            emit: "event",
            level: "error",
        },
        {
            emit: "event",
            level: "info",
        },
        {
            emit: "event",
            level: "warn",
        },
    ],
});

// throw logging to logging.js
prismaClient.$on("error", (e) => {
    console.error(e);
});

prismaClient.$on("info", (e) => {
    console.info(e);
});

prismaClient.$on("warn", (e) => {
    console.warn(e);
});
prismaClient.$on("query", (e) => {
    console.log(e);
});

export { prismaClient };
