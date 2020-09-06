import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import MyCV from "..";
import { Button } from "reactstrap";

export const MyCVPrint = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <MyCV ref={componentRef} />
      <Button 
      style={{
          position: "fixed",
          top: "10px",
          right: "10px"
      }}
      onClick={handlePrint}>
        <i className="fas fa-print fa-3x"></i>
      </Button>
    </div>
  );
};
