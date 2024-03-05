import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

db.snippet.create({
  data: {
    title: "My title",
    code: "const abc = ()",
  },
});
