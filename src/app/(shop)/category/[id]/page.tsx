import { ProductGrid, Title } from '@/components';
import { Size } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

const seedProducts = initialData.products;


interface Props {
  params: {
    id: Size;
  }
}

export default function ({ params }: Props) {

  const { id } = params;

  const products = seedProducts.filter(product => product.size === id )

  const labels: Record<Size, string> = {
    'small': 'pequeños',
    'medium': 'medianos',
    'big': 'grandes',
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