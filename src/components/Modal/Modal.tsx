import { useEffect } from "react";
import styled from "./Modal.module.css";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({onClose, children}:ModalProps) {

  const handleBackdropClick=(event:React.MouseEvent<HTMLDivElement>)=>{
    if(event.target===event.currentTarget){
      onClose();
    }
  };

  useEffect(()=>{
    const handleKeydown=(event:KeyboardEvent)=>{
      if(event.key==="Escape"){
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeydown);
    document.body.style.overflow="hidden";

    return()=>{
      document.removeEventListener("keydown",handleKeydown);
      document.body.style.overflow="";
    };
  }, [onClose]);


  return createPortal(
    <div className={styled.backdrop} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
      <div className={styled.modal}>
        <button className={styled.closeButton} aria-label="Close modal" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
