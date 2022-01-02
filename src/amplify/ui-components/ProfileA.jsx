/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, IconGroup, Image, Text } from "@aws-amplify/ui-react";
export default function ProfileA(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      alignItems="center"
      gap="24px"
      width="320px"
      position="relative"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        width="160px"
        padding="0px 0px 0px 0px"
        position="relative"
        borderRadius="160px"
        shrink="0"
        height="160px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        padding="0px 0px 0px 0px"
        alignItems="center"
        shrink="0"
        gap="8px"
        width="254px"
        position="relative"
        direction="column"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          fontSize="32px"
          lineHeight="40px"
          position="relative"
          fontWeight="700"
          direction="column"
          children="Melinda Marcus"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          letterSpacing="0.010000000000000009px"
          justifyContent="flex-start"
          fontFamily="Inter"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="Design Engineer at Cloth Studios"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        alignItems="flex-start"
        shrink="0"
        gap="16px"
        width="138px"
        position="relative"
        direction="row"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <IconGroup
          padding="0px 0px 0px 0px"
          overflow="hidden"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          shrink="0"
          width="24px"
          fontSize="24px"
          position="relative"
          type="group"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[1].IconGroup[0]")}
        ></IconGroup>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
          textAlign="center"
          shrink="0"
          display="flex"
          letterSpacing="0.010000000000000009px"
          justifyContent="flex-start"
          fontFamily="Inter"
          fontSize="16px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children="99 Followers"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[0]")}
        ></Text>
      </Flex>
      <Button
        alignSelf="stretch"
        size="large"
        shrink="0"
        variation="primary"
        display="flex"
        children="View Profile"
        {...getOverrideProps(overrides, "Flex.Button[0]")}
      ></Button>
    </Flex>
  );
}
