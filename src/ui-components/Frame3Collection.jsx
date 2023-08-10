/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Home } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Frame3 from "./Frame3";
import { Collection } from "@aws-amplify/ui-react";
export default function Frame3Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.date(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Home,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "Frame3Collection")}
      {...rest}
    >
      {(item, index) => (
        <Frame3
          home={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Frame3>
      )}
    </Collection>
  );
}
