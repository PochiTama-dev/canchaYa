import { useState } from 'react';
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { checkmarkCircle, closeCircle, helpCircle } from 'ionicons/icons';
import './CRMClient.css';

const CRMClient = () => {
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterName, setFilterName] = useState('');
  const [reservations, setReservations] = useState([
    { id: 1, date: '2024-08-01', courtType: 'Cancha 1', time: '10:00', clientName: 'Juan Perez', amount: 100, status: 'reservado' },
    { id: 2, date: '2024-08-02', courtType: 'Cancha 2', time: '11:00', clientName: 'Maria Lopez', amount: 150, status: 'pagado' }
    // Agrega más datos aquí
  ]);

  const filteredReservations = reservations.filter(reservation => {
    return (
      (filterDate === '' || reservation.date.includes(filterDate)) &&
      (filterStatus === '' || reservation.status === filterStatus) &&
      (filterName === '' || reservation.clientName.toLowerCase().includes(filterName.toLowerCase()))
    );
  });

  const handleStatusChange = (id) => {
    setReservations(reservations.map(reservation =>
      reservation.id === id
        ? { ...reservation, status: getNextStatus(reservation.status) }
        : reservation
    ));
  };

  const getNextStatus = (currentStatus) => {
    const statusOrder = ['reservado', 'pagado', 'finalizado', 'suspendido'];
    const currentIndex = statusOrder.indexOf(currentStatus);
    return statusOrder[(currentIndex + 1) % statusOrder.length];
  };

  const getStatusInfo = (status, id) => {
    const statusInfo = {
      'reservado': { icon: helpCircle, color: 'warning', text: 'Reservado' },
      'pagado': { icon: checkmarkCircle, color: 'success', text: 'Pagado' },
      'finalizado': { icon: checkmarkCircle, color: 'primary', text: 'Finalizado' },
      'suspendido': { icon: closeCircle, color: 'danger', text: 'Suspendido' }
    };

    const { icon, color, text } = statusInfo[status] || {};

    return (
      <div className="status-icon" onClick={() => handleStatusChange(id)} style={{ cursor: 'pointer' }}>
        <IonIcon icon={icon} color={color} />
        <span>{text}</span>
      </div>
    );
  };

  return (
    <div className="crm-client">
      <IonItem>
        <IonLabel>Fecha</IonLabel>
        <IonInput type="date" value={filterDate} onIonChange={(e) => setFilterDate(e.detail.value)} />
      </IonItem>
      <IonItem>
      </IonItem>
      <IonItem>
        <IonLabel>Nombre del Cliente</IonLabel>
        <IonInput value={filterName} placeholder="Nombre del Cliente" onIonChange={(e) => setFilterName(e.detail.value)} />
      </IonItem>
      <IonButton expand="full">
        Buscar
      </IonButton>
      <IonGrid>
        <IonRow className="header-row">
          <IonCol>Fecha</IonCol>
          <IonCol>Tipo de Cancha</IonCol>
          <IonCol>Horario</IonCol>
          <IonCol>Nombre del Cliente</IonCol>
          <IonCol>Monto</IonCol>
          <IonCol>Estado</IonCol>
        </IonRow>
        {filteredReservations.map((reservation) => (
          <IonRow key={reservation.id} className="data-row">
            <IonCol>{reservation.date}</IonCol>
            <IonCol>{reservation.courtType}</IonCol>
            <IonCol>{reservation.time}</IonCol>
            <IonCol>{reservation.clientName}</IonCol>
            <IonCol>{reservation.amount}</IonCol>
            <IonCol>{getStatusInfo(reservation.status, reservation.id)}</IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </div>
  );
};

export default CRMClient;
