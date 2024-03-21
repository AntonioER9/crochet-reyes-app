"use server";

import prisma from "@/lib/prisma";
import { Size } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  size?: Size;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  size,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 1. Obtener los productos
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      //! Por tamaño
      where: {
        size: size,
      },
    });

    // 2. Obtener el total de páginas
    // todo:
    const totalCount = await prisma.product.count({
      where: {
        size: size,
      },
    });

    const totalPages = Math.ceil(totalCount / take); //así siempre nos entrega el entero

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};