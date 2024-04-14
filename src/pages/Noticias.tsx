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

interface NoticiasData {
  titulo: string;
  id: string;
  fecha: string;
  contenido: string;
  foto: string;
}

export const Noticias: FC<any> = ({ setPage }) => {
  const [noticia, setNoticia] = useState<NoticiasData[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const getNoticia = async () => {
    try {
      const data = await axios.get(
        "https://adamix.net/defensa_civil/def/noticias.php"
      );
      setNoticia(data.data.datos);
      setLoading(false); // Oculta el indicador de carga
    } catch (error) {
      setLoading(false); // En caso de error, también oculta el indicador de carga
    }
  };

  useEffect(() => {
    getNoticia();
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
            <IonTitle>Noticias</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonLoading isOpen={loading} message={"Cargando noticias..."} />
          <IonGrid>
            <IonRow>
              {noticia?.map((noticia, key) => (
                <IonCard key={noticia.id}>
                  <img alt={noticia.titulo} src={noticia.foto} />
                  <IonCardHeader>
                    <IonCardTitle>
                      {noticia.titulo} - {noticia.fecha}
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{noticia.contenido}</IonCardContent>
                </IonCard>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};
