import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authorResolver = {
  Query: {
    authors: async () => {
      return await prisma.author.findMany();
    },
  },

  Mutation: {
    createAuthor: async (_: any, args: any) => {
      const { name } = args;

      await prisma.author.create({
        data: {
          name,
        },
      });

      return {
        success: true,
        message: "Author created successfully",
      };
    },
    deleteAuthor: async (_: any, args: any) => {
      const { id } = args;

      await prisma.author.delete({
        where: {
          id: Number(id),
        },
      });

      return {
        success: true,
        message: "Author deleted successfully",
      };
    },

    updateAuthor: async (_: any, args: any) => {
      const { id, name } = args;

      await prisma.author.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
        },
      });

      return {
        success: true,
        message: "Author updated successfully",
      };
    },
  },
};

export { authorResolver };
