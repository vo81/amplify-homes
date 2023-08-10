/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame3(props) {
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
      {...getOverrideProps(overrides, "Frame3")}
      {...rest}
    >
      <Image
        width="186.21px"
        height="180px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="15px"
        left="calc(50% - 93.1px - -0.1px)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.image_url}
        {...getOverrideProps(overrides, "pic")}
      ></Image>
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
        width="184px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="257px"
        left="8px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.date}
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
        width="184px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="304px"
        left="8px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.comment}
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
        width="184px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="208px"
        left="8px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.name}
        {...getOverrideProps(overrides, "name")}
      ></Text>
    </View>
  );
}
