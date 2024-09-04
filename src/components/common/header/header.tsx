import { ModeToggle } from "@/components/mode-toggle";
import SearchInput from "@/components/search-input";
import SiteLogo from "@/components/site-logo";
import { Link } from "react-router-dom";
import AuthForm from "../auth-form";

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
          <SearchInput />
          <ModeToggle />
          <AuthForm router="login" />
          <AuthForm router="register" />
        </div>
      </nav>
    </header>
  );
}
