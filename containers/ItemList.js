import React from "react";
import { Typography, DataGrid } from "@material-ui/core";

function ItemList(props) {
  console.log(props.itens)
  return (
    <div>
      {props.itens.map((item) => (
        <div>
          <Typography variant="subtitle1">{item.id}</Typography>
          <Typography variant="subtitle1">{item.codigo}</Typography>
          <Typography variant="subtitle1">{item.descricao}</Typography>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
