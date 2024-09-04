import { FormEvent, useRef } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import userService from "@/services/user-service";
import { useDispatch } from "react-redux";
import { userLogin } from "@/features/user-slice";
import { setToken } from "@/helpers/cookie-token";

export default function AuthForm({ router }: { router: string }) {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const authData = {
        username: usernameRef?.current?.value,
        password: passwordRef?.current?.value,
      };
      
      if (router === "login" && authData.password && authData.username) {
        const res = await userService.login({
          username: authData.username,
          password: authData.password,
        });
        setToken(res.token)
        dispatch(userLogin(res.user));
        return;
      }
      if (router === "register" && authData.password && authData.username) {
        if (authData.password === confirmPasswordRef?.current?.value) {
          const res = await userService.register({
            username: authData.username,
            password: authData.password,
          });
          dispatch(userLogin(res));
        }
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className={`border px-2 py-1 rounded-md ${
            router === "login" ? "font-bold" : ""
          }`}
        >
          {router === "login" ? "Kirish" : "Ro'yhatdan o'tish"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => handleAuth(e)} className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">
            {router === "login" ? "Kirish" : "Ro'yhatdan o'tish"}
          </h3>
          <Input ref={usernameRef} placeholder="username" />
          <Input ref={passwordRef} placeholder="password" />
          {router === "register" && (
            <Input ref={confirmPasswordRef} placeholder="confirm password" />
          )}
          <Button type="submit">{router === "login" ? "Kirish" : "Ro'yhatdan o'tish"}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
