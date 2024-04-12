import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonAccordionGroup,
  IonAccordion,
  IonImg,
} from "@ionic/react";
import "../components/Historia.css"; // archivo CSS

const Historia: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Defensa Civil</IonCardSubtitle>
            <IonCardTitle>Evolución y Logros</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonImg src="/defensacivil.png" alt="Imagen de Defensa Civil" />
            <p>
              La Defensa Civil, instituida para proteger a los civiles en
              situaciones de emergencia, ha evolucionado significativamente
              desde su creación. Este organismo no solo se encarga de la gestión
              de desastres sino también de la preparación de la comunidad ante
              eventos adversos.
            </p>
          </IonCardContent>
        </IonCard>

        <IonAccordionGroup>
          {/* Eventos Significativos */}
          <IonAccordion value="eventos">
            <IonItem slot="header">
              <IonLabel>Eventos Significativos</IonLabel>
            </IonItem>
            <IonCardContent slot="content">
              <strong className="ion-card-title">
                Convenio de Aviación Civil Internacional
              </strong>
              <p>
                El 7 de diciembre de 1944, la República Dominicana firmó el
                Convenio de Aviación Civil Internacional, ratificado por el
                Congreso Nacional el 11 de agosto de 1945.
              </p>
              <strong className="ion-card-title">
                Localización de un cadáver
              </strong>
              <p>
                En marzo de 2022, personal de la Defensa Civil localizó el
                cadáver de un hombre que había caído en el río Cuaba.
              </p>
              <strong className="ion-card-title">
                Memorándum con la Cruz Roja Dominicana
              </strong>
              <p>
                En diciembre de 2023, la Defensa Civil y la Cruz Roja Dominicana
                firmaron un memorándum de entendimiento para fortalecer la
                gestión de riesgos y la respuesta a emergencias y desastres.
              </p>
              <strong className="ion-card-title">
                Capacitación sobre principios humanitarios
              </strong>
              <p>
                En marzo de 2022, la Defensa Civil y la OIM realizaron una
                capacitación de cuatro días sobre sensibilización en principios
                humanitarios.
              </p>
              <strong className="ion-card-title">
                Simulacro contra terremotos
              </strong>
              <p>
                En mayo de 2022, la Defensa Civil realizó un simulacro contra
                terremotos en Tusambil.
              </p>
              <strong className="ion-card-title">Feria del Libro</strong>
              <p>
                En abril de 2022, la Defensa Civil instaló un puesto de atención
                pre-hospitalaria y otro de niños y niñas extraviados en la Zona
                Colonial.
              </p>
            </IonCardContent>
          </IonAccordion>

          {/* Logros Importantes */}
          <IonAccordion value="logros">
            <IonItem slot="header">
              <IonLabel>Logros Importantes</IonLabel>
            </IonItem>
            <IonCardContent slot="content">
              <p>
                <strong>Respuesta a Emergencias:</strong> Eficacia en la
                respuesta rápida a situaciones de emergencia como huracanes,
                terremotos, inundaciones y otros desastres naturales. Su
                capacidad para movilizar recursos y coordinar con otras agencias
                ha sido fundamental para mitigar los efectos de estas crisis.
              </p>
              <p>
                <strong>Programas de Capacitación:</strong> Implementación de
                programas de capacitación continua para sus voluntarios y
                empleados, incluyendo entrenamientos en primeros auxilios,
                manejo de emergencias, y rescate acuático y urbano. Esto ha
                elevado el nivel de preparación frente a cualquier eventualidad.
              </p>
              <p>
                <strong>Educación y Prevención:</strong> Desarrollo de programas
                de educación y prevención que informan y educan al público sobre
                cómo actuar en caso de emergencias y desastres. Esto incluye
                simulacros de evacuación, campañas de sensibilización, y
                talleres en escuelas y comunidades.
              </p>
              <p>
                <strong>Cooperación Internacional:</strong> Participación activa
                en tratados y acuerdos de cooperación internacional que
                fortalecen las capacidades de respuesta ante desastres a nivel
                global y regional. Esto incluye colaboraciones con
                organizaciones como la Cruz Roja, la ONU y otras agencias de
                manejo de emergencias.
              </p>
              <p>
                <strong>Innovación en Sistemas de Alerta Temprana:</strong>{" "}
                Desarrollo e implementación de sistemas de alerta temprana que
                permiten a la población recibir avisos previos efectivos ante la
                amenaza de fenómenos meteorológicos u otros riesgos,
                contribuyendo a salvar vidas y reducir daños materiales.
              </p>
              <p>
                <strong>Expansión de la Red de Voluntarios:</strong> Aumento
                significativo en la red de voluntarios, lo cual amplía su
                capacidad de acción y presencia en todo el territorio nacional,
                asegurando una respuesta rápida y eficiente.
              </p>
              <p>
                <strong>Mejora de la Infraestructura de Emergencias:</strong>{" "}
                Mejora y mantenimiento de la infraestructura necesaria para la
                gestión de emergencias, incluyendo la adquisición de equipos
                modernos y la construcción de centros operativos más eficientes.
              </p>
              <p>
                <strong>Reconocimientos y Certificaciones:</strong> Obtención de
                diversas certificaciones internacionales que avalan sus procesos
                y métodos de trabajo conforme a estándares internacionales de
                gestión de riesgos y emergencias.
              </p>
              <p>
                <strong>Apoyo en Eventos Públicos de Gran Escala:</strong>{" "}
                Participación activa en la planificación y gestión de la
                seguridad en eventos públicos de gran escala, como festivales,
                ferias y actividades nacionales, asegurando el bienestar de los
                asistentes.
              </p>
              <p>
                <strong>Investigación y Desarrollo:</strong> Inversión en
                investigación y desarrollo para mejorar las técnicas de
                respuesta y prevención, adaptándose continuamente a los nuevos
                desafíos que presentan el cambio climático y otros factores
                ambientales.
              </p>
            </IonCardContent>
          </IonAccordion>
        </IonAccordionGroup>

        {/* Continuar agregando más componentes según sea necesario */}
      </IonContent>
    </IonPage>
  );
};

export default Historia;
