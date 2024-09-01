import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mb-12">{children ? children : <Outlet />}</main>
      <Footer />
    </>
  );
}
