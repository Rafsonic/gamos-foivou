import React, { Fragment } from "react";

import { Button } from "@mui/material";

const LocationMap = ({ maxWidth, button, buttonClass, link }) => {
  function handleClickOpen() {
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <Fragment>
      <Button className={`btn ${buttonClass}`} onClick={handleClickOpen}>
        {button}
        See Location
      </Button>
    </Fragment>
  );
};
export default LocationMap;
