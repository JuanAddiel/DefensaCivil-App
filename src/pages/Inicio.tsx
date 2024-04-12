import React from 'react';
import { IonContent } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'; 

const slides = [
    {
        id: 1,
        title: 'Edesur Dominicana y Defensa Civil acuerdan estrechar lazos de colaboración interinstitucional',
        description: (
          <>
            <p>Santo Domingo.- La Empresa Distribuidora de Electricidad del Sur (Edesur Dominicana) y la Defensa Civil acordaron estrechar lazos de colaboración interinstitucional para fortalecer la respuesta ante situaciones de emergencia y desastres naturales en el país.</p><br />
            <p>El acuerdo fue firmado por el presidente de la Comisión Nacional de Emergencias y director ejecutivo de la Defensa Civil, Juan Salas, y el administrador gerente general de Edesur, Andrés Astacio, quienes coincidieron en la importancia de trabajar de manera conjunta para garantizar la seguridad de la población.</p><br />
            <p>Salas destacó la importancia de la alianza con Edesur, ya que la empresa eléctrica es una de las instituciones que juega un papel fundamental en la respuesta ante situaciones de emergencia y desastres naturales, debido a que la energía eléctrica es un servicio esencial para la población.</p><br />
            <p>“La energía eléctrica es un servicio esencial para la población y en situaciones de emergencia y desastres naturales, la respuesta de Edesur es fundamental para garantizar la seguridad y el bienestar de la población”, afirmó Salas.</p><br />
            <p>Por su parte, Astacio expresó su compromiso de trabajar de manera coordinada con la Defensa Civil para fortalecer la respuesta ante situaciones de emergencia y desastres naturales en el país.</p><br />
            <p>“En Edesur estamos comprometidos con la seguridad y el bienestar de la población y por eso estamos trabajando de manera conjunta con la Defensa Civil para fortalecer la respuesta ante situaciones de emergencia y desastres naturales en el país”, afirmó Astacio.</p><br />
            <p>El acuerdo entre Edesur y la Defensa Civil contempla la realización de simulacros de emergencia, la capacitación del personal de ambas instituciones en materia de gestión de riesgos y la coordinación de acciones para garantizar la seguridad de la población en caso de desastres naturales.</p><br />
            </>
        ),
    
        image: 'src/assets/img/Accion1.jpg'
      },
      {
        id: 2,
        title: 'Defensa Civil apuesta al uso de la tecnología para ser más eficiente ante cualquier fenomeno',
        description: (
           
          <>
            <p>Santo Domingo.- La Defensa Civil de la República Dominicana apuesta al uso de la tecnología para ser más eficiente en la respuesta ante cualquier fenómeno natural que pueda afectar al país.</p><br />
            <p>Así lo afirmó el presidente de la Comisión Nacional de Emergencias y director ejecutivo de la Defensa Civil, Juan Salas, durante la presentación de la nueva plataforma tecnológica de la institución, que permitirá mejorar la coordinación y la respuesta ante situaciones de emergencia y desastres naturales.</p><br />
            <p>“La tecnología es una herramienta fundamental para mejorar la respuesta ante situaciones de emergencia y desastres naturales. Por eso estamos apostando al uso de la tecnología para ser más eficientes en la gestión de riesgos y en la protección de la población”, afirmó Salas.</p><br />
            <p>La nueva plataforma tecnológica de la Defensa Civil permitirá mejorar la coordinación entre las diferentes instituciones que participan en la gestión de riesgos, así como la comunicación con la población en caso de emergencia.</p><br />
            <p>“La tecnología nos permite tener información en tiempo real sobre la situación de riesgo en el país y nos permite coordinar de manera más eficiente la respuesta ante cualquier fenómeno natural que pueda afectar al país”, afirmó Salas.</p><br />
            <p>La presentación de la nueva plataforma tecnológica de la Defensa Civil contó con la presencia de representantes de diferentes instituciones que participan en la gestión de riesgos, así como de la sociedad civil y de la comunidad internacional.</p><br />
            <p>En el acto, se destacó la importancia de la tecnología para mejorar la respuesta ante situaciones de emergencia y desastres naturales, así como la importancia de la coordinación entre las diferentes instituciones que participan en la gestión de riesgos.</p>
          </>
        ),
        image: 'src/assets/img/Acccion2.jpg'
      },
      {
        id: 3,
        title: 'Defensa Civil y OIM realizan taller de primeros auxilios para periodistas y comunicadores',
        description: (
            
          <>
            <p>Santo Domingo.- La Comisión Nacional de Emergencias y la Organización Internacional para las Migraciones (OIM) realizaron un taller de primeros auxilios para periodistas y comunicadores, con el objetivo de fortalecer sus capacidades para responder ante situaciones de emergencia y desastres naturales.</p><br />
            <p>El taller, que se llevó a cabo en las instalaciones de la Defensa Civil, contó con la participación de periodistas y comunicadores de diferentes medios de comunicación, quienes recibieron capacitación teórica y práctica sobre primeros auxilios, reanimación cardiopulmonar (RCP) y manejo de heridas y quemaduras.</p><br />
            <p>“Los periodistas y comunicadores juegan un papel fundamental en la difusión de información en situaciones de emergencia y desastres naturales. Por eso es importante que estén preparados para responder ante cualquier eventualidad”, afirmó el presidente de la Comisión Nacional de Emergencias y director ejecutivo de la Defensa Civil, Juan Salas.</p><br />
            <p>El taller de primeros auxilios para periodistas y comunicadores contó con la participación de instructores de la Defensa Civil y de la OIM, quienes compartieron sus conocimientos y experiencias en la gestión de riesgos y en la protección de la población en caso de desastres naturales.</p><br />
            <p>En el taller se destacó la importancia de la capacitación en primeros auxilios para periodistas y comunicadores, así como la importancia de la coordinación entre los diferentes actores que participan en la gestión de riesgos.</p><br />
            <p>Al finalizar el taller, los participantes recibieron un certificado de asistencia y se comprometieron a poner en práctica los conocimientos adquiridos en su trabajo diario.</p>
          </>
    
        ),
        image: 'src/assets/img/Acccion3.jpg'
      },
      {
        id: 4,
        title: 'Director Defensa Civil RD Y senador de NY identifican acciones para apoyar comunidad dominicana en El Bronx',
        description: (
          <>
            <p>Santo Domingo.- El presidente de la Comisión Nacional de Emergencias y director ejecutivo de la Defensa Civil, Juan Salas, recibió la honorable visita del senador de New York en el distrito 32, Luis Sepúlveda, con quien intercambió impresiones sobre la gestión de riesgo de desastres y la labor de protección civil en ambos países.</p><br />
            <p>Al compartir sus planes y proyectos para beneficiar a la comunidad de dominicanos que residen en El Bronx, el Senador Sepúlveda indicó que este tema es de suma importancia para su gestión.</p><br />
            <p>En ese sentido, Salas puso a disposición los conocimientos, recursos humanos y tecnológicos de la Defensa Civil para apoyar a esa Oficina de Senado Estatal en su rol de garantizar la vida y gestionar ayudas para esa comunidad, en situaciones de emergencias o desastres. Asimismo, la experiencia del voluntariado, como activo importante en las labores de respuesta y recuperación.</p><br />
            <p>El encuentro incluyó un recorrido por las instalaciones, donde el legislador pudo conocer el Sistema Integrado Nacional de Información y la Escuela Nacional de Gestión de Riesgos de la Defensa Civil, ambas instancias con capacidad de replicar su trabajo a nivel internacional.</p><br />
            <p>En su visita estuvo acompañado por el director de Comunicaciones en el Senado de New York, Rusking Pimentel y por el comunicador Graymer Méndez, quienes valoraron el fortalecimiento institucional mostrado y felicitaron la gestión del director Juan Salas y su equipo.</p>
          </>
        ),
        image: 'src/assets/img/Acccion4.jpg'
      },
      {
        id: 5,
        title: 'Tormenta Fred: Defensa Civil realiza labores preventivas y de respuesta tras paso del fenómeno',
        description: (
          <>
            <p>Santo Domingo.- La Comisión Nacional de Emergencias y la Defensa Civil realizaron labores preventivas y de respuesta tras el paso de la tormenta Fred por el territorio nacional, que dejó a su paso fuertes lluvias, inundaciones y deslizamientos de tierra en varias provincias del país.</p><br />
            <p>El presidente de la Comisión Nacional de Emergencias y director ejecutivo de la Defensa Civil, Juan Salas, informó que se activaron los protocolos de emergencia y se desplegaron equipos de respuesta en las zonas afectadas para brindar asistencia a la población y evaluar los daños causados por el fenómeno.</p><br />
            <p>“La tormenta Fred dejó a su paso fuertes lluvias, inundaciones y deslizamientos de tierra en varias provincias del país. Por eso activamos los protocolos de emergencia y desplegamos equipos de respuesta para brindar asistencia a la población y evaluar los daños causados por el fenómeno”, afirmó Salas.</p><br />
            <p>Las labores preventivas y de respuesta de la Defensa Civil tras el paso de la tormenta Fred incluyeron la evacuación de familias en zonas de riesgo, la distribución de alimentos y artículos de primera necesidad, la limpieza de vías y la evaluación de daños en viviendas y carreteras.</p><br />
            <p>“Estamos trabajando de manera coordinada con las autoridades locales y con las instituciones que participan en la gestión de riesgos para brindar asistencia a la población afectada por la tormenta Fred y para evaluar los daños causados por el fenómeno”, afirmó Salas.</p><br />
            <p>La Defensa Civil exhortó a la población a mantenerse informada sobre la evolución de la tormenta Fred y a seguir las recomendaciones de las autoridades para proteger su vida y su patrimonio en caso de emergencia.</p>
          </>
        
        ),
        image: 'src/assets/img/Acccion5.jpg'
      },
      {
        id: 6,
        title: 'Defensa Civil realiza labores preventivas y de respuesta tras paso de fenómeno Elsa',
        description: (
    
          <>
            <p>Santo Domingo.- La Comisión Nacional de Emergencias y la Defensa Civil realizaron labores preventivas y de respuesta tras el paso del fenómeno Elsa por el territorio nacional, que dejó a su paso fuertes lluvias, inundaciones y deslizamientos de tierra en varias provincias del país.</p><br />
            <p>El presidente de la Comisión Nacional de Emergencias y director ejecutivo de la Defensa Civil, Juan Salas, informó que se activaron los protocolos de emergencia y se desplegaron equipos de respuesta en las zonas afectadas para brindar asistencia a la población y evaluar los daños causados por el fenómeno.</p><br />
            <p>“El paso del fenómeno Elsa por el territorio nacional dejó a su paso fuertes lluvias, inundaciones y deslizamientos de tierra en varias provincias del país. Por eso activamos los protocolos de emergencia y desplegamos equipos de respuesta para brindar asistencia a la población y evaluar los daños causados por el fenómeno”, afirmó Salas.</p><br />
            <p>Las labores preventivas y de respuesta de la Defensa Civil tras el paso del fenómeno Elsa incluyeron la evacuación de familias en zonas de riesgo, la distribución de alimentos y artículos de primera necesidad, la limpieza de vías y la evaluación de daños en viviendas y carreteras.</p><br />
            <p>“Estamos trabajando de manera coordinada con las autoridades locales y con las instituciones que participan en la gestión de riesgos para brindar asistencia a la población afectada por el paso del fenómeno Elsa y para evaluar los daños causados por el fenómeno”, afirmó Salas.</p><br />
            <p>La Defensa Civil exhortó a la población a mantenerse informada sobre la evolución del fenómeno Elsa y a seguir las recomendaciones de las autoridades para proteger su vida y su patrimonio en caso de emergencia.</p>
          </>
        
        ),
        image: 'src/assets/img/Acccion6.jpg'
      },
      {
        id: 7,
        title: 'Defensa Civil realiza labores preventivas y de respuesta tras paso del fenómeno',
        description: (
    
          <>
            <p>Santo Domingo.- La Comisión Nacional de Emergencias y la Defensa Civil realizaron labores preventivas y de respuesta tras el paso del fenómeno por el territorio nacional, que dejó a su paso fuertes lluvias, inundaciones y deslizamientos de tierra en varias provincias del país.</p><br />
            <p>El presidente de la Comisión Nacional de Emergencias y director ejecutivo de la Defensa Civil, Juan Salas, informó que se activaron los protocolos de emergencia y se desplegaron equipos de respuesta en las zonas afectadas para brindar asistencia a la población y evaluar los daños causados por el fenómeno.</p><br />
            <p>“El paso del fenómeno por el territorio nacional dejó a su paso fuertes lluvias, inundaciones y deslizamientos de tierra en varias provincias del país. Por eso activamos los protocolos de emergencia y desplegamos equipos de respuesta para brindar asistencia a la población y evaluar los daños causados por el fenómeno”, afirmó Salas.</p><br />
            <p>Las labores preventivas y de respuesta de la Defensa Civil tras el paso del fenómeno incluyeron la evacuación de familias en zonas de riesgo, la distribución de alimentos y artículos de primera necesidad, la limpieza de vías y la evaluación de daños en viviendas y carreteras.</p><br />
            <p>“Estamos trabajando de manera coordinada con las autoridades locales y con las instituciones que participan en la gestión de riesgos para brindar asistencia a la población afectada por el paso del fenómeno y para evaluar los daños causados por el fenómeno”, afirmó Salas.</p><br />
            <p>La Defensa Civil exhortó a la población a mantenerse informada sobre la evolución del fenómeno y a seguir las recomendaciones de las autoridades para proteger su vida y su patrimonio en caso de emergencia.</p>
          </>
        
        
        ),
        image: 'src/assets/img/Acccion7.jpg'
      },
      {
        id: 8,
        title: 'Ministerio de Economía y Defensa Civil coordinan acciones de gestión del riesgo de desastre y de planificación',
        description: (
    
          <>
            <p>Santo Domingo.- El Ministerio de Economía, Planificación y Desarrollo (MEPyD) y la Comisión Nacional de Emergencias (CNE) coordinaron acciones de gestión del riesgo de desastre y de planificación para fortalecer la resiliencia de la población y reducir la vulnerabilidad ante fenómenos naturales.</p><br />
            <p>El viceministro de Planificación del MEPyD, Juan Monegro, y el presidente de la CNE, Juan Salas, encabezaron una reunión de trabajo en la que se abordaron temas relacionados con la gestión del riesgo de desastre, la planificación territorial y la coordinación interinstitucional para fortalecer la resiliencia de la población.</p><br />
            <p>“La gestión del riesgo de desastre es un tema prioritario para el Gobierno y por eso estamos coordinando acciones con la Comisión Nacional de Emergencias para fortalecer la resiliencia de la población y reducir la vulnerabilidad ante fenómenos naturales”, afirmó Monegro.</p><br />
            <p>En la reunión se abordaron temas relacionados con la planificación territorial, la coordinación interinstitucional y la participación de la sociedad civil en la gestión del riesgo de desastre, con el objetivo de fortalecer la resiliencia de la población y reducir la vulnerabilidad ante fenómenos naturales.</p><br />
            <p>“La planificación territorial y la coordinación interinstitucional son fundamentales para fortalecer la resiliencia de la población y reducir la vulnerabilidad ante fenómenos naturales. Por eso estamos coordinando acciones con el Ministerio de Economía, Planificación y Desarrollo para fortalecer la gestión del riesgo de desastre en el país”, afirmó Salas.</p><br />
            <p>El Ministerio de Economía, Planificación y Desarrollo y la Comisión Nacional de Emergencias acordaron continuar trabajando de manera coordinada para fortalecer la resiliencia de la población y reducir la vulnerabilidad ante fenómenos naturales en el país.</p>
          </>
        ),
        image: 'src/assets/img/Acccion8.jpg'
      }
];

const Inicio = () => {
  return (
    <IonContent>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect="coverflow" 
        grabCursor={true} 
        centeredSlides={true} 
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src={slide.image} alt={slide.title} className="w-full mb-4 rounded-lg" />
              <h2 className="text-2xl font-bold mb-2 text-black">{slide.title}</h2>
              <p className="text-gray-600">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </IonContent>
  );
}

export default Inicio;
