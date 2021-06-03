import React, { useState } from "react";
import api from "../services/api";
import { TextField, Button, Grid, FormControl, FormControlLabel, Switch } from "@material-ui/core";

function ItemForm() {
  const [codigo, setCodigo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ativo, setAtivo] = useState(false);


  function cadastrar() {
    const item = {
      codigo: codigo,
      descricao: descricao,
      ativo: ativo
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
        <Grid item xs={6}>
          <FormControlLabel
            fullWidth
            control={
              <Switch
                checked={ativo}
                onChange={(ev) => setAtivo(ev.target.checked)}
              />
            }
            label="Ativo"
          />
        </Grid>
        <FormControl>
          <Button variant="contined" color="primary" onClick={cadastrar}>
            Salvar
          </Button>
        </FormControl>
      </Grid>
    </div >
  );
}

export default ItemForm;
