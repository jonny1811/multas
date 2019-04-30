import React, { Component } from 'react';
import './App.css';

import Totales from './components/TotalesVotantes';
import Consolidados from './components/Consolidados';
import Presidente from './components/Presidente';
import PresidenteConsolidado from './components/PresidenteConsolidado';
import Senador from './components/Senador';
import SenadorConsolidado from './components/SenadorConsolidado';
import Gobernador from './components/Gobernador';
import GobernadorConsolidado from './components/GobernadorConsolidado';
import Parlasur from './components/Parlasur';
import ParlasurConsolidado from './components/ParlasurConsolidado';
import Diputado from './components/Diputado';
import DiputadoConsolidado from './components/DiputadoConsolidado';
import JuntaDepartamental from './components/JuntaDepartamental';
import JuntaDepartamentalConsolidado from './components/JuntaDepartamentalConsolidado';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm">

          <div className="row">
            <div className="col-sm">
            <h1 className="center">DashBoard Sistema Nacional de Multas</h1>
            </div>
          </div>

          <div className="row border">
            <div className="col-sm center"><Totales/></div>
            <div className="col-sm center"><Consolidados/></div>
          </div>

          <div className="row border">
            <div className="col-sm center"><Presidente/></div>
            <div className="col-sm center"><PresidenteConsolidado/></div>
          </div>

          <div className="row border">
            <div className="col-sm center"><Senador/></div>
            <div className="col-sm center"><SenadorConsolidado/></div>
          </div>

          <div className="row">
            <div className="col-sm center"><Gobernador/><br/><GobernadorConsolidado/></div>
            <div className="col-sm center"><Parlasur/><br/><ParlasurConsolidado/></div>
            <div className="col-sm center"><Diputado/><br/><DiputadoConsolidado/></div>
            <div className="col-sm center"><JuntaDepartamental/><br/><JuntaDepartamentalConsolidado/></div>          
          </div>

        </div>
      </div>
    );
  }
}

export default App;
