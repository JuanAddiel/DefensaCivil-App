import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonGrid, IonRow } from "@ionic/react";
import axios from "axios";
import { FC, useEffect, useState } from "react";

interface ServiciosData {
  nombre: string;
  id: string;
  descripcion: string;
  foto: string;
}
export const Servicio: FC = () => {
  const [services, setServices] = useState<ServiciosData[]>();
  const getServices = async () => {
    try {
      const data = await axios.get(
        "https://adamix.net/defensa_civil/def/servicios.php"
      );
      setServices(data.data.datos);
    } catch (error) {}
  };
  useEffect(() => {
    getServices();
  }, [services]);
  return (
    <>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {services?.map((service, key) => (
              <IonCard key={service.id}>
                <img alt={service.nombre} src={service.foto} />
                <IonCardHeader>
                  <IonCardTitle>{service.nombre}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>{service.descripcion}</IonCardContent>
              </IonCard>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};
