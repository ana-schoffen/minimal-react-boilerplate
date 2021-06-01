import React, { useState } from "react";
import api from "../services/api";
import { TextField, Button, Grid, FormControl } from "@material-ui/core";

function ItemForm() {
  const [codigo, setCodigo] = useState("");
  const [descricao, setDescricao] = useState("");


  function cadastrar() {
    const item = {
      codigo: codigo,
      descricao: descricao,
      ativo: true
    };
    api.createItem(item).then(() => {
      alert('Item criado com sucesso!');
    })
      .catch((err) => { alert(`Erro: ${err.message}`) });
  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Código"
            value={codigo}
            onChange={(ev) => setCodigo(ev.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Descrição"
            value={descricao}
            onChange={(ev) => setDescricao(ev.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <Button variant="contined" color="primary" onClick={cadastrar}>
              Salvar
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default ItemForm;
