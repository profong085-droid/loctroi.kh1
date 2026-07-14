import { productsData } from "@/data/products";

export default function Page() {
  return <pre>{JSON.stringify(productsData, null, 2)}</pre>;
}
