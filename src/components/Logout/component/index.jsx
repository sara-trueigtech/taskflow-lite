import React from "react";

const Logout = () => {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };


  return (
    <>
      <button >Logout</button>

      <dialog ref={dialogRef}>
        <p>Are you sure you want to logout?</p>

        <button> Logout</button>
        <button>Cancel</button>
      </dialog>
    </>
  );
};

export default Logout;
