import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1 className={titleFont.className}>Hola mundo</h1>  
    </main>
  );
}
