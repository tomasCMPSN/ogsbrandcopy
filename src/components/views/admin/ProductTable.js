import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { StyledTruncateTd } from "./StyledTruncateTd";

const ProductTable = ({ product, URLCollections, URLProducts, getAPI }) => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URLProducts}${_id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.status === 200) {
            Swal.fire(
              "Deleted!",
              "Your collection has been deleted.",
              "success"
            );
            getAPI();
            refreshPage();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <tr>
      <td>
        <Button
          as={Link}
          to={`/admin/update/products/${product._id}`}
          variant="info"
          className="fw-bold w-100"
        >
          UPDATE
        </Button>
        <Button
          onClick={() => handleDelete(product._id)}
          variant="danger"
          className="fw-bold w-100 mt-1"
        >
          DELETE
        </Button>
      </td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.colors}</td>
      <StyledTruncateTd className="text-truncate">
        {product.color1Img1}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color1Img2}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color1Img3}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color1Img4}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color1Img5}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color2Img1}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color2Img2}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color2Img3}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color2Img4}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color2Img5}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color3Img1}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color3Img2}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color3Img3}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color3Img4}
      </StyledTruncateTd>
      <StyledTruncateTd className="text-truncate">
        {product.color3Img5}
      </StyledTruncateTd>
    </tr>
  );
};

export default ProductTable;
