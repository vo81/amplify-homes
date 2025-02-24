/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Frame3Props } from "./Frame3";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame3CollectionOverridesProps = {
    Frame3Collection?: PrimitiveOverrideProps<CollectionProps>;
    Frame3?: Frame3Props;
} & EscapeHatchProps;
export declare type Frame3CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Frame3Props;
} & {
    overrides?: Frame3CollectionOverridesProps | undefined | null;
}>;
export default function Frame3Collection(props: Frame3CollectionProps): React.ReactElement;
