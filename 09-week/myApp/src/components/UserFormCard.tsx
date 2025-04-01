import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';

type Props = {
    title: string;
    extraFields: React.ReactNode;
};

const UserFormCard: React.FC<Props> = ({ title, extraFields }) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>

            <IonItem>
                <IonLabel position="floating">Nombre</IonLabel>
                <IonInput />
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Apellido</IonLabel>
                <IonInput />
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Edad</IonLabel>
                <IonInput type="number" />
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Correo</IonLabel>
                <IonInput type="email" />
            </IonItem>

            {extraFields}

            <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
                <IonButton color="primary">Agregar</IonButton>
                <IonButton color="warning">Modificar</IonButton>
                <IonButton color="danger">Eliminar</IonButton>
                <IonButton color="medium">Consultar</IonButton>
            </div>
        </IonCard>
    );
};

export default UserFormCard;
