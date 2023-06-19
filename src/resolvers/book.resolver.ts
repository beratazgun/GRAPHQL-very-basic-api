import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const bookResolver = {
  Query: {
    books: async () => {
      return await prisma.book.findMany();
    },
  },

  Mutation: {
    createBook: async (
      _: any,
      { name, year, pages, rating, language, author }
    ) => {
      const authorId = await prisma.author.findFirst({
        where: {
          name: author,
        },
        select: {
          id: true,
        },
      });

      if (!authorId) {
        return {
          success: false,
          message: "Author not found",
        };
      }

      await prisma.book.create({
        data: {
          name,
          year,
          pages,
          rating,
          language,
          authorId: Number(authorId?.id),
        },
      });

      return {
        success: true,
        message: "Book created successfully",
      };
    },

    deleteBook: async (_: any, { id }) => {
      const book = await prisma.book.findFirst({
        where: {
          id: Number(id),
        },
      });

      if (!book) {
        return {
          success: false,
          message: "Book not found",
        };
      }

      await prisma.book.delete({
        where: {
          id: Number(id),
        },
      });

      return {
        success: true,
        message: "Book deleted successfully",
      };
    },

    updateBook: async (
      _: any,
      { id, name, year, pages, rating, language, author }
    ) => {
      const book = await prisma.book.findFirst({
        where: {
          id: Number(id),
        },
      });

      if (!book) {
        return {
          success: false,
          message: "Book not found",
        };
      }

      const authorId = await prisma.author.findFirst({
        where: {
          name: author,
        },
        select: {
          id: true,
        },
      });

      if (!authorId) {
        return {
          success: false,
          message: "Author not found",
        };
      }

      await prisma.book.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
          year,
          pages,
          rating,
          language,
          authorId: Number(authorId?.id),
        },
      });

      return {
        success: true,
        message: "Book updated successfully",
      };
    },
  },
};

export { bookResolver };
