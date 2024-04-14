import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonLoading, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";
import { caretBack } from "ionicons/icons";
import { FC, useEffect, useState } from "react";


interface AlberguesData {
  ciudad: string;
  codigo: string;
  edificio: string;
  coordinador: string;
  telefono: string;
  capacidad: string;
  lng: string;
  lat: string;
}
export const ListaAlbergues:FC<any> = ({setPage})=>{
 const [albergues, setAlbergues] = useState<AlberguesData[]>();
 const [loading, setLoading] = useState<boolean>(true);

 useEffect(() => {
   const fetchAlbergues = async () => {
     try {
       const response = await axios.get(
         "https://adamix.net/defensa_civil/def/albergues.php"
       );
       setAlbergues(response.data.datos);
       setLoading(false); // Oculta el indicador de carga
     } catch (error) {
       setLoading(false); // En caso de error, también oculta el indicador de carga
     }
   };

   fetchAlbergues();
 }, []);

 return (
   <>
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start" onClick={() => setPage("")}>
              <IonButton>
                <IonIcon icon={caretBack} />
                <IonLabel>Atras</IonLabel>
              </IonButton>
            </IonButtons>
            <IonTitle>Albergues</IonTitle>
          </IonToolbar>
        </IonHeader>
     <IonContent>
       <IonLoading isOpen={loading} message={"Cargando albergues..."} />
       <IonList>
         {albergues?.map((item, key) => (
           <IonItem key={item.codigo}>
             <IonLabel>{item.edificio}</IonLabel>
           </IonItem>
         ))}
       </IonList>
     </IonContent>
     </IonPage>
   </>
 );
}