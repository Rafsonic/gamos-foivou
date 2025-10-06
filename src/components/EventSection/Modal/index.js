import React, { Fragment } from "react";

import { Button } from "@mui/material";

const LocationMap = ({
  maxWidth,
  button,
  buttonClass,
  link,
  label = "See Location",
}) => {
  function handleClickOpen() {
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <Fragment>
      <Button className={`btn ${buttonClass}`} onClick={handleClickOpen}>
        {button}
        {label}
      </Button>
    </Fragment>
  );
};
export default LocationMap;
