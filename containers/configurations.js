import React, { useState } from "react";
import {
  TextField,
  FormControlLabel,
  Switch,
  Button,
  Grid,
  FormControl,
  Typography,
} from "@material-ui/core";
import { Form, Field } from "react-final-form";

function Configuration() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [receberNotificacoes, setReceberNotificacoes] = useState(false);

  function TextFieldA(props) {
    const errorMessage = props.meta.error;
    const shouldShowError = !!errorMessage && props.meta.touched;

    const value = props.input.value;
    const onChange = ev => props.input.onChange(ev.target.value);
    return <>
      {props.label}:
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={value}
            onChange={onChange} {...props.input}
          />
        </Grid>
      </Grid>

      {shouldShowError && errorMessage}


    </>

  }
  const onSubmit = formValues => alert(
    `Nome: ${formValues.nome}\nE-mail: ${formValues.email}`
  );
  return (
    <div>
      <Form
        onSubmit={onSubmit}
      >
        {(formProps) => (
          <form onSubmit={formProps.handleSubmit}>
            <Field name="nome" label="Nome" component={TextFieldA} />
            <br />

            <Field name="email" label="E-mail" component={TextFieldA} />
            <br />

            <Grid item>
              <FormControlLabel
                fullWidth
                control={
                  <Switch
                    checked={receberNotificacoes}
                    onChange={(ev) => setReceberNotificacoes(ev.target.checked)}
                  />
                }
                label="Receber notificações"
              />
            </Grid>

            <br />

            <button type="submit">Salvar</button>
          </form>
        )}
      </Form>
    </div>
  );
}

export default Configuration;
