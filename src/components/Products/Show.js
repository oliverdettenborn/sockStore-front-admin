/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
} from "react-admin";

export default function ProductsShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField label="Nome" source="name" />
        <TextField label="Preço" source="price" />
        <TextField label="Tamanho" source="size" />
        <TextField label="Descrição" source="description" />
        <NumberField label="Quantidade" source="stock" />
        <ReferenceManyField
          label="Categorias"
          reference="categories"
          target="categories.id"
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
}
