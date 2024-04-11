import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonGrid,
  IonRow,
} from "@ionic/react";
import axios from "axios";
import { FC, useEffect, useState } from "react";

interface MedidasData {
  titulo: string;
  id: string;
  descripcion: string;
  foto: string;
}
export const Medidas: FC = () => {
  const [medidas, setMedidas] = useState<MedidasData[]>();
  const getMedidas = async () => {
    try {
      const data = await axios.get(
        "https://adamix.net/defensa_civil/def/medidas_preventivas.php"
      );
      setMedidas(data.data.datos);
    } catch (error) {}
  };
  useEffect(() => {
    getMedidas();
  }, [medidas]);
  return (
    <>
      <IonContent className="ion-padding">
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
    </>
  );
};
