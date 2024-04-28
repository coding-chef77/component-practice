import { SearchInput } from "@/components/SearchInput";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen flex flex-col gap-2 justify-center items-center">
      <form role="search">
        <SearchInput placeholder="Something...." />
      </form>
      <Button>Default</Button>
      <Button size="sm">small</Button>
      <Button size="lg">LARGE</Button>
      <Button size="icon">i</Button>
      <Button variant="outline">outline</Button>
      <Button variant="destructive">cancel</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="secondary">2nd</Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        🖕
      </Button>
    </main>
  );
}
