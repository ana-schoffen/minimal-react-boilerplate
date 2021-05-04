import React, { useState } from "react";
import { TextField, Button, Grid, FormControl } from "@material-ui/core";

function ItemForm(props) {
  const [codigo, setCodigo] = useState("");
  const [descricao, setDescricao] = useState("");

  const cadastrar = () => {
    props.itens.push({ id: props.id, codigo: codigo, descricao: descricao });
    props.setItens(props.itens);
    props.setId(props.id + 1);
  };

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
