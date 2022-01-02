/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Icon,
  IconNotifications,
  Image,
  SearchField,
  Text,
} from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      alignItems="center"
      gap="20px"
      width="1440px"
      position="relative"
      justifyContent="center"
      direction="row"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        alignItems="center"
        shrink="0"
        gap="2px"
        position="relative"
        justifyContent="center"
        direction="row"
        height="45px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Icon
          pathData="M8.12249 1.60573C8.50171 0.911796 9.49829 0.911796 9.87751 1.60573L10.9602 3.58693C11.1657 3.96292 11.5879 4.16622 12.0099 4.09244L14.234 3.70368C15.0129 3.56751 15.6343 4.34666 15.3282 5.07581L14.4543 7.15757C14.2884 7.55264 14.3927 8.00946 14.7135 8.29344L16.4041 9.78987C16.9963 10.314 16.7745 11.2856 16.0136 11.5009L13.8412 12.1156C13.4289 12.2323 13.1367 12.5986 13.1147 13.0265L12.9989 15.2813C12.9583 16.071 12.0604 16.5034 11.4176 16.0427L9.58254 14.7275C9.23429 14.4779 8.76571 14.4779 8.41746 14.7275L6.58236 16.0427C5.9396 16.5034 5.04172 16.071 5.00113 15.2813L4.88526 13.0265C4.86327 12.5986 4.57112 12.2323 4.15884 12.1156L1.98638 11.5009C1.22546 11.2856 1.0037 10.314 1.59585 9.78987L3.28646 8.29344C3.6073 8.00946 3.71156 7.55264 3.54571 7.15757L2.6718 5.07581C2.36571 4.34666 2.98706 3.56751 3.76604 3.70368L5.99007 4.09244C6.41214 4.16622 6.83431 3.96292 7.03978 3.58693L8.12249 1.60573Z"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          color="rgba(20.35486936569214,154.60028260946274,251.81250303983688,1)"
          shrink="0"
          width="18px"
          position="relative"
          height="18px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Icon[0]")}
        ></Icon>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(0,0,0,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          fontSize="20px"
          lineHeight="23.4375px"
          position="relative"
          fontWeight="400"
          textTransform="capitalize"
          direction="column"
          children="Logo"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        grow="1"
        alignItems="center"
        gap="40px"
        width="633.5px"
        position="relative"
        basis="633.5px"
        direction="row"
        height="24px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(0,0,0,1)"
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
          children="Dashboard"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(0,0,0,1)"
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
          children="Jobs"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[1]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(0,0,0,1)"
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
          children="Applicants"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[2]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          color="rgba(0,0,0,1)"
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
          children="Company"
          {...getOverrideProps(overrides, "Flex.Flex[1].Text[3]")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        grow="1"
        alignItems="center"
        gap="32px"
        width="633.5px"
        position="relative"
        basis="633.5px"
        justifyContent="flex-end"
        direction="row"
        height="45px"
        {...getOverrideProps(overrides, "Flex.Flex[2]")}
      >
        <SearchField
          labelHidden="true"
          size="default"
          shrink="0"
          display="flex"
          width="300px"
          variation="default"
          height="32px"
          {...getOverrideProps(overrides, "Flex.Flex[2].SearchField[0]")}
        ></SearchField>
        <IconNotifications
          padding="0px 0px 0px 0px"
          overflow="hidden"
          color="rgba(51.00000075995922,51.00000075995922,51.00000075995922,1)"
          shrink="0"
          width="24px"
          fontSize="24px"
          position="relative"
          type="notifications"
          height="24px"
          {...getOverrideProps(overrides, "Flex.Flex[2].IconNotifications[0]")}
        ></IconNotifications>
        <Image
          width="45px"
          padding="0px 0px 0px 0px"
          position="relative"
          borderRadius="160px"
          shrink="0"
          height="45px"
          {...getOverrideProps(overrides, "Flex.Flex[2].Image[0]")}
        ></Image>
      </Flex>
    </Flex>
  );
}
