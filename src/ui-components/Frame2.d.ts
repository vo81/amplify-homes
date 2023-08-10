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
export declare type Frame2OverridesProps = {
    Frame2?: PrimitiveOverrideProps<ViewProps>;
    pic?: PrimitiveOverrideProps<ImageProps>;
    name?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame2Props = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: Frame2OverridesProps | undefined | null;
}>;
export default function Frame2(props: Frame2Props): React.ReactElement;
