import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "@ionic/react/css/ionic-swiper.css";

import { slides } from "../utils/slice";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { caretBack } from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";

const Inicio: React.FC<any> = ({setPage}) => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start" onClick={() => setPage("")}>
              <IonButton>
                <IonIcon icon={caretBack}/>
                <IonLabel >Atras</IonLabel>
                </IonButton>
            </IonButtons>
            <IonTitle>Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{ delay: 3000 }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <IonCard>
                  <IonImg src={slide.image} alt="Imagen" />
                  <IonCardHeader>
                    <IonCardTitle>{slide.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>{slide.description}</IonCardContent>
                </IonCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Inicio;
