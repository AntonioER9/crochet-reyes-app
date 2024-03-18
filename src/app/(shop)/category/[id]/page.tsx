import { ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

const seedProducts = initialData.products;


interface Props {
  params: {
    id: Category;
  }
}

export default function ({ params }: Props) {

  const { id } = params;

  const products = seedProducts.filter(product => product.category === id )

  const labels: Record<Category, string> = {
    'small': 'Pequeños',
    'medium': 'Medianos',
    'big': 'Grandes',
    'all': 'Todos los tamaños'
  }

  // if (id === 'big') {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Amigurumis ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
      
    </>
  );
}