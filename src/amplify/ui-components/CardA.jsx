/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function CardA(props) {
  const { rental, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="0px 0px 0px 0px"
      position="relative"
      justifyContent="center"
      gap="16px"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        borderRadius="14px"
        shrink="0"
        src={rental?.image}
        width="320px"
        position="relative"
        height="400px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        position="relative"
        shrink="0"
        gap="8px"
        direction="column"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          letterSpacing="0.010000000000000009px"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="320px"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="700"
          direction="column"
          children={rental?.name}
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="320px"
          fontSize="14px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children={`${"$"}${rental?.price}${"/night"}`}
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
