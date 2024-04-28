import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  placeholder?: string;
};

export function SearchInput({ placeholder }: Props) {
  return (
    <div className="border rounded-lg flex justify-between items-center">
      <Input
        placeholder={placeholder || "Search..."}
        className="border-none"
        type="text"
      />

      <Button variant="ghost" size="icon">
        <Search />
        <span className="sr-only">Search Button</span>
      </Button>
    </div>
  );
}
