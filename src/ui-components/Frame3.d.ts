/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Home } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame3OverridesProps = {
    Frame3?: PrimitiveOverrideProps<ViewProps>;
    pic?: PrimitiveOverrideProps<ImageProps>;
    comment?: PrimitiveOverrideProps<TextProps>;
    date?: PrimitiveOverrideProps<TextProps>;
    name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame3Props = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: Frame3OverridesProps | undefined | null;
}>;
export default function Frame3(props: Frame3Props): React.ReactElement;
