import { Suspense } from "react";
import { Header } from "../../components";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
