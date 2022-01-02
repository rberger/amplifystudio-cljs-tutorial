/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function HeroLayout4(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="160px 160px 160px 160px"
      backgroundColor="rgba(0,0,0,1)"
      overflow="hidden"
      gap="10px"
      width="1440px"
      position="relative"
      justifyContent="center"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        shrink="0"
        gap="24px"
        position="relative"
        justifyContent="center"
        direction="column"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(255,255,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          letterSpacing="0.49px"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="1120px"
          fontSize="16px"
          lineHeight="20px"
          position="relative"
          fontWeight="700"
          direction="column"
          children="LOREM IPSUM"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(255,255,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="1120px"
          fontSize="40px"
          lineHeight="48px"
          position="relative"
          fontWeight="700"
          direction="column"
          children="Ut enim ad minim veniam quis nostrud"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(255,255,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="1120px"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="700"
          direction="column"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[2]")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          alignItems="flex-start"
          shrink="0"
          gap="8px"
          width="466px"
          position="relative"
          direction="row"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <TextField
            labelHidden="true"
            size="default"
            shrink="0"
            variation="default"
            display="flex"
            height="36px"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[0].TextField[0]"
            )}
          ></TextField>
          <Button
            padding="8px 16px 8px 16px"
            size="default"
            shrink="0"
            display="flex"
            variation="primary"
            height="36px"
            children="Primary Button"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Button[0]")}
          ></Button>
        </Flex>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(255,255,255,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          letterSpacing="0.010000000000000009px"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="566px"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[3]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
