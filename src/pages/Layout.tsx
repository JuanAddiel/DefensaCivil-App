import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { FC, useState } from "react";
import { listOptions } from "../utils/listOptions";
import { Link } from "react-router-dom";
import Inicio from "./Inicio";
import { Servicio } from "./Servicio";
import { Noticias } from "./Noticias";
import { ListaAlbergues } from "./ListaAlbergues";
import { MapasAlbergues } from "./MapasAlbergues";
import { Medidas } from "./MedidasPreventivas";
import { Miembros } from "./Miembros";
import Historia from "./Historia";
import GaleriaVideo from "./GaleriaVideo";
import FormularioDatosPersonales from "./VoluntarioForm";

export const Layout: FC = () => {
  const [page, setPage]= useState<string>("");
  return (
    <>
      <IonContent scrollY={true}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            {page === "" &&
              listOptions.map((items, key) => (
                <IonCol size="6" key={key}>
                  <IonCard onClick={() => setPage(items.title)}>
                    <img alt="Silhouette of mountains" src={items.image} />
                    <IonCardHeader>
                      <IonCardTitle style={{ fontSize: "1rem" }}>
                        {items.title}
                      </IonCardTitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
              ))}
            {page === "Inicio" && <Inicio setPage={setPage} />}
            {page === "Servicios" && <Servicio setPage={setPage} />}
            {page === "Noticias" && <Noticias setPage={setPage} />}
            {page === "Albergues" && <ListaAlbergues setPage={setPage} />}
            {page === "Mapa de Albergues" && (
              <MapasAlbergues setPage={setPage} />
            )}
            {page === "Medidas Preventivas" && <Medidas setPage={setPage} />}
            {page === "Miembros" && <Miembros setPage={setPage} />}
            {page === "Historia" && <Historia setPage={setPage} />}
            {page === "Videos" && <GaleriaVideo setPage={setPage} />}
            {page === "Quiero ser voluntario" && <FormularioDatosPersonales setPage={setPage} />}
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};
