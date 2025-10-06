import { useState } from "react";
import namesListJson from "./names.json";

const Tables = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNames = namesListJson.filter((item) => {
    const search = searchTerm.toLowerCase().trim();
    return (
      item.name.toLowerCase().includes(search) ||
      item.greekglishName.toLowerCase().includes(search)
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingLeft: "50px",
        paddingRight: "50px",
      }}
    >
      <h5 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Find your seat</h5>
      <input
        placeholder="Search name"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "2rem",
          border: "2px solid #A4AC86!important",
          borderRadius: "4px",
          color: "#A4AC86",
          height: "35px",
          fontWeight: "600",
          padding: "0 10px",
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {filteredNames.length > 0 ? (
          filteredNames.map((item) => (
            <div
              key={item.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "1.2rem",
              }}
            >
              <div className="primary3 bold">{item.name}</div>
              <div className="primary3 bold">{item.table}</div>
            </div>
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              color: "#A4AC86",
              marginBottom: "3rem",
            }}
          >
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default Tables;
