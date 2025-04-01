import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput } from '@ionic/react';
import UserFormCard from '../components/UserFormCard';

const Proveedor: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Proveedor</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <UserFormCard
                    title="Formulario de Proveedor"
                    extraFields={
                        <>
                            <IonItem>
                                <IonLabel position="floating">Empresa</IonLabel>
                                <IonInput />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">NIT</IonLabel>
                                <IonInput />
                            </IonItem>
                        </>
                    }
                />
            </IonContent>
        </IonPage>
    );
};

export default Proveedor;
