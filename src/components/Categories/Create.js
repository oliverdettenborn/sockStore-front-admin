/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const validateCategoryCreation = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = ["The name is required"];
  }
  return errors;
};

export default function CategoriesCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm
        validate={validateCategoryCreation}
        submitOnEnter
        redirect="show"
        warnWhenUnsavedChanges
      >
        <TextInput label="Nome da categoria" source="name" />
      </SimpleForm>
    </Create>
  );
}
