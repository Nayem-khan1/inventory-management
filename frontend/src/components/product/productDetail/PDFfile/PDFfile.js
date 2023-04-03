import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "gray",
  },
});

const PDFfile = ({ product }) => {
  console.log(product);
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Product Name: {product?.name}
        </Text>
        <Text style={styles.text}>Category: {product?.category}</Text>
        <Text style={styles.text}>Price: {product?.price}</Text>
        <Text style={styles.text}>Quantity: {product?.quantity}</Text>
        <Text style={styles.text}>SKU: {product?.sku}</Text>
        <Text style={styles.text}>Last Update: {product?.updatedAt}</Text>
        <Text style={styles.text}>Product add date: {product?.createdAt}</Text>
      </Page>
    </Document>
  );
};

export default PDFfile;
