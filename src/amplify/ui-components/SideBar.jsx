/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Divider,
  Flex,
  IconHome,
  IconSettings,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function SideBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
      alignItems="flex-start"
      gap="10px"
      width="385px"
      position="relative"
      direction="row"
      height="762px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        grow="1"
        gap="32px"
        position="relative"
        basis="385px"
        direction="column"
        height="698px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          padding="0px 32px 0px 32px"
          alignSelf="stretch"
          grow="1"
          gap="32px"
          position="relative"
          basis="585px"
          direction="column"
          height="585px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <View
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            backgroundColor="rgba(233.00000131130219,235.0000011920929,236.00000113248825,1)"
            shrink="0"
            width="321px"
            position="relative"
            height="80px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].View[0]")}
          ></View>
          <Flex
            width="140px"
            padding="0px 0px 0px 0px"
            position="relative"
            shrink="0"
            gap="16px"
            direction="column"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              padding="0px 0px 0px 0px"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              textAlign="left"
              shrink="0"
              display="flex"
              letterSpacing="0.49px"
              justifyContent="flex-start"
              fontFamily="Inter"
              fontSize="16px"
              lineHeight="20px"
              position="relative"
              fontWeight="700"
              direction="column"
              children="ORGANIZATION"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Flex
              padding="0px 0px 0px 0px"
              alignItems="center"
              shrink="0"
              gap="16px"
              width="140px"
              position="relative"
              direction="row"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Flex[0]"
              )}
            >
              <IconHome
                padding="0px 0px 0px 0px"
                overflow="hidden"
                color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                shrink="0"
                width="24px"
                fontSize="24px"
                position="relative"
                type="home"
                height="24px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[0].Flex[0].IconHome[0]"
                )}
              ></IconHome>
              <Text
                padding="0px 0px 0px 0px"
                color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
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
                children="Lorem Ipsum"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[0].Flex[0].Text[0]"
                )}
              ></Text>
            </Flex>
            <Flex
              padding="0px 0px 0px 0px"
              alignItems="center"
              shrink="0"
              gap="16px"
              width="140px"
              position="relative"
              direction="row"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Flex[1]"
              )}
            >
              <IconHome
                padding="0px 0px 0px 0px"
                overflow="hidden"
                color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                shrink="0"
                width="24px"
                fontSize="24px"
                position="relative"
                type="home"
                height="24px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[0].Flex[1].IconHome[0]"
                )}
              ></IconHome>
              <Text
                padding="0px 0px 0px 0px"
                color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
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
                children="Lorem Ipsum"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[0].Flex[1].Text[0]"
                )}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            width="140px"
            padding="0px 0px 0px 0px"
            position="relative"
            shrink="0"
            gap="16px"
            direction="column"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[1]")}
          >
            <Text
              padding="0px 0px 0px 0px"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              textAlign="left"
              shrink="0"
              display="flex"
              letterSpacing="0.49px"
              justifyContent="flex-start"
              fontFamily="Inter"
              fontSize="16px"
              lineHeight="20px"
              position="relative"
              fontWeight="700"
              direction="column"
              children="ORGANIZATION"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].Text[0]"
              )}
            ></Text>
            <Flex
              width="140px"
              padding="0px 0px 0px 0px"
              position="relative"
              shrink="0"
              gap="16px"
              direction="column"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[1].Flex[0]"
              )}
            >
              <Flex
                padding="0px 0px 0px 0px"
                alignItems="center"
                shrink="0"
                gap="16px"
                width="140px"
                position="relative"
                direction="row"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[0]"
                )}
              >
                <IconHome
                  padding="0px 0px 0px 0px"
                  overflow="hidden"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  shrink="0"
                  width="24px"
                  fontSize="24px"
                  position="relative"
                  type="home"
                  height="24px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[0].IconHome[0]"
                  )}
                ></IconHome>
                <Text
                  padding="0px 0px 0px 0px"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
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
                  children="Lorem Ipsum"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[0].Text[0]"
                  )}
                ></Text>
              </Flex>
              <Flex
                padding="0px 0px 0px 0px"
                alignItems="center"
                shrink="0"
                gap="16px"
                width="140px"
                position="relative"
                direction="row"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[1]"
                )}
              >
                <IconHome
                  padding="0px 0px 0px 0px"
                  overflow="hidden"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  shrink="0"
                  width="24px"
                  fontSize="24px"
                  position="relative"
                  type="home"
                  height="24px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[1].IconHome[0]"
                  )}
                ></IconHome>
                <Text
                  padding="0px 0px 0px 0px"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
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
                  children="Lorem Ipsum"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[1].Text[0]"
                  )}
                ></Text>
              </Flex>
              <Flex
                padding="0px 0px 0px 0px"
                alignItems="center"
                shrink="0"
                gap="16px"
                width="140px"
                position="relative"
                direction="row"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[2]"
                )}
              >
                <IconHome
                  padding="0px 0px 0px 0px"
                  overflow="hidden"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  shrink="0"
                  width="24px"
                  fontSize="24px"
                  position="relative"
                  type="home"
                  height="24px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[2].IconHome[0]"
                  )}
                ></IconHome>
                <Text
                  padding="0px 0px 0px 0px"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
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
                  children="Lorem Ipsum"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[2].Text[0]"
                  )}
                ></Text>
              </Flex>
              <Flex
                padding="0px 0px 0px 0px"
                alignItems="center"
                shrink="0"
                gap="16px"
                width="140px"
                position="relative"
                direction="row"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[3]"
                )}
              >
                <IconHome
                  padding="0px 0px 0px 0px"
                  overflow="hidden"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  shrink="0"
                  width="24px"
                  fontSize="24px"
                  position="relative"
                  type="home"
                  height="24px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[3].IconHome[0]"
                  )}
                ></IconHome>
                <Text
                  padding="0px 0px 0px 0px"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
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
                  children="Lorem Ipsum"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[3].Text[0]"
                  )}
                ></Text>
              </Flex>
              <Flex
                padding="0px 0px 0px 0px"
                alignItems="center"
                shrink="0"
                gap="16px"
                width="140px"
                position="relative"
                direction="row"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[4]"
                )}
              >
                <IconHome
                  padding="0px 0px 0px 0px"
                  overflow="hidden"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  shrink="0"
                  width="24px"
                  fontSize="24px"
                  position="relative"
                  type="home"
                  height="24px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[4].IconHome[0]"
                  )}
                ></IconHome>
                <Text
                  padding="0px 0px 0px 0px"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
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
                  children="Lorem Ipsum"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[4].Text[0]"
                  )}
                ></Text>
              </Flex>
              <Flex
                padding="0px 0px 0px 0px"
                alignItems="center"
                shrink="0"
                gap="16px"
                width="140px"
                position="relative"
                direction="row"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[5]"
                )}
              >
                <IconHome
                  padding="0px 0px 0px 0px"
                  overflow="hidden"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  shrink="0"
                  width="24px"
                  fontSize="24px"
                  position="relative"
                  type="home"
                  height="24px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[5].IconHome[0]"
                  )}
                ></IconHome>
                <Text
                  padding="0px 0px 0px 0px"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
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
                  children="Lorem Ipsum"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[5].Text[0]"
                  )}
                ></Text>
              </Flex>
              <Flex
                padding="0px 0px 0px 0px"
                alignItems="center"
                shrink="0"
                gap="16px"
                width="140px"
                position="relative"
                direction="row"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[6]"
                )}
              >
                <IconHome
                  padding="0px 0px 0px 0px"
                  overflow="hidden"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  shrink="0"
                  width="24px"
                  fontSize="24px"
                  position="relative"
                  type="home"
                  height="24px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[6].IconHome[0]"
                  )}
                ></IconHome>
                <Text
                  padding="0px 0px 0px 0px"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
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
                  children="Lorem Ipsum"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[6].Text[0]"
                  )}
                ></Text>
              </Flex>
              <Flex
                padding="0px 0px 0px 0px"
                alignItems="center"
                shrink="0"
                gap="16px"
                width="140px"
                position="relative"
                direction="row"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[7]"
                )}
              >
                <IconHome
                  padding="0px 0px 0px 0px"
                  overflow="hidden"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  shrink="0"
                  width="24px"
                  fontSize="24px"
                  position="relative"
                  type="home"
                  height="24px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[7].IconHome[0]"
                  )}
                ></IconHome>
                <Text
                  padding="0px 0px 0px 0px"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
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
                  children="Lorem Ipsum"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[1].Flex[0].Flex[7].Text[0]"
                  )}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          shrink="0"
          gap="32px"
          position="relative"
          justifyContent="flex-end"
          direction="column"
          height="81px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")}
        >
          <Divider
            width="385px"
            alignSelf="stretch"
            orientation="horizontal"
            size="small"
            shrink="0"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Divider[0]")}
          ></Divider>
          <Flex
            padding="0px 32px 0px 32px"
            alignSelf="stretch"
            alignItems="center"
            shrink="0"
            gap="129px"
            position="relative"
            direction="row"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Flex[0]")}
          >
            <Flex
              padding="0px 0px 0px 0px"
              grow="1"
              alignItems="center"
              gap="16px"
              width="168px"
              position="relative"
              basis="168px"
              direction="row"
              height="48px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].Flex[0].Flex[0]"
              )}
            >
              <View
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
                borderRadius="40px"
                shrink="0"
                width="48px"
                position="relative"
                height="48px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[1].Flex[0].Flex[0].View[0]"
                )}
              ></View>
              <Flex
                padding="0px 0px 0px 0px"
                shrink="0"
                gap="0"
                width="100px"
                position="relative"
                direction="column"
                height="48px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[1].Flex[0].Flex[0].Flex[0]"
                )}
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
                  width="100px"
                  fontSize="16px"
                  lineHeight="24px"
                  position="relative"
                  fontWeight="400"
                  direction="column"
                  children="Lorem Ipsum"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[1].Flex[0].Flex[0].Flex[0].Text[0]"
                  )}
                ></Text>
                <Text
                  padding="0px 0px 0px 0px"
                  alignSelf="stretch"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  textAlign="left"
                  shrink="0"
                  display="flex"
                  justifyContent="flex-start"
                  fontFamily="Inter"
                  width="100px"
                  fontSize="14px"
                  lineHeight="24px"
                  position="relative"
                  fontWeight="400"
                  direction="column"
                  children="Lorem Ipsum"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[1].Flex[0].Flex[0].Flex[0].Text[1]"
                  )}
                ></Text>
              </Flex>
            </Flex>
            <IconSettings
              padding="0px 0px 0px 0px"
              overflow="hidden"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              shrink="0"
              width="24px"
              fontSize="24px"
              position="relative"
              type="settings"
              height="24px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].Flex[0].IconSettings[0]"
              )}
            ></IconSettings>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
