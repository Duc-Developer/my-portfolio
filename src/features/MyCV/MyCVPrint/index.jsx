import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import MyCV from "..";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const MyCVPrint = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const myProfile = useSelector((state) => state.myCv.profile);
  const history = useHistory();

  return (
    <div>
      <MyCV data={myProfile} ref={componentRef} />
      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Button color="success" onClick={handlePrint}>
          <i className="fas fa-print fa-3x">{" Print"}</i>
        </Button>
        <Button onClick={history.goBack}>
          <i className="fas fa-undo fa-3x">{" Back"}</i>
        </Button>
      </div>
    </div>
  );
};
