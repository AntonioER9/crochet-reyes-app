// import { PageNotFound } from '@/components';

import Link from "next/link";


export default function() {


  return (
    // <PageNotFound />
    <div>
      <h1>404 No encontrado</h1>
      <Link href="/">Regresar</Link>
    </div>
  );
}