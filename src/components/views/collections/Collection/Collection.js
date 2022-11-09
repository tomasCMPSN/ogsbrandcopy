import React from "react";
import { useParams } from "react-router-dom";

const Collection = () => {
  const { id } = useParams();
  return (
    <div style={{ marginTop: "16vh" }}>
      <h1>{id}</h1>
    </div>
  );
};

export default Collection;
