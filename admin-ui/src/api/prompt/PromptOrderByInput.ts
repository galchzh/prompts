import { SortOrder } from "../../util/SortOrder";

export type PromptOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  updatedBy?: SortOrder;
};
