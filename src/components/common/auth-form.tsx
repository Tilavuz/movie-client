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

export default function AuthForm({ router }: { router: string }) {
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
        <form className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">
            {router === "login" ? "Kirish" : "Ro'yhatdan o'tish"}
          </h3>
          <Input placeholder="username" />
          <Input placeholder="password" />
          {router === "register" && <Input placeholder="confirm password" />}
          <Button>{router === "login" ? "Kirish" : "Ro'yhatdan o'tish"}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
