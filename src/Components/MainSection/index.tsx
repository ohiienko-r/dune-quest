import { FC, PropsWithChildren } from "react";
import "./styles.scss";

const MainSection: FC<PropsWithChildren> = ({ children }) => {
  return <section className="main-section">{children}</section>;
};

export default MainSection;
