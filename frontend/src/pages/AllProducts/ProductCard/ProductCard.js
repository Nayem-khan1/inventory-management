import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFfile from "../../../components/product/productDetail/PDFfile/PDFfile";
import { BsDownload } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    quantity,
    sku,
    category,
    updatedAt,
    createdAt,
    image,
    _id,
  } = product;
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={image?.filePath} alt="product" />
      </div>
      <div className="info">
        <p className="p-name">
          {" "}
          <span className="badge">Name: </span> {name}
        </p>
        <p>
          <span className="name">price:</span> {price}
        </p>
        <p>
          <span className="name">Quantity</span>: {quantity}
        </p>
        <p>
          <span className="name">Quantity</span> {sku}
        </p>
        <p>
          <span className="name">Category: </span>
          {category}
        </p>
      </div>
      <div className="btn-group">
        <Link to={`/product-detail/${_id}`}>
          <button className="details-btn">Details</button>
        </Link>
        <PDFDownloadLink
          document={<PDFfile key={_id} product={product}></PDFfile>}
        >
          <button className="download-btn">
            <BsDownload></BsDownload>
          </button>
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ProductCard;
