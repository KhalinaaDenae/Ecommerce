import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productApiSlice";

function HomeScreen() {
  const { data, isSuccess, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator while data is being fetched.
  }

  if (!isSuccess) {
    return <div>Error fetching data</div>; // Handle error state when data fetching fails.
  }

  return (
    <>
      <h1> Latest Products </h1>
      <Row>
        {data.products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
