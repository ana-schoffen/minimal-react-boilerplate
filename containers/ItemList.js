import React from "react";
import api from "../services/api";
import { Typography, DataGrid } from "@material-ui/core";

function ItemList() {
  const itens = api.getItems();
  return (
    <div>
      <div>
        <Typography variant="subtitle1">{itens.id}</Typography>
        <Typography variant="subtitle1">{itens.codigo}</Typography>
        <Typography variant="subtitle1">{itens.descricao}</Typography>
      </div>
    </div>
  );
}

export default ItemList;
