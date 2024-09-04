import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function SearchInput() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="p-2">
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent className="top-[80px] w-full max-w-[800px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form className="flex items-center border rounded-sm">
          <Input
            placeholder="search movie..."
            className="border-0 focus-visible:ring-0"
          />
          <button type="submit" className="px-3">
            <Search />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
