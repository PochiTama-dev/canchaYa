import { IonPage } from '@ionic/react';
import CRMClient from './CRM-client/CRMClient';
import './CRM.css'; // Asegúrate de importar el archivo CSS donde definiste los estilos

const CRM = () => {
  return (
    <IonPage className="crm-page">
      <CRMClient />
    </IonPage>
  );
};

export default CRM;
