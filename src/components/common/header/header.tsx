import { ModeToggle } from "@/components/mode-toggle";
import SearchInput from "@/components/search-input";
import SiteLogo from "@/components/site-logo";
import { Link } from "react-router-dom";
import AuthForm from "../auth-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useEffect } from "react";
import userService from "@/services/user-service";
import { userLogin } from "@/features/user-slice";

export default function Header() {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    (async function () {
      try {
        const res = await userService.getUser()
        console.log(res);
        dispatch(userLogin(res))
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

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
          {user?._id ? (
            <p>User</p>
          ) : (
            <>
              <AuthForm router="login" />
              <AuthForm router="register" />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
