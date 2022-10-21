import React from "react";
import { Container } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Categories />
        <ProductList  />
      </Container>
    </div>
  );
}
