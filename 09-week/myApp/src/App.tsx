import React from 'react';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import { peopleCircle, school, briefcase, personCircle } from 'ionicons/icons';

import Profesor from './pages/Profesor';
import Estudiante from './pages/Estudiante';
import Proveedor from './pages/Proveedor';
import Cliente from './pages/Cliente';

import './theme/variables.css';

/* Ionic styles base */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/profesor" component={Profesor} exact />
          <Route path="/estudiante" component={Estudiante} exact />
          <Route path="/proveedor" component={Proveedor} exact />
          <Route path="/cliente" component={Cliente} exact />
          <Redirect exact from="/" to="/profesor" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="profesor" href="/profesor">
            <IonIcon icon={school} />
            <IonLabel>Profesor</IonLabel>
          </IonTabButton>
          <IonTabButton tab="estudiante" href="/estudiante">
            <IonIcon icon={peopleCircle} />
            <IonLabel>Estudiante</IonLabel>
          </IonTabButton>
          <IonTabButton tab="proveedor" href="/proveedor">
            <IonIcon icon={briefcase} />
            <IonLabel>Proveedor</IonLabel>
          </IonTabButton>
          <IonTabButton tab="cliente" href="/cliente">
            <IonIcon icon={personCircle} />
            <IonLabel>Cliente</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
