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
  IconBookmarkBorder,
  IconChatBubbleOutline,
  IconFavoriteBorder,
  IconMoreVert,
  IconSend,
  Image,
  Text,
} from "@aws-amplify/ui-react";
export default function Ampligram(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      position="relative"
      justifyContent="center"
      gap="8px"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Divider
        width="640px"
        alignSelf="stretch"
        orientation="horizontal"
        size="small"
        shrink="0"
        {...getOverrideProps(overrides, "Flex.Divider[0]")}
      ></Divider>
      <Flex
        padding="16px 16px 16px 16px"
        alignSelf="stretch"
        alignItems="center"
        shrink="0"
        gap="16px"
        position="relative"
        justifyContent="center"
        direction="row"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          grow="1"
          alignItems="center"
          gap="16px"
          width="568px"
          position="relative"
          basis="568px"
          direction="row"
          height="65px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Image
            width="65px"
            padding="0px 0px 0px 0px"
            position="relative"
            borderRadius="160px"
            shrink="0"
            height="65px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Image[0]")}
          ></Image>
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
            children="Rene Brandel"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          alignItems="center"
          shrink="0"
          gap="10px"
          position="relative"
          justifyContent="flex-end"
          direction="row"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")}
        >
          <IconMoreVert
            padding="0px 0px 0px 0px"
            overflow="hidden"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            shrink="0"
            width="24px"
            fontSize="24px"
            position="relative"
            type="more_vert"
            height="24px"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[1].IconMoreVert[0]"
            )}
          ></IconMoreVert>
        </Flex>
      </Flex>
      <Image
        width="640px"
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        position="relative"
        shrink="0"
        height="408px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        padding="16px 16px 16px 16px"
        alignSelf="stretch"
        alignItems="flex-start"
        shrink="0"
        gap="16px"
        position="relative"
        direction="row"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          alignItems="flex-start"
          shrink="0"
          gap="24px"
          position="relative"
          direction="row"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")}
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
              "Flex.Flex[1].Flex[0].IconFavoriteBorder[0]"
            )}
          ></IconFavoriteBorder>
          <IconChatBubbleOutline
            padding="0px 0px 0px 0px"
            overflow="hidden"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            shrink="0"
            width="24px"
            fontSize="24px"
            position="relative"
            type="chat_bubble_outline"
            height="24px"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[1].Flex[0].IconChatBubbleOutline[0]"
            )}
          ></IconChatBubbleOutline>
          <IconSend
            padding="0px 0px 0px 0px"
            overflow="hidden"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            shrink="0"
            width="24px"
            fontSize="24px"
            position="relative"
            type="send"
            height="24px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].IconSend[0]")}
          ></IconSend>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          grow="1"
          alignItems="center"
          gap="10px"
          width="472px"
          position="relative"
          basis="472px"
          justifyContent="flex-end"
          direction="row"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[1]")}
        >
          <IconBookmarkBorder
            padding="0px 0px 0px 0px"
            overflow="hidden"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            shrink="0"
            width="24px"
            fontSize="24px"
            position="relative"
            type="bookmark_border"
            height="24px"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[1].Flex[1].IconBookmarkBorder[0]"
            )}
          ></IconBookmarkBorder>
        </Flex>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        position="relative"
        shrink="0"
        gap="8px"
        direction="column"
        {...getOverrideProps(overrides, "Flex.Flex[2]")}
      >
        <Divider
          width="640px"
          alignSelf="stretch"
          orientation="horizontal"
          size="small"
          shrink="0"
          {...getOverrideProps(overrides, "Flex.Flex[2].Divider[0]")}
        ></Divider>
        <Flex
          padding="16px 16px 16px 16px"
          alignSelf="stretch"
          position="relative"
          shrink="0"
          gap="8px"
          direction="column"
          {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="608px"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="700"
            direction="column"
            children="Firstname Lastname"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0].Text[0]")}
          ></Text>
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
            width="608px"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.”"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0].Text[1]")}
          ></Text>
          <Text
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            color="rgba(92.00000211596489,102.00000151991844,112.000000923872,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="608px"
            fontSize="14px"
            lineHeight="24px"
            position="relative"
            fontWeight="400"
            direction="column"
            children="Timestamp"
            {...getOverrideProps(overrides, "Flex.Flex[2].Flex[0].Text[2]")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
