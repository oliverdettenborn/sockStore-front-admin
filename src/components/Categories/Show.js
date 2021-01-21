/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

export default function CategoriesShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
      </SimpleShowLayout>
    </Show>
  );
}
