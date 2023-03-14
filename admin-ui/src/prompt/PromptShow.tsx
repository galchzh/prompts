import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PromptShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UpdatedBy" source="updatedBy" />
      </SimpleShowLayout>
    </Show>
  );
};
