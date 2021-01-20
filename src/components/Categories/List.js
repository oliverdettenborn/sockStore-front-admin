/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";

export default function CategoriesList(props) {
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
