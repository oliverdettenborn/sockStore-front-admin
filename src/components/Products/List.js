/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceInput,
} from "react-admin";

export default function ProductsList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="price" />
        <TextField source="size" />
        <TextField source="description" />
        <TextField source="stock" />
        <ReferenceInput source="categories" reference="categories">
          <TextField source="id" />
          <TextField source="name" />
        </ReferenceInput>
        <TextField source="photos" />
        <EditButton />
      </Datagrid>
    </List>
  );
}
