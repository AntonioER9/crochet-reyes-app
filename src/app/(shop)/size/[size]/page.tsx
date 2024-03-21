import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';
// import { Size } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { Size } from '@prisma/client';
import { notFound, redirect } from 'next/navigation';

interface Props {
  params: {
    size: string;
  },
  searchParams: {
    page?: string;
  }
}

export default async function ({ params, searchParams }: Props) {

  const { size } = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ 
    page,
    size: size as Size
  });


  if (products.length === 0) {
    redirect(`/size/${size}`);
  }

  const labels: Record<string, string> = {
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
        title={`Amigurumis ${labels[size]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid 
        products={ products }
      />
      
      <Pagination totalPages={totalPages}/>
    </>
  );
}