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

interface MiembrosData {
  nombre: string;
  id: string;
  cargo: string;
  foto: string;
}
export const Miembros: FC = () => {
  const [miembros, setMiembros] = useState<MiembrosData[]>();
  const getMiembros = async () => {
    try {
      const data = await axios.get(
        "https://adamix.net/defensa_civil/def/miembros.php"
      );

      //Esto me da la latitud y longitud
        // const coordinates = await Geolocation.getCurrentPosition();

        // console.log("Current position:", coordinates);

      setMiembros(data.data.datos);
    } catch (error) {}
  };
  useEffect(() => {
    getMiembros();
  }, [miembros]);
  return (
    <>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {miembros?.map((service, key) => (
              <IonCard key={service.id}>
                <img alt={service.nombre} src={service.foto} />
                <IonCardHeader>
                  <IonCardTitle>{service.nombre} - {service.cargo}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};
