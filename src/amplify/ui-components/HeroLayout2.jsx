/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
import HeroLayout3 from "./HeroLayout3";
export default function HeroLayout2(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1440px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="858px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="1440px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0px"
        left="0px"
        height="858px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <HeroLayout3
        backgroundColor="rgba(0,0,0,0.5)"
        position="absolute"
        top="0px"
        left="0px"
        height="858px"
        display="flex"
        {...getOverrideProps(overrides, "View.HeroLayout3[0]")}
      ></HeroLayout3>
    </View>
  );
}
