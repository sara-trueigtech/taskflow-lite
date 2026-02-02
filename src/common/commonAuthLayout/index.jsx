import React, { useEffect, useRef } from "react";
import image from "../../assets/image.png";

const AuthLayout = ({ open, onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (open) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      className="backdrop:bg-black/60 rounded-xl p-0 m-auto"
    >
      <div className="max-w-380 max-h-184 bg-bgColor rounded-xl overflow-hidden flex border border-borderColor">
        
        <div className="w-1/2">
          <img src={image} alt="auth" className="object-cover h-full" />
        </div>

        <div className="w-1/2 flex items-center justify-center overflow-hidden">
          {children}
        </div>

      </div>
    </dialog>
  );
};

export default AuthLayout;
