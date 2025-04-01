import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput } from '@ionic/react';
import UserFormCard from '../components/UserFormCard';

const Cliente: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Cliente</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <UserFormCard
                    title="Formulario de Cliente"
                    extraFields={
                        <>
                            <IonItem>
                                <IonLabel position="floating">Dirección</IonLabel>
                                <IonInput />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Teléfono</IonLabel>
                                <IonInput type="tel" />
                            </IonItem>
                        </>
                    }
                />
            </IonContent>
        </IonPage>
    );
};

export default Cliente;
