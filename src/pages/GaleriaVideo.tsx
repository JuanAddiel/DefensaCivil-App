import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonThumbnail,
  IonImg,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonButton,
  IonLabel,
  IonTitle,
} from "@ionic/react";
import { caretBack } from "ionicons/icons";

import "../components/GaleriaVideo.css";

const videos = [
  {
    id: 1,
    title: "Fundamentos de la Defensa Civil",
    url: "https://www.youtube.com/embed/_m4W7TsWcBo",
    thumbnail: "/public/yt3.png",
  },
  {
    id: 2,
    title: "Cómo actuar en caso de terremoto",
    url: "https://www.youtube.com/embed/MKw2FQ2yKEY",
    thumbnail: "/public/yt3.png",
  },
  {
    id: 3,
    title: "Preparativos para huracanes",
    url: "https://www.youtube.com/embed/TQ_ue_oQfuc",
    thumbnail: "/public/yt3.png",
  },
  // Más videos aquí
];

const GaleriaVideo: React.FC<any> = ({setPage}) => {
  return (
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
      <IonContent>
        {videos.map((video) => (
          <IonCard key={video.id}>
            <IonCardHeader>
              <IonCardTitle>{video.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonThumbnail slot="start">
                <IonImg src={video.thumbnail} />
              </IonThumbnail>
              <iframe
                width="320"
                height="240"
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default GaleriaVideo;
