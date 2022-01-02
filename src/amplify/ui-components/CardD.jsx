/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function CardD(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="320px"
      padding="0px 0px 0px 0px"
      position="relative"
      height="320px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        padding="0px 0px 0px 0px"
        top="0px"
        borderRadius="8px"
        left="0px"
        width="320px"
        position="absolute"
        height="320px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="center"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Inter"
        top="240px"
        left="101px"
        fontSize="32px"
        lineHeight="40px"
        position="absolute"
        fontWeight="700"
        direction="column"
        children="Explore"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
