import { FC, PropsWithChildren } from "react";
import "./styles.scss";

const Modal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__content-container">{children}</div>
    </div>
  );
};

export default Modal;
