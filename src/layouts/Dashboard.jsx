import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn className="four wide column"> {/* classname yerine width={4} alttakini de width={12} şeklinde de tanımlayabilirdik. */}
            <Categories />
          </GridColumn>
          <GridColumn className="twelve wide column">
            <ProductList />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
