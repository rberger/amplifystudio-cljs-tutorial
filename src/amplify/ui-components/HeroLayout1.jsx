/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroLayout1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Flex.Flex[0].Flex[0].Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "480px",
          fontSize: "40px",
          lineHeight: "48px",
          position: "relative",
          fontWeight: "700",
          direction: "column",
          children: "Ut enim ad minim veniam quis nostrud",
        },
        "Flex.Flex[0].Flex[0].Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          alignItems: "center",
          shrink: "0",
          gap: "16px",
          position: "relative",
          justifyContent: "center",
          direction: "column",
        },
        "Flex.Flex[1]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          grow: "1",
          overflow: "hidden",
          alignItems: "center",
          gap: "10px",
          position: "relative",
          basis: "720px",
          justifyContent: "center",
          direction: "column",
          height: "564px",
        },
        "Flex.Flex[0].Flex[0].Flex[0].Text[1]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          letterSpacing: "0.010000000000000009px",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "480px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
          children:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        },
        "Flex.Flex[0].Flex[0].Button[0]": {
          width: "206px",
          size: "large",
          shrink: "0",
          variation: "primary",
          display: "flex",
          children: "Primary Button",
        },
        "Flex.Flex[0].Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          letterSpacing: "0.49px",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "480px",
          fontSize: "16px",
          lineHeight: "20px",
          position: "relative",
          fontWeight: "700",
          direction: "column",
          children: "LOREM IPSUM",
        },
        "Flex.Flex[0]": {
          padding: "120px 120px 120px 120px",
          alignSelf: "stretch",
          backgroundColor: "rgba(255,255,255,1)",
          grow: "1",
          overflow: "hidden",
          alignItems: "center",
          gap: "10px",
          position: "relative",
          basis: "720px",
          justifyContent: "center",
          direction: "column",
          height: "564px",
        },
        Flex: {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          gap: "0",
          width: "1440px",
          position: "relative",
          justifyContent: "center",
          direction: "row",
        },
        "Flex.Flex[0].Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          alignItems: "center",
          shrink: "0",
          gap: "24px",
          position: "relative",
          justifyContent: "center",
          direction: "column",
        },
        "Flex.Flex[1].Image[0]": {
          width: "720px",
          padding: "0px 0px 0px 0px",
          grow: "1",
          position: "relative",
          basis: "564px",
          height: "564px",
        },
      },
      variantValues: { mode: "Light" },
    },
    {
      overrides: {
        "Flex.Flex[0].Flex[0].Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color: "rgba(255,255,255,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "480px",
          fontSize: "40px",
          lineHeight: "48px",
          position: "relative",
          fontWeight: "700",
          direction: "column",
          children: "Ut enim ad minim veniam quis nostrud",
        },
        "Flex.Flex[0].Flex[0].Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          alignItems: "center",
          shrink: "0",
          gap: "16px",
          position: "relative",
          justifyContent: "center",
          direction: "column",
        },
        "Flex.Flex[1]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          grow: "1",
          overflow: "hidden",
          alignItems: "center",
          gap: "10px",
          position: "relative",
          basis: "720px",
          justifyContent: "center",
          direction: "column",
          height: "564px",
        },
        "Flex.Flex[0].Flex[0].Flex[0].Text[1]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color: "rgba(255,255,255,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          letterSpacing: "0.010000000000000009px",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "480px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
          children:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        },
        "Flex.Flex[0].Flex[0].Button[0]": {
          width: "206px",
          size: "large",
          shrink: "0",
          variation: "primary",
          display: "flex",
          children: "Primary Button",
        },
        "Flex.Flex[0].Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color: "rgba(255,255,255,1)",
          textAlign: "center",
          shrink: "0",
          display: "flex",
          letterSpacing: "0.49px",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "480px",
          fontSize: "16px",
          lineHeight: "20px",
          position: "relative",
          fontWeight: "700",
          direction: "column",
          children: "LOREM IPSUM",
        },
        "Flex.Flex[0]": {
          padding: "120px 120px 120px 120px",
          alignSelf: "stretch",
          backgroundColor: "rgba(0,0,0,1)",
          grow: "1",
          overflow: "hidden",
          alignItems: "center",
          gap: "10px",
          position: "relative",
          basis: "720px",
          justifyContent: "center",
          direction: "column",
          height: "564px",
        },
        Flex: {
          padding: "0px 0px 0px 0px",
          alignItems: "center",
          gap: "0",
          width: "1440px",
          position: "relative",
          justifyContent: "center",
          direction: "row",
        },
        "Flex.Flex[0].Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          alignItems: "center",
          shrink: "0",
          gap: "24px",
          position: "relative",
          justifyContent: "center",
          direction: "column",
        },
        "Flex.Flex[1].Image[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          grow: "1",
          width: "720px",
          position: "relative",
          basis: "564px",
          height: "564px",
        },
      },
      variantValues: { mode: "Dark" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      padding="0px 0px 0px 0px"
      alignItems="center"
      gap="0"
      width="1440px"
      position="relative"
      justifyContent="center"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="120px 120px 120px 120px"
        alignSelf="stretch"
        backgroundColor="rgba(255,255,255,1)"
        grow="1"
        overflow="hidden"
        alignItems="center"
        gap="10px"
        position="relative"
        basis="720px"
        justifyContent="center"
        direction="column"
        height="564px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          alignItems="center"
          shrink="0"
          gap="24px"
          position="relative"
          justifyContent="center"
          direction="column"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            textAlign="center"
            shrink="0"
            display="flex"
            letterSpacing="0.49px"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="480px"
            fontSize="16px"
            lineHeight="20px"
            position="relative"
            fontWeight="700"
            direction="column"
            children="LOREM IPSUM"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
          <Flex
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            alignItems="center"
            shrink="0"
            gap="16px"
            position="relative"
            justifyContent="center"
            direction="column"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              padding="0px 0px 0px 0px"
              alignSelf="stretch"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              textAlign="center"
              shrink="0"
              display="flex"
              justifyContent="flex-start"
              fontFamily="Inter"
              width="480px"
              fontSize="40px"
              lineHeight="48px"
              position="relative"
              fontWeight="700"
              direction="column"
              children="Ut enim ad minim veniam quis nostrud"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Text
              padding="0px 0px 0px 0px"
              alignSelf="stretch"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              textAlign="center"
              shrink="0"
              display="flex"
              letterSpacing="0.010000000000000009px"
              justifyContent="flex-start"
              fontFamily="Inter"
              width="480px"
              fontSize="16px"
              lineHeight="24px"
              position="relative"
              fontWeight="400"
              direction="column"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[1]"
              )}
            ></Text>
          </Flex>
          <Button
            width="206px"
            size="large"
            shrink="0"
            variation="primary"
            display="flex"
            children="Primary Button"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Button[0]")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        grow="1"
        overflow="hidden"
        alignItems="center"
        gap="10px"
        position="relative"
        basis="720px"
        justifyContent="center"
        direction="column"
        height="564px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Image
          width="720px"
          padding="0px 0px 0px 0px"
          grow="1"
          position="relative"
          basis="564px"
          height="564px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Image[0]")}
        ></Image>
      </Flex>
    </Flex>
  );
}
