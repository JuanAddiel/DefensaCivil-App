import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import 'tailwindcss/tailwind.css'; 

const DocumentosPersonalesForm = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle className="text-white">Documentos Personales</IonTitle> 
                </IonToolbar>
            </IonHeader>
            <IonContent className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <img src="src/assets/img/logo.png" alt="" /> <br />

                    <h1 className="text-3xl font-bold mb-8">Documentos Personales</h1>
                    <form action="procesar_documentos_personales.php" method="POST">
                        <IonGrid>
                            <IonRow>
                                <IonCol size="12" className="mb-4">
                                    <IonLabel className="text-gray-600">Seleccione una foto personal*</IonLabel>
                                    <input type="file" name="fotoPersonal" accept="image/*" className="hidden" />
                                    <label htmlFor="fotoPersonal" className="block bg-gray-200 cursor-pointer py-2 px-4 rounded-lg text-center">
                                        <span>Seleccionar foto</span>
                                    </label>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="12" className="mb-4">
                                    <IonLabel className="text-gray-600">Seleccione foto frontal de la cédula*</IonLabel>
                                    <input type="file" name="fotoCedulaFrontal" accept="image/*" className="hidden" />
                                    <label htmlFor="fotoCedulaFrontal" className="block bg-gray-200 cursor-pointer py-2 px-4 rounded-lg text-center">
                                        <span>Seleccionar foto</span>
                                    </label>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size="12" className="mb-4">
                                    <IonLabel className="text-gray-600">Seleccione foto reverso de la cédula*</IonLabel>
                                    <input type="file" name="fotoCedulaReverso" accept="image/*" className="hidden" />
                                    <label htmlFor="fotoCedulaReverso" className="block bg-gray-200 cursor-pointer py-2 px-4 rounded-lg text-center">
                                        <span>Seleccionar foto</span>
                                    </label>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                     
                        <IonButton type="submit" expand="full" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</IonButton>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default DocumentosPersonalesForm;
