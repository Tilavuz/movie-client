import { ModeToggle } from "@/components/mode-toggle";
import SearchInput from "@/components/search-input";
import SiteLogo from "@/components/site-logo";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b p-4 mb-4">
      <nav className="container flex items-end justify-between">
        <SiteLogo />
        <ul className="text-xl flex items-end gap-4">
          <li className="">
            <Link to={"/"}>Kinolar</Link>
          </li>
          <li className="">
            <Link to={"/"}>Kinolar</Link>
          </li>
          <li className="">
            <Link to={"/"}>Kinolar</Link>
          </li>
        </ul>
        <div className="flex items-end gap-2">
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
              <SearchInput />
            </DialogContent>
          </Dialog>
          <ModeToggle />
          <Link className="border px-2 py-1 rounded-md font-bold" to={"/"}>
            Kirish
          </Link>
          <Link className="border px-2 py-1 rounded-md" to={"/"}>
            Ro'yhatdan o'tish
          </Link>
        </div>
      </nav>
    </header>
  );
}
