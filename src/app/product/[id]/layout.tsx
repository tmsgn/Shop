import { products } from "@/utils/data";

export function generateMetadata({ params }: any) {
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product does not exist.",
    };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
