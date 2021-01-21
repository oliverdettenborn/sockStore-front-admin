/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ChipField,
  ImageField,
  NumberField,
  SingleFieldList,
  ReferenceManyField,
  ShowButton,
} from "react-admin";

export default function ProductsList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
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
        <ImageField label="Fotos" source="photos" src="photo" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}
