import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PromptCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Text" multiline source="text" />
        <TextInput label="UpdatedBy" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
