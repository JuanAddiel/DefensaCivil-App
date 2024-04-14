import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import 'tailwindcss/tailwind.css'; 

const FormularioDatos = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle className="text-white">Formulario de Voluntario</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <img src="src/assets/img/logo.png" alt="" /><br />
                    <h1 className="text-center text-3xl font-bold mb-8">Datos Personales</h1>
                    <form action="procesar_datos_personales.php" method="POST">
                        <IonItem className="mb-4">
                            <IonLabel position="stacked" className="text-gray-600">Provincia*</IonLabel>
                            <IonInput type="text" required className="px-4 py-3 rounded-md border border-gray-300 w-full" />
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonLabel position="stacked" className="text-gray-600">Municipio*</IonLabel>
                            <IonInput type="text" required className="px-4 py-3 rounded-md border border-gray-300 w-full" />
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonLabel position="stacked" className="text-gray-600">Calle*</IonLabel>
                            <IonInput type="text" required className="px-4 py-3 rounded-md border border-gray-300 w-full" />
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonLabel className="text-gray-600">Nivel Educativo*</IonLabel>
                            <IonSelect className="px-4 py-3 rounded-md border border-gray-300 w-full">
                                <IonSelectOption value="">Seleccione una opción</IonSelectOption>
                                <IonSelectOption value="Primaria">Primaria</IonSelectOption>
                                <IonSelectOption value="Secundaria">Secundaria</IonSelectOption>
                                <IonSelectOption value="Universitario">Universitario</IonSelectOption>
                                <IonSelectOption value="Postgrado">Postgrado</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonLabel className="text-gray-600">Ocupación*</IonLabel>
                            <IonSelect className="px-4 py-3 rounded-md border border-gray-300 w-full">
                                <IonSelectOption value="">Seleccione una opción</IonSelectOption>
                                <IonSelectOption value="Estudiante">Estudiante</IonSelectOption>
                                <IonSelectOption value="Empleado">Empleado</IonSelectOption>
                                <IonSelectOption value="Empresario">Empresario</IonSelectOption>
                                <IonSelectOption value="Desempleado">Desempleado</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        
                        <IonButton type="submit" expand="full" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</IonButton>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default FormularioDatos;
