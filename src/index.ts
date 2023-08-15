import { PrismaClient } from "@prisma/client";
import app from "./app";

const port = 5000;
const prisma = new PrismaClient();

async function main() {
  app.listen(port, () => {
    console.log(`Server running on port check d ${port}`);
  });
}

main();
