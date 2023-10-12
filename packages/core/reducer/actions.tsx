import { Data } from "../types/Config";

export type InsertAction = {
  type: "insert";
  componentType: string;
  destinationIndex: number;
  destinationZone: string;
};

export type DuplicateAction = {
  type: "duplicate";
  sourceIndex: number;
  sourceZone: string;
};

export type ReplaceAction = {
  type: "replace";
  destinationIndex: number;
  destinationZone: string;
  data: any;
};

export type ReorderAction = {
  type: "reorder";
  sourceIndex: number;
  destinationIndex: number;
  destinationZone: string;
};

export type MoveAction = {
  type: "move";
  sourceIndex: number;
  sourceZone: string;
  destinationIndex: number;
  destinationZone: string;
};

export type RemoveAction = {
  type: "remove";
  index: number;
  zone: string;
};

export type SetDataAction = {
  type: "setData";
  data: Partial<Data>;
};

export type RegisterZoneAction = {
  type: "registerZone";
  zone: string;
};

export type UnregisterZoneAction = {
  type: "unregisterZone";
  zone: string;
};

export type PuckAction =
  | ReorderAction
  | InsertAction
  | MoveAction
  | ReplaceAction
  | RemoveAction
  | DuplicateAction
  | SetDataAction
  | RegisterZoneAction
  | UnregisterZoneAction;