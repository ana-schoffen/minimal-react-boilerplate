import React, { useState } from "react";
import api from "../services/api";
import { TextField, Button, Grid, FormControl, FormControlLabel, Switch } from "@material-ui/core";
import { Form, Field } from "react-final-form";

function TextFieldA(props) {
  const errorMessage = props.meta.error;
  const shoudShowError = !!errorMessage && props.meta.touched;

  const value = props.input.value;
  const onChange = (ev) => props.input.onChange(ev.target.value);
  return (
    <>
      {props.label}
      <TextField
        fullWidth
        label={value}
        onChange={onChange} {...props.input}
      />
      {shoudShowError && errorMessage}
    </>
  );
}

function ItemForm() {
  const [ativo, setAtivo] = useState(true);

  const onSubmit = (formValues) => {
    return api
      .createItem({
        codigo: formValues.codigo,
        descricao: formValues.descricao,
        ativo: ativo,
      })
      .then(() => alert("Salvo com sucesso!"))
      .catch((err) => alert(`Erro: ${err.message}`));
  };

  const validate = (formValues) => {
    const error = {};
    if (!formValues.codigo) error.codigo = "Código é um campo obrigatório";
    if (!formValues.descricao)
      error.descricao = "Descrição é um campo obrigatório";

    return error;
  };

  const initialValues = { codigo: "000", descricao: "descrição" };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
      >
        {(formProps) => (
          <form onSubmit={formProps.handleSubmit}>
            <Field name="codigo" label="Código" component={TextFieldA} />
            <br />

            <Field name="descricao" label="Descrição" component={TextFieldA} />
            <br />

            <FormControlLabel
              control={
                <Switch
                  checked={ativo}
                  onChange={(ev) => setAtivo(ev.target.checked)}
                />
              }
              label="Ativo"
            />
            <br />

            <button type="submit">Salvar</button>
          </form>
        )}
      </Form>
    </div>
  );
}

/* implementação sem o final form
import React, { useState } from "react";
import api from "../services/api";
import { TextField, Button, Grid, FormControl, FormControlLabel, Switch } from "@material-ui/core";
import { Form, Field } from "react-final-form";

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
*/
export default ItemForm;
