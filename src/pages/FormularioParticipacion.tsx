import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCheckbox, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';


const ParticipacionVoluntariaForm = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle class="text-white">Participación Voluntaria</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <img src="src/assets/img/logo.png" alt="" /> <br />
                    <form action="procesar_participacion_voluntaria.php" method="POST">
                       
                        <h2 className=" text-center text-xl font-bold mb-4">Seleccione las opciones que desea participar como voluntario:</h2>
                        <IonItem className="mb-4">
                            <IonCheckbox slot="start" value="Limpieza de playas"></IonCheckbox>
                            <IonLabel>Limpieza de playas</IonLabel>
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonCheckbox slot="start" value="Rescate acuático"></IonCheckbox>
                            <IonLabel>Rescate acuático</IonLabel>
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonCheckbox slot="start" value="Donante de sangre"></IonCheckbox>
                            <IonLabel>Donante de sangre</IonLabel>
                        </IonItem>
                        <IonItem className="mb-4">
                            <IonCheckbox slot="start" value="Donante de sangre"></IonCheckbox>
                            <IonLabel>Téc. extración vehicular</IonLabel>
                        </IonItem>
                        <IonItem className="mb-4">
                            <IonCheckbox slot="start" value="Donante de sangre"></IonCheckbox>
                            <IonLabel>Téc. Edificaciones Colapsadas</IonLabel>
                        </IonItem>
                        <IonItem className="mb-4">
                            <IonCheckbox slot="start" value="Donante de sangre"></IonCheckbox>
                            <IonLabel>Atención pre-hospitalaria</IonLabel>
                        </IonItem>
                        <IonItem className="mb-4">
                            <IonCheckbox slot="start" value="Donante de sangre"></IonCheckbox>
                            <IonLabel>Búsqueda y rescate</IonLabel>
                        </IonItem>
                        <IonItem className="mb-4">
                            <IonCheckbox slot="start" value="Donante de sangre"></IonCheckbox>
                            <IonLabel>Siembra de árbole</IonLabel>
                        </IonItem>
                        <IonItem className="mb-4">
                            <IonCheckbox slot="start" value="Donante de sangre"></IonCheckbox>
                            <IonLabel>Búsqueda y localización en montaña</IonLabel>
                        </IonItem>




                        

                        <IonItem className="mb-4">
                            <IonLabel position="stacked">Asistencia</IonLabel>
                            <IonSelect>
                                <IonSelectOption value="Si">Sí</IonSelectOption>
                                <IonSelectOption value="No">No</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonLabel position="stacked">Disponibilidad</IonLabel>
                            <IonSelect>
                                <IonSelectOption value="Tiempo completo">Tiempo completo</IonSelectOption>
                                <IonSelectOption value="Medio tiempo">Medio tiempo</IonSelectOption>
                                <IonSelectOption value="Horas flexibles">Horas flexibles</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem className="mb-4">
                            <IonLabel position="stacked">Días</IonLabel>
                            <IonSelect>
                                <IonSelectOption value="Lunes a Viernes">Lunes a Viernes</IonSelectOption>
                                <IonSelectOption value="Sábados y Domingos">Sábados y Domingos</IonSelectOption>
                                <IonSelectOption value="Todos los días">Todos los días</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                     
                        <IonButton type="submit" expand="full" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</IonButton>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default ParticipacionVoluntariaForm;
