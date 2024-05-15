import { Suspense } from "react";
import { Header } from "../../components";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
