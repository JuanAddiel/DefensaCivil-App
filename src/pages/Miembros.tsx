import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonLoading,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { caretBack } from "ionicons/icons";
import { FC, useEffect, useState } from "react";

interface MiembrosData {
  nombre: string;
  id: string;
  cargo: string;
  foto: string;
}
export const Miembros: FC<any> = ({setPage}) => {
  const [miembros, setMiembros] = useState<MiembrosData[]>();
    const [loading, setLoading] = useState<boolean>(true);

  const getMiembros = async () => {
    try {
      const data = await axios.get(
        "https://adamix.net/defensa_civil/def/miembros.php"
      );

      //Esto me da la latitud y longitud
        // const coordinates = await Geolocation.getCurrentPosition();

        // console.log("Current position:", coordinates);

      setMiembros(data.data.datos);
      setLoading(false)
    } catch (error) {
            setLoading(false);

    }
  };
  useEffect(() => {
    getMiembros();
  }, [miembros]);
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
            <IonTitle>Miembros</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonLoading isOpen={loading} message={"Cargando miembros..."} />

          <IonGrid>
            <IonRow>
              {miembros?.map((service, key) => (
                <IonCard key={service.id}>
                  <img alt={service.nombre} src={service.foto} />
                  <IonCardHeader>
                    <IonCardTitle>
                      {service.nombre} - {service.cargo}
                    </IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};
