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

function Configuration() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [receberNotificacoes, setReceberNotificacoes] = useState(false);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Usuário"
            value={usuario}
            onChange={(ev) => setUsuario(ev.target.value)}
          />
        </Grid>
        <Grid item xs>
          <TextField
            fullWidth
            label="E-mail"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </Grid>
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
        <Grid item xs={12}>
          <FormControl>
            <Button variant="contined" color="primary">
              Salvar
            </Button>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Usuário: {usuario}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Email: {email} (
            {receberNotificacoes
              ? "Receber notificações"
              : "Não receber notificações"}
            )
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Configuration;
