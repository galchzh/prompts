import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PromptEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Text" multiline source="text" />
        <TextInput label="UpdatedBy" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
