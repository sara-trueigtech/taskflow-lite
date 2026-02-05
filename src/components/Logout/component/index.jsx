import React, { useEffect, useRef } from "react";
import useLogout from "../hooks/useLogout";

const Logout = ({ open, onClose }) => {
  const dialogRef = useRef(null);

  const { handleLogout } = useLogout();

  useEffect(() => {
    if (open) dialogRef.current.showModal();
    else dialogRef.current.close();
  }, [open]);

  return (
    <>
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            onClose();
          }
        }}
        className="backdrop:bg-black/60 rounded-lg border border-borderColor p-0 m-auto "
      >
        <div className="flex flex-col items-center justify-center gap-9 p-10 bg-bgColor ">
          <p className="text-2xl font-bold text-white">
            Are you sure you want to logout?
          </p>

          <div className="flex gap-4">
            <button onClick={handleLogout} className="roundButtonStyle">
              {" "}
              Logout
            </button>
            <button onClick={onClose} className="roundButtonStyle text-white">
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Logout;
