import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminHomeTable = ({ data }) => {
  return (
    <tr>
      <td>
        <Button as={Link} to={`/admin/update/homedata/${data._id}`} variant="info" className="fw-bold w-100">
          UPDATE
        </Button>
      </td>
      <td>{data.title}</td>
      <td>{data.imgURL}</td>
    </tr>
  );
};

export default AdminHomeTable;
