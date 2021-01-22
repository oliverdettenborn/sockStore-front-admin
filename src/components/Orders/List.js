/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import {
  List,
  Datagrid,
  ShowButton,
  TextField,
  NumberField,
  BooleanField,
  ArrayField,
  EditButton,
} from "react-admin";

export default function ClientsList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField label="Id do cliente" source="clientId" />
        <ArrayField label="Produtos pedidos" source="products">
          <Datagrid>
            <TextField label="Nome" source="name" />
            <TextField label="Tamanho" source="size" />
            <TextField label="Estoque" source="stock" />
            <TextField label="Quantidade" source="ordersProduct.quantity" />
            <TextField
              label="Preço unitário"
              source="ordersProduct.unitPrice"
            />
            <TextField label="Subtotal" source="ordersProduct.subTotal" />
          </Datagrid>
        </ArrayField>
        <NumberField label="Valor total do pedido" source="totalOrder" />
        <BooleanField label="Pedido enviado" source="alredySend" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}
