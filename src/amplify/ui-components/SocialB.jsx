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
  IconFavorite,
  IconFavoriteBorder,
  IconMoreHoriz,
  IconReply,
  IconShare,
  IconShuffle,
  Image,
  Text,
} from "@aws-amplify/ui-react";
export default function SocialB(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      width="640px"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      position="relative"
      gap="16px"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Divider
        width="608px"
        alignSelf="stretch"
        orientation="horizontal"
        size="small"
        shrink="0"
        {...getOverrideProps(overrides, "Flex.Divider[0]")}
      ></Divider>
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        alignItems="flex-start"
        shrink="0"
        gap="16px"
        position="relative"
        direction="row"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          alignItems="flex-start"
          shrink="0"
          gap="9px"
          position="relative"
          direction="row"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <IconFavorite
            padding="0px 0px 0px 0px"
            overflow="hidden"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            shrink="0"
            width="24px"
            fontSize="24px"
            position="relative"
            type="favorite"
            height="24px"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[0].IconFavorite[0]"
            )}
          ></IconFavorite>
          <Text
            padding="0px 0px 0px 0px"
            color="rgba(92.00000211596489,102.00000151991844,112.000000923872,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Inter"
            fontSize="14px"
            lineHeight="24px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="Danny liked this"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        alignItems="flex-start"
        shrink="0"
        gap="16px"
        position="relative"
        direction="row"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Image
          width="80px"
          padding="0px 0px 0px 0px"
          position="relative"
          borderRadius="64px"
          shrink="0"
          height="80px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Image[0]")}
        ></Image>
        <Flex
          padding="0px 0px 0px 0px"
          grow="1"
          gap="8px"
          width="512px"
          position="relative"
          basis="512px"
          direction="column"
          height="56px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            alignItems="flex-start"
            shrink="0"
            gap="16px"
            position="relative"
            direction="row"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Flex[0]")}
          >
            <Flex
              padding="0px 0px 0px 0px"
              alignItems="flex-start"
              shrink="0"
              gap="16px"
              position="relative"
              direction="row"
              height="24px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].Flex[0].Flex[0]"
              )}
            >
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
                children="Author"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[1].Flex[0].Flex[0].Flex[0].Text[0]"
                )}
              ></Text>
              <Text
                padding="0px 0px 0px 0px"
                color="rgba(92.00000211596489,102.00000151991844,112.000000923872,1)"
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
                children="Timestamp"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[1].Flex[0].Flex[0].Flex[0].Text[1]"
                )}
              ></Text>
              <Text
                padding="0px 0px 0px 0px"
                color="rgba(92.00000211596489,102.00000151991844,112.000000923872,1)"
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
                children="Lorem ipsum"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[1].Flex[0].Flex[0].Flex[0].Text[2]"
                )}
              ></Text>
            </Flex>
            <Flex
              padding="0px 0px 0px 0px"
              grow="1"
              alignItems="flex-start"
              gap="0"
              width="227px"
              position="relative"
              basis="227px"
              justifyContent="flex-end"
              direction="row"
              height="24px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].Flex[0].Flex[1]"
              )}
            >
              <IconMoreHoriz
                padding="0px 0px 0px 0px"
                overflow="hidden"
                color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                shrink="0"
                width="24px"
                fontSize="24px"
                position="relative"
                type="more_horiz"
                height="24px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[1].Flex[0].Flex[0].Flex[1].IconMoreHoriz[0]"
                )}
              ></IconMoreHoriz>
            </Flex>
          </Flex>
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
            width="512px"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[0]")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        alignItems="flex-start"
        shrink="0"
        gap="80px"
        position="relative"
        direction="row"
        {...getOverrideProps(overrides, "Flex.Flex[2]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          alignItems="flex-start"
          shrink="0"
          gap="16px"
          position="relative"
          direction="row"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0]")}
        >
          <IconReply
            padding="0px 0px 0px 0px"
            overflow="hidden"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            shrink="0"
            width="24px"
            fontSize="24px"
            position="relative"
            type="reply"
            height="24px"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[2].Flex[0].IconReply[0]"
            )}
          ></IconReply>
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
            children="99"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          alignItems="flex-start"
          shrink="0"
          gap="16px"
          position="relative"
          direction="row"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[1]")}
        >
          <IconShuffle
            padding="0px 0px 0px 0px"
            overflow="hidden"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            shrink="0"
            width="24px"
            fontSize="24px"
            position="relative"
            type="shuffle"
            height="24px"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[2].Flex[1].IconShuffle[0]"
            )}
          ></IconShuffle>
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
            children="99"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[1].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          alignItems="flex-start"
          shrink="0"
          gap="16px"
          position="relative"
          direction="row"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[2]")}
        >
          <IconFavoriteBorder
            padding="0px 0px 0px 0px"
            overflow="hidden"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            shrink="0"
            width="24px"
            fontSize="24px"
            position="relative"
            type="favorite_border"
            height="24px"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[2].Flex[2].IconFavoriteBorder[0]"
            )}
          ></IconFavoriteBorder>
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
            children="99"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[2].Text[0]")}
          ></Text>
        </Flex>
        <IconShare
          padding="0px 0px 0px 0px"
          overflow="hidden"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          shrink="0"
          width="24px"
          fontSize="24px"
          position="relative"
          type="share"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[2].IconShare[0]")}
        ></IconShare>
      </Flex>
    </Flex>
  );
}
