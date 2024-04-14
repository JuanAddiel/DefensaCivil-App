import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import 'tailwindcss/tailwind.css';

const OtrosDatosPersonalesForm = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle className="text-white">Otros Datos Personales</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="bg-gray-100">
                <div className="container mx-auto py-8">
                 <img src="src/assets/img/logo.png" alt="" /> <br />
                    <h1 className="text-center text-3xl font-bold mb-8">Otros Datos Personales</h1>
                    <form action="procesar_otros_datos_personales.php" method="POST">
                        <IonItem className="mb-4">
                            <IonLabel position="stacked" className="text-gray-600">¿Tienes empleo?</IonLabel>
                            <IonSelect className="px-4 py-3 rounded-md border border-gray-300 w-full">
                                <IonSelectOption value="Si">Sí</IonSelectOption>
                                <IonSelectOption value="No">No</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonLabel position="stacked" className="text-gray-600">¿Tienes licencia de conducir?</IonLabel>
                            <IonSelect className="px-4 py-3 rounded-md border border-gray-300 w-full">
                                <IonSelectOption value="Si">Sí</IonSelectOption>
                                <IonSelectOption value="No">No</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonLabel position="stacked" className="text-gray-600">¿Tienes tarjeta supérate?</IonLabel>
                            <IonSelect className="px-4 py-3 rounded-md border border-gray-300 w-full">
                                <IonSelectOption value="Si">Sí</IonSelectOption>
                                <IonSelectOption value="No">No</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonLabel position="stacked" className="text-gray-600">¿Tienes cuenta de banco?</IonLabel>
                            <IonSelect className="px-4 py-3 rounded-md border border-gray-300 w-full">
                                <IonSelectOption value="Si">Sí</IonSelectOption>
                                <IonSelectOption value="No">No</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonLabel position="stacked" className="text-gray-600">¿Tienes seguro médico?</IonLabel>
                            <IonSelect className="px-4 py-3 rounded-md border border-gray-300 w-full">
                                <IonSelectOption value="Si">Sí</IonSelectOption>
                                <IonSelectOption value="No">No</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonLabel position="stacked" className="text-gray-600">Cantidad de hijos</IonLabel>
                            <IonInput type="number" className="px-4 py-3 rounded-md border border-gray-300 w-full" />
                        </IonItem>

                        <IonButton type="submit" expand="full" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</IonButton>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default OtrosDatosPersonalesForm;
