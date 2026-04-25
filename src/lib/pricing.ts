import { Product } from "@prisma/client";

export function getActivePrice(product: Product): number {
  const now = new Date();
  
  if (
    product.salePrice &&
    product.saleStartAt &&
    product.saleEndAt &&
    now >= product.saleStartAt &&
    now <= product.saleEndAt
  ) {
    return product.salePrice;
  }
  
  return product.regularPrice;
}
