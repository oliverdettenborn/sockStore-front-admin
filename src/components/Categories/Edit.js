/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const validateCategoryCreation = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = ["The name is required"];
  }
  return errors;
};

export default function CategoriesEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm
        validate={validateCategoryCreation}
        submitOnEnter
        redirect="show"
        warnWhenUnsavedChanges
      >
        <TextInput label="Nome da categoria" source="name" />
      </SimpleForm>
    </Edit>
  );
}
