import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  InfoWindowF,
  LoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { caretBack } from "ionicons/icons";

interface AlberguesData {
  ciudad: string;
  codigo: string;
  edificio: string;
  coordinador: string;
  telefono: string;
  capacidad: string;
  lng: string;
  lat: string;
}

export const MapasAlbergues: React.FC<any> = ({ setPage }) => {
  const mapStyles = { height: "600px", width: "100%" };

  const [infoWindowOpen, setInfoWindowOpen] = useState<number | null>(null); // Cambiado a number
  const [albergues, setAlbergues] = useState<AlberguesData[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAlbergues = async () => {
      try {
        const response = await axios.get(
          "https://adamix.net/defensa_civil/def/albergues.php"
        );
        setAlbergues(response.data.datos);
        setLoading(false); // Oculta el indicador de carga
      } catch (error) {
        setLoading(false); // En caso de error, también oculta el indicador de carga
      }
    };

    fetchAlbergues();
  }, []);

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
          <IonTitle>Mapa Albergues</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading isOpen={loading} message={"Cargando albergues..."} />

      {loading === false && albergues ? (
        <LoadScript googleMapsApiKey="AIzaSyBmtek8kU8oBsst3u0M_P7SaPjPAMaXxgY">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={{
              lat: parseFloat(albergues[0].lng),
              lng: parseFloat(albergues[0].lat),
            }}
          >
            {albergues.map((albergue, index) => (
              <MarkerF
                key={index}
                position={{
                  lat: parseFloat(albergue.lng),
                  lng: parseFloat(albergue.lat),
                }}
                onClick={() => setInfoWindowOpen(index)} // Cambiado
              >
                {infoWindowOpen === index && ( // Cambiado
                  <InfoWindowF
                    position={{
                      lat: parseFloat(albergue.lng),
                      lng: parseFloat(albergue.lat),
                    }}
                    onCloseClick={() => setInfoWindowOpen(null)}
                  >
                    <div>
                      <IonLabel color="primary">
                        {albergue.ciudad}: {albergue.edificio}
                      </IonLabel>
                      <br />
                      <IonLabel color="primary">
                        Capacidad: {albergue.capacidad}
                      </IonLabel>
                      <br />
                      <IonLabel color="primary">
                        Coordinador: {albergue.coordinador}
                      </IonLabel>
                      <br />
                      <IonLabel color="primary">
                        Teléfono: {albergue.telefono}
                      </IonLabel>
                    </div>
                  </InfoWindowF>
                )}
              </MarkerF>
            ))}
          </GoogleMap>
        </LoadScript>
      ) : (
        <h1>No se encontraron datos de albergues.</h1>
      )}
    </IonPage>
  );
};
