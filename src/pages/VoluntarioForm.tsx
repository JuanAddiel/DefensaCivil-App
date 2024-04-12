import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonItem, IonCheckbox, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import 'tailwindcss/tailwind.css'; 

const FormularioDatosPersonales = () => {
     const [section, setSection] = useState(1);

     const handleBack = () => {
         setSection(section - 1);
     }

     const handleNext = () => {
         setSection(section + 1);
     }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle className="text-white">Formulario de Voluntario</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <img src="src/assets/img/logo.png" alt="" /> <br />
                    <form action="procesar_datos_personales.php" method="POST">
                        <h2 className="text-center text-2xl font-semibold mb-4">Datos Personales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <IonItem>
                                <IonLabel position="stacked">Cédula*</IonLabel>
                                <IonInput type="text" required></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Nombres*</IonLabel>
                                <IonInput type="text" required></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Apellidos*</IonLabel>
                                <IonInput type="text" required></IonInput>
                            </IonItem>

                            <div className="flex items-center">
                                <IonLabel className="mr-4">Sexo*</IonLabel>
                                <div className="flex items-center">
                                    <IonCheckbox slot="start" value="Femenino"></IonCheckbox>
                                    <IonLabel className="ml-2">Femenino</IonLabel>
                                </div>
                                <div className="flex items-center ml-6">
                                    <IonCheckbox slot="start" value="Masculino"></IonCheckbox>
                                    <IonLabel className="ml-2">Masculino</IonLabel>
                                </div>
                            </div>

                            <IonItem>
                                <IonLabel position="stacked">Fecha de nacimiento*</IonLabel>
                                <IonInput type="text" placeholder="dd/mm/aaaa" required></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="stacked">Nacionalidad*</IonLabel>
                                <IonInput type="text" required></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Estado Civil*</IonLabel>
                                <IonSelect>
                                    <IonSelectOption value="">Seleccione una opción</IonSelectOption>
                                    <IonSelectOption value="Soltero/a">Soltero/a</IonSelectOption>
                                    <IonSelectOption value="Casado/a">Casado/a</IonSelectOption>
                                    <IonSelectOption value="Divorciado/a">Divorciado/a</IonSelectOption>
                                    <IonSelectOption value="Viudo/a">Viudo/a</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </div>

                
                        <div className="flex justify-between">
                            {section > 1 && (
                                <IonButton onClick={handleBack} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Atrás</IonButton>
                            )}
                            {section < 1 && (
                                <IonButton onClick={handleNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Siguiente</IonButton>
                            )}
                            {section === 1 && (
                                <IonButton type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</IonButton>
                            )}
                        </div>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default FormularioDatosPersonales;
