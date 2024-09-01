import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchInput() {
  return (
    <form className="flex items-center border rounded-sm">
      <Input placeholder="search movie..." className="border-0 focus-visible:ring-0" />
      <button type="submit" className="px-3">
        <Search />
      </button>
    </form>
  );
}