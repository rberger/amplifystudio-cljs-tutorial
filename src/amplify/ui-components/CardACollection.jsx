/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Rental } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardA from "./CardA";
import { Collection } from "@aws-amplify/ui-react";
export default function CardACollection(props) {
  const { rental, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Rental,
        }).items;
  return (
    <Collection
      templateColumns="1fr 1fr 1fr 1fr"
      type="grid"
      alignItems="stretch"
      justifyContent="stretch"
      autoFlow="row"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <CardA
          width="auto"
          margin="0 4px 0 0"
          rental={item}
          height="auto"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CardA[0]")}
        ></CardA>
      )}
    </Collection>
  );
}
