import React, { useEffect, useState } from "react";
import api from "../services/api";
import { TableBody, TableHead, TableRow, TableCell, Table, TableContainer, Paper, } from "@material-ui/core";

function ItemList() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    api.getItems()
      .then(itens => setItens(itens))
  }, []

  );
  return <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><b>Código</b></TableCell>
          <TableCell><b>Descrição</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {itens.map((item, id) => (
          <TableRow key={id}>
            <TableCell>{item.codigo}</TableCell>
            <TableCell>{item.descricao}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

}

export default ItemList;
