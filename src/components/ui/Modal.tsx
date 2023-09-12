import { ReactNode } from "react";
import closeIcon from "../../assets/close_icon.png";
import "./Modal.scss";

interface ModalProps {
  children?: ReactNode;
  closeAction: () => void;
}

const stopPropogation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
}

const Modal = ({ children, closeAction }: ModalProps) => {
  return (
    <div className="Modal__Backdrop" onClick={closeAction}>
      <div className="Modal" onClick={stopPropogation}>
        <button className="Modal__Close" onClick={closeAction}>
          <img
            className="Modal__Close__Icon"
            src={closeIcon}
            alt="Close modal icon"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;