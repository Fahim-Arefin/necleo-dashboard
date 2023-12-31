function Modal({ header, modalRef, children }) {
  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-2xl text-center text-[#FA782F]">
          {header}
        </h3>
        {/* Create Form */}
        {children}
      </div>
    </dialog>
  );
}

export default Modal;
