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

interface MedidasData {
  titulo: string;
  id: string;
  descripcion: string;
  foto: string;
}
export const Medidas: FC<any> = ({setPage}) => {
  const [medidas, setMedidas] = useState<MedidasData[]>();
    const [loading, setLoading] = useState<boolean>(true);

  const getMedidas = async () => {
    try {
      const data = await axios.get(
        "https://adamix.net/defensa_civil/def/medidas_preventivas.php"
      );
      setMedidas(data.data.datos);
      setLoading(false)
    } catch (error) {
      setLoading(false); 
    }
  };
  useEffect(() => {
    getMedidas();
  }, [medidas]);
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
            <IonTitle>Medidas Preventivas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonLoading isOpen={loading} message={"Cargando albergues..."} />

          <IonGrid>
            <IonRow>
              {medidas?.map((medidas, key) => (
                <IonCard key={medidas.id}>
                  <img alt={medidas.titulo} src={medidas.foto} />
                  <IonCardHeader>
                    <IonCardTitle>{medidas.titulo}</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>{medidas.descripcion}</IonCardContent>
                </IonCard>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};
