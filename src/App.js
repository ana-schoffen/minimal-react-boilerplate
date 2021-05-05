import React, {useState} from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Configuration from "../containers/configurations";
import ItemForm from "../containers/ItemForms";
import ItemList from "../containers/ItemList";

import "./App.scss";
import { AppBar, Box, Tab, Tabs } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#478BC9",
    },
    secondary: {
      main: "#80F1D3",
    },
  },
});

function App() {
  const [id, setId] = useState(0);
  const [selectedTab, selectTab] = useState(0);
  const [itens, setItens] = useState([]);

  function handleTabSelection(event, newValue){
    selectTab(newValue);
  };

  return (
    <div className="app">
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Tabs value={selectedTab} onChange={handleTabSelection}>
            <Tab label="Configuração"/>
            <Tab label="Novo item"/>
            <Tab label="Itens"/>
          </Tabs>
        </AppBar>
        <Box p={3}>
          {selectedTab == 0 ? <Configuration/> : null}
          {selectedTab == 1 ? <ItemForm id={id} setId={setId} itens={itens} setItens={setItens} /> : null}
          {selectedTab == 2 ? <ItemList itens={itens}/> : null}
        </Box>
      </MuiThemeProvider>
    </div>
  );
}

export default App;