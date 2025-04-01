import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput } from '@ionic/react';
import UserFormCard from '../components/UserFormCard';

const Estudiante: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Estudiante</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <UserFormCard
                    title="Formulario de Estudiante"
                    extraFields={
                        <>
                            <IonItem>
                                <IonLabel position="floating">Carrera</IonLabel>
                                <IonInput />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Semestre</IonLabel>
                                <IonInput type="number" />
                            </IonItem>
                        </>
                    }
                />
            </IonContent>
        </IonPage>
    );
};

export default Estudiante;
