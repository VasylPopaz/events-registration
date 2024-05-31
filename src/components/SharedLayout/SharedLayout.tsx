import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, ScrollUpBtn } from "../../components";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
        <ScrollUpBtn />
      </main>
    </>
  );
};
