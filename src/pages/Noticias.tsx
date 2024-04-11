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

interface NoticiasData {
  titulo: string;
  id: string;
  fecha: string;
  contenido: string;
  foto: string;
}
export const Noticias: FC = () => {
  const [noticia, setNoticia] = useState<NoticiasData[]>();
  const getNoticia = async () => {
    try {
      const data = await axios.get(
        "https://adamix.net/defensa_civil/def/noticias.php"
      );
      setNoticia(data.data.datos);
    } catch (error) {}
  };
  useEffect(() => {
    getNoticia();
  }, [noticia]);
  return (
    <>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {noticia?.map((noticia, key) => (
              <IonCard key={noticia.id}>
                <img alt={noticia.titulo} src={noticia.foto} />
                <IonCardHeader>
                  <IonCardTitle>{noticia.titulo} - {noticia.fecha}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>{noticia.contenido}</IonCardContent>
              </IonCard>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};
