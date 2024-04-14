import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonToggle,
} from "@ionic/react";
import "tailwindcss/tailwind.css";

const ContactoForm = () => {
  const [viveConPareja, setViveConPareja] = useState(false);
  const [nombrePareja, setNombrePareja] = useState<
    string | undefined | null | number
  >("");
  const [numeroContactoPareja, setNumeroContactoPareja] = useState<
    string | undefined | null | number
  >("");

  const handleToggleChange = () => {
    setViveConPareja(!viveConPareja);
    if (!viveConPareja) {
      setNombrePareja("");
      setNumeroContactoPareja("");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="text-white">Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="bg-gray-100">
        <div className="container mx-auto py-8">
          <img src="src/assets/img/logo.png" alt="Logo" /> <br />
          <h1 className="text-center text-3xl font-bold mb-8">Contacto</h1>
          <form action="procesar_contacto.php" method="POST">
            <IonGrid>
              <IonRow>
                <IonCol size="12" size-md="6" className="mb-4">
                  <IonItem>
                    <IonLabel position="stacked" className="text-gray-600">
                      Correo
                    </IonLabel>
                    <IonInput
                      type="email"
                      required
                      className="px-4 py-3 rounded-md border border-gray-300 w-full"
                    />
                  </IonItem>
                </IonCol>
                <IonCol size="12" size-md="6" className="mb-4">
                  <IonItem>
                    <IonLabel position="stacked" className="text-gray-600">
                      Celular*
                    </IonLabel>
                    <IonInput
                      type="tel"
                      required
                      className="px-4 py-3 rounded-md border border-gray-300 w-full"
                    />
                  </IonItem>
                </IonCol>
                <IonCol size="12" size-md="6" className="mb-4">
                  <IonItem>
                    <IonLabel position="stacked" className="text-gray-600">
                      Telefono*
                    </IonLabel>
                    <IonInput
                      type="tel"
                      required
                      className="px-4 py-3 rounded-md border border-gray-300 w-full"
                    />
                  </IonItem>
                </IonCol>
                <IonCol size="12" size-md="6" className="mb-4">
                  <IonItem>
                    <IonLabel position="stacked" className="text-gray-600">
                      Nombre de su madre
                    </IonLabel>
                    <IonInput
                      type="tel"
                      required
                      className="px-4 py-3 rounded-md border border-gray-300 w-full"
                    />
                  </IonItem>
                </IonCol>
                <IonCol size="12" size-md="6" className="mb-4">
                  <IonItem>
                    <IonLabel position="stacked" className="text-gray-600">
                      Número de contacto
                    </IonLabel>
                    <IonInput
                      type="tel"
                      required
                      className="px-4 py-3 rounded-md border border-gray-300 w-full"
                    />
                  </IonItem>
                </IonCol>
                <IonCol size="12" size-md="6" className="mb-4">
                  <IonItem>
                    <IonLabel position="stacked" className="text-gray-600">
                      Nombre de su padre
                    </IonLabel>
                    <IonInput
                      type="tel"
                      required
                      className="px-4 py-3 rounded-md border border-gray-300 w-full"
                    />
                  </IonItem>
                </IonCol>

                <IonCol size="12" size-md="6" className="mb-4">
                  <IonItem>
                    <IonLabel position="stacked" className="text-gray-600">
                      Número de contacto
                    </IonLabel>
                    <IonInput
                      type="tel"
                      required
                      className="px-4 py-3 rounded-md border border-gray-300 w-full"
                    />
                  </IonItem>
                </IonCol>
                <IonCol size="12" size-md="6" className="mb-4">
                  <IonItem>
                    <IonLabel position="stacked" className="text-gray-600">
                      En caso de emergencia llamar a
                    </IonLabel>
                    <IonInput
                      type="tel"
                      required
                      className="px-4 py-3 rounded-md border border-gray-300 w-full"
                    />
                  </IonItem>
                </IonCol>
                <IonCol size="12" size-md="6" className="mb-4">
                  <IonItem>
                    <IonLabel position="stacked" className="text-gray-600">
                      Número de contacto
                    </IonLabel>
                    <IonInput
                      type="tel"
                      required
                      className="px-4 py-3 rounded-md border border-gray-300 w-full"
                    />
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" className="mb-4">
                  <IonItem>
                    <IonLabel>Vive con su pareja?</IonLabel>
                    <IonToggle
                      checked={viveConPareja}
                      onIonChange={handleToggleChange}
                    />
                  </IonItem>
                </IonCol>
                {viveConPareja && (
                  <>
                    <IonCol size="12" size-sm="6" className="mb-4">
                      <IonItem>
                        <IonLabel position="stacked" className="text-gray-600">
                          Nombre de su pareja
                        </IonLabel>
                        <IonInput
                          type="text"
                          value={nombrePareja}
                          onIonChange={(e) => setNombrePareja(e.target.value)}
                          className="px-4 py-3 rounded-md border border-gray-300 w-full"
                        />
                      </IonItem>
                    </IonCol>
                    <IonCol size="12" size-sm="6" className="mb-4">
                      <IonItem>
                        <IonLabel position="stacked" className="text-gray-600">
                          Número de contacto de su pareja
                        </IonLabel>
                        <IonInput
                          type="tel"
                          value={numeroContactoPareja}
                          onIonChange={(e) =>
                            setNumeroContactoPareja(e.target.value)
                          }
                          className="px-4 py-3 rounded-md border border-gray-300 w-full"
                        />
                      </IonItem>
                    </IonCol>
                  </>
                )}
              </IonRow>
            </IonGrid>
            <IonButton
              type="submit"
              expand="full"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enviar
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ContactoForm;
