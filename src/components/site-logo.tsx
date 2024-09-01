import { Link } from "react-router-dom";

export default function SiteLogo() {
  return (
    <h3>
      <Link to={"/"} className="flex items-end gap-1">
        <span className="border w-[40px] h-[40px] flex items-center justify-center font-bold text-2xl bg-black/90 dark:bg-white text-white dark:text-black rounded-lg">
          T
        </span>
        <span className="italic text-xl">movie</span>
      </Link>
    </h3>
  );
}
