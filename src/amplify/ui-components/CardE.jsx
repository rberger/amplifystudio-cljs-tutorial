/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Text, View } from "@aws-amplify/ui-react";
export default function CardE(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      alignItems="flex-start"
      gap="0"
      width="320px"
      position="relative"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <View
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        grow="1"
        width="288px"
        position="relative"
        basis="288px"
        height="288px"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      >
        <Badge
          padding="4px 8px 4px 8px"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          textAlign="left"
          display="flex"
          letterSpacing="0.49px"
          justifyContent="flex-start"
          variation="default"
          fontFamily="Inter"
          top="0px"
          size="small"
          left="0px"
          gap="0"
          fontSize="16px"
          lineHeight="20px"
          position="absolute"
          fontWeight="700"
          direction="column"
          children="New"
          {...getOverrideProps(overrides, "Flex.View[0].Badge[0]")}
        ></Badge>
        <Flex
          padding="0px 0px 0px 0px"
          position="absolute"
          top="240px"
          left="0px"
          gap="0"
          direction="column"
          {...getOverrideProps(overrides, "Flex.View[0].Flex[0]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Inter"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="700"
            direction="column"
            children="T-Shirt"
            {...getOverrideProps(overrides, "Flex.View[0].Flex[0].Text[0]")}
          ></Text>
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
            textAlign="left"
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
            children="Classic Long Sleeve"
            {...getOverrideProps(overrides, "Flex.View[0].Flex[0].Text[1]")}
          ></Text>
        </Flex>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          textAlign="right"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          top="264px"
          left="256px"
          fontSize="16px"
          lineHeight="24px"
          position="absolute"
          fontWeight="700"
          direction="column"
          children="$99"
          {...getOverrideProps(overrides, "Flex.View[0].Text[0]")}
        ></Text>
      </View>
    </Flex>
  );
}
