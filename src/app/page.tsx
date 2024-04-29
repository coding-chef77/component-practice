import { SearchInput } from "@/components/SearchInput";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Button } from "@/components/ui/button";

function TopNav() {
  return (
    <nav className="h-20 flex justify-between items-center border-b-2 px-4">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-lg">Logo</span>
        <SearchInput placeholder="Search..." />
      </div>
      <div className="flex items-center space-x-4">
        <ThemeSwitch />
      </div>
    </nav>
  );
}
export default function Home() {
  return (
    <>
      <TopNav />
      <main className="h-screen flex flex-col gap-2 justify-center items-center">
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
    </>
  );
}
