/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";

export function CategoriesList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <EditButton />
      </Datagrid>
    </List>
  );
}

export const CategoriesEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const CategoriesCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
