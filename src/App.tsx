import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, square, triangle } from 'ionicons/icons';
import InicioSeccion from "./pages/InicioSeccion";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Servicio } from './pages/Servicio';
import { Noticias } from './pages/Noticias';
import { Medidas } from './pages/MedidasPreventivas';
import { Miembros } from './pages/Miembros';
import Inicio from './pages/Inicio';
import VoluntarioForm from './pages/VoluntarioForm';
import  VoluntarioForm2 from './pages/VoluntarioForm2';
import FormularioDatos from './pages/FormularioDatos';
import ContactoForm from './pages/ContactoForm';
import FormularioParticipacion from './pages/FormularioParticipacion';
import DocumentosForm from './pages/DomumentosForm';
import { Layout } from './pages/Layout';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={InicioSeccion}/>
        <Route exact path={"/Inicio"}>
          <Layout/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
