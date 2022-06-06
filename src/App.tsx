import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/LandingPage/LandingPage';
import OnBoarding from './pages/OnBoarding/OnBoarding';
import OnBoarding2 from './pages/OnBoarding/OnBoarding2';
import OnBoarding3 from './pages/OnBoarding/OnBoarding3';
import Login from './pages/login/Login';
import FiancaLocaticia1 from './pages/FiancaLocaticia/FiancaLocaticiaPermission';
import FiancaLocaticia2 from './pages/FiancaLocaticia/FiancaLocaticia2';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/onBoarding" />
        </Route>
        <Route exact path="/onBoarding">
          <OnBoarding />
        </Route>
        <Route exact path="/onBoarding2">
          <OnBoarding2 />
        </Route>
        <Route exact path="/onBoarding3">
          <OnBoarding3 />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/fiancaLocaticia1">
          <FiancaLocaticia1 />
        </Route>
        <Route exact path="/fiancaLocaticia2">
          <FiancaLocaticia2 />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
