import { TopMenu } from "@/components";

export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu/>
      <h1>{children}</h1>
    </main>
  );
}