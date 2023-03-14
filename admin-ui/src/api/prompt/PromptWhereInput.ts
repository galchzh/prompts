import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PromptWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  text?: StringNullableFilter;
  updatedBy?: StringFilter;
};
