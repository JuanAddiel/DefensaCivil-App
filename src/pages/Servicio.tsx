import {
  IonBackButton,
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
  useIonRouter,
} from "@ionic/react";
import axios from "axios";
import { caretBack } from "ionicons/icons";
import { FC, useEffect, useState } from "react";

interface ServiciosData {
  nombre: string;
  id: string;
  descripcion: string;
  foto: string;
}

export const Servicio: FC<any> = ({ setPage }) => {
  const router = useIonRouter();
  const [services, setServices] = useState<ServiciosData[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://adamix.net/defensa_civil/def/servicios.php"
        );
        setServices(response.data.datos);
        setLoading(false); // Oculta el indicador de carga
      } catch (error) {
        setLoading(false); // En caso de error, también oculta el indicador de carga
      }
    };

    fetchServices();
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
            <IonTitle>Servicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonLoading isOpen={loading} message={"Cargando servicios..."} />
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
      </IonPage>
    </>
  );
};
