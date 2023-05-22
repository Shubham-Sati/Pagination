import React, { useState } from "react";
import "./style.css";
import { products } from "../../localFiles/products";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(8);
  const [startIndex, setStartIndex] = useState((currentPage - 1) * itemPerPage);
  const [endIndex, setEndIndex] = useState(startIndex + itemPerPage);
  const [totalItem, setTotalItems] = useState(products.length);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalItem / itemPerPage)
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setStartIndex((page - 1) * itemPerPage);
    setEndIndex((page - 1) * itemPerPage + itemPerPage);
  };
  return (
    <div className="mainDiv">
      <div>Displaying all products using pagination</div>

      <div className="allProducts">
        {products.slice(startIndex, endIndex).map((product) => (
          <Card sx={{ maxWidth: 250, height: 430 }} key={product.id}>
            <CardMedia
              sx={{ objectFit: "contain", padding: "5px" }}
              component="img"
              alt="green iguana"
              height="140"
              image={product.icon}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title.slice(0, 20)}...
                <Typography
                  size="small"
                  style={{
                    fontSize: "20px",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >{`$ ${product.price}`}</Typography>
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {product.description.slice(0, 100)}...
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>

      <div className="pagesNumber">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            {"<"}
          </button>
        )}

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={pageNumber === currentPage ? "active" : ""}
            >
              {pageNumber}
            </button>
          )
        )}

        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
