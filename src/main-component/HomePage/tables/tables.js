import React from "react";
import namesListJson from "./names.json";

const Tables = () => {
  console.log(namesListJson);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h5 style={{ fontSize: "2rem" }}>Find your seat</h5>
      <div
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {namesListJson.map((item) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "1.2rem",
            }}
          >
            <div>{item.name}</div>
            <div>{item.table}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tables;
