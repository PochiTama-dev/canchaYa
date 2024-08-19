import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

// Importa tus páginas aquí
import Home from '../pages/Home/Home';
import Usuarios from '../pages/Usuarios/Usuarios';
import Canchas from '../pages/Canchas/Canchas';
import FotosCancha from '../pages/FotosCancha/FotosCancha';
import Subscripciones from '../pages/Subscripciones/Subscripciones';
import Membresias from '../pages/Membresias/Membresias';
import Reservas from '../pages/Reservas/Reservas';
import PagosMembresia from '../pages/PagoMembresia/PagoMembresia';
import Pagos from '../pages/Pagos/Pagos';
import HorariosDisponibilidad from '../pages/HorariosDisponibilidad/HorariosDisponibilidad';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Usuarios/login/Login';
import Register from '../pages/Usuarios/register/Register';
import AddCourts from '../pages/Usuarios/register/Agregar canchas/AddCourts';
import CRMClient from '../pages/CRM/CRM-client/CRMClient';

const Routes = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route exact path="/usuarios" component={Usuarios} />
        <Route exact path="/usuarios/:id" component={Usuarios} />
        <Route exact path="/canchas" component={Canchas} />
        <Route exact path="/canchas/:id" component={Canchas} />
        <Route exact path="/fotos-cancha" component={FotosCancha} />
        <Route exact path="/fotos-cancha/:id" component={FotosCancha} />
        <Route exact path="/subscripciones" component={Subscripciones} />
        <Route exact path="/subscripciones/:id" component={Subscripciones} />
        <Route exact path="/membresias" component={Membresias} />
        <Route exact path="/membresias/:id" component={Membresias} />
        <Route exact path="/reservas" component={Reservas} />
        <Route exact path="/reservas/:id" component={Reservas} />
        <Route exact path="/pagos-membresias" component={PagosMembresia} />
        <Route exact path="/pagos-membresias/:id" component={PagosMembresia} />
        <Route exact path="/pagos" component={Pagos} />
        <Route exact path="/pagos/:id" component={Pagos} />
        <Route exact path="/horarios-disponibilidad" component={HorariosDisponibilidad} />
        <Route exact path="/horarios-disponibilidad/:id" component={HorariosDisponibilidad} />
        <Route exact path="/iniciar-sesion" component={Login} />
        <Route exact path="/registro" component={Register} />
        <Route exact path="/agregar-canchas" component={AddCourts} />
        <Route exact path="/CRM-Client" component={CRMClient} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default Routes;
