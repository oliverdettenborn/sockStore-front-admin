/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import {
  Show,
  TextField,
  NumberField,
  BooleanField,
  ArrayField,
  Datagrid,
  TabbedShowLayout,
  Tab,
} from "react-admin";

export default function ClientsShow(props) {
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Resumo do Pedido">
          <TextField label="Número do pedido" source="id" />
          <TextField label="Id do cliente" source="clientId" />
          <NumberField label="Valor total do pedido" source="totalOrder" />
          <BooleanField label="Pedido enviado" source="alredySend" />
        </Tab>

        <Tab label="Itens pedidos">
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
        </Tab>

        <Tab label="Dados do Cliente">
          <TextField label="Nome do cliente" source="name" />
          <TextField label="CPF" source="cpf" />
          <TextField label="Email" source="email" />
          <TextField label="CEP" source="address.cep" />
        </Tab>
        <Tab label="Endereço de entrega">
          <TextField label="Rua" source="address.street" />
          <NumberField label="Número" source="address.number" />
          <TextField label="Complemento" source="address.complement" />
          <TextField label="Bairro" source="address.neighborhood" />
          <TextField label="Cidade" source="address.city" />
          <TextField label="Estado" source="address.state" />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}
