

import * as React from "react";
import { ComponentContext } from "./component-context";

export { ComponentContext } from "./component-context";

export interface FieldBase {
  key: string;
  compositeKey: string;
  type: string;
}

export interface FieldBaseGroup extends FieldBase {
  fields: Array<FieldBase>;
};

export interface DynamicFormNode<Field extends FieldBase> {
  field: Field;
  state: any;
  parent: DynamicFormNode<FieldBase> | null | undefined;
  uiState: any | null | undefined;
}

export interface ComponentProps<Field extends FieldBase> {
  context: ComponentContext<Field>;
};

export type BreadcumbItem = {
  label: string;
  node: DynamicFormNode<FieldBase> | null | undefined;
};

export type BreadcumbProps = {
  items: Array<BreadcumbItem>;
  onNodeSelected: (node: DynamicFormNode<FieldBase>) => void;
};

export type BreadcumbComponentType = React.ComponentType<BreadcumbProps>;

/*
interface Base{
    base:number;
}
type BaseExtended = Base & { extended:number }
type Unbased = { extended:number }
type ABase = { a:Base };
type A<T1: Base> = { a:T1 } & ABase;

interface IHaveName{
    name: string
}

let varExtended: A<BaseExtended> = { a:{base:1, extended:1} };
let varBase: ABase = varExtended;
*/