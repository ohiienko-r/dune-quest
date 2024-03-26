import { FC } from "react";
import { Header, MainSection } from "@/Components";
import { Outlet } from "react-router-dom";

const Root: FC = () => {
  return (
    <>
      <Header />
      <MainSection>
        <Outlet />
      </MainSection>
    </>
  );
};

export default Root;
