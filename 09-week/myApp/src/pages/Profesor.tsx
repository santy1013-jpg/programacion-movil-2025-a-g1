import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput } from '@ionic/react';
import UserFormCard from '../components/UserFormCard';

const Profesor: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profesor</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <UserFormCard
                    title="Formulario de Profesor"
                    extraFields={
                        <>
                            <IonItem>
                                <IonLabel position="floating">Especialidad</IonLabel>
                                <IonInput />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Departamento</IonLabel>
                                <IonInput />
                            </IonItem>
                        </>
                    }
                />
            </IonContent>
        </IonPage>
    );
};

export default Profesor;
