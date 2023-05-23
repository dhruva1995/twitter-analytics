import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import CadanceProvider from "./context/CadanceProvider";

function RootLayout() {
  return (
    <CadanceProvider>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </CadanceProvider>
  );
}

export default RootLayout;
