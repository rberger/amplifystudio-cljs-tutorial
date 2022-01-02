/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function HeroLayout3(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="160px 240px 160px 240px"
      backgroundColor="rgba(0,0,0,1)"
      overflow="hidden"
      alignItems="center"
      gap="10px"
      width="1440px"
      position="relative"
      justifyContent="center"
      direction="column"
      height="548px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        grow="1"
        alignItems="center"
        gap="24px"
        position="relative"
        basis="228px"
        justifyContent="center"
        direction="column"
        height="228px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(255,255,255,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          letterSpacing="0.49px"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="960px"
          fontSize="16px"
          lineHeight="20px"
          position="relative"
          fontWeight="700"
          direction="column"
          children="LOREM IPSUM"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          position="relative"
          shrink="0"
          gap="16px"
          direction="column"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            color="rgba(255,255,255,1)"
            textAlign="center"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="960px"
            fontSize="40px"
            lineHeight="48px"
            position="relative"
            fontWeight="700"
            direction="column"
            children="Ut enim ad minim veniam quis nostrud"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
          <Text
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            color="rgba(255,255,255,1)"
            textAlign="center"
            shrink="0"
            display="flex"
            letterSpacing="0.010000000000000009px"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="960px"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[1]")}
          ></Text>
        </Flex>
        <Button
          width="206px"
          size="large"
          shrink="0"
          variation="primary"
          display="flex"
          children="Primary Button"
          {...getOverrideProps(overrides, "Flex.Flex[0].Button[0]")}
        ></Button>
      </Flex>
    </Flex>
  );
}
