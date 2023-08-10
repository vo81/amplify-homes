/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="200px"
      height="353px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame1")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="129px"
        height="27px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="290px"
        left="calc(50% - 64.5px - 0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        src={home?.comment}
        children="*"
        {...getOverrideProps(overrides, "comment")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="129px"
        height="27px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="254px"
        left="calc(50% - 64.5px - 0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        src={home?.date}
        children="*"
        {...getOverrideProps(overrides, "date")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="129px"
        height="27px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="216px"
        left="calc(50% - 64.5px - 0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        src={home?.name}
        children="*"
        {...getOverrideProps(overrides, "name")}
      ></Text>
      <Image
        width="150px"
        height="150px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="15px"
        left="calc(50% - 75px - 0px)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.image_url}
        {...getOverrideProps(overrides, "pic")}
      ></Image>
    </View>
  );
}
