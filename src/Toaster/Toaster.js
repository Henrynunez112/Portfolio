import React from "react";
import moment from "moment";
import "./Toaster.css";

const Toaster = () => {
  return (
    <div
      className="toast"
      id="toastBooking"
      style={{
        position: "fixed",
        top: 80,
        right: 10,
        width: "300px",
        zIndex: "5",
        border: "2px solid var(--oxfordBlue)",
        borderRadius: "37px 0px",
      }}
      data-autohide={true}
      data-delay="5000"
    >
      <div className="toast-header" style={{
        padding: "10px",
        borderRadius: "35px 0px",
        backgroundColor: "var(--cornFlowerBlue)",
        borderBottom: "2px solid var(--oxfordBlue)",
        color: "var(--oxfordBlue)"
      }}>
        <strong className="mr-auto">Thank You!</strong>
        <small>{moment().calendar()}</small>
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="toast-body">Your Message has been sent!</div>
    </div>
  );
};
export default Toaster;
