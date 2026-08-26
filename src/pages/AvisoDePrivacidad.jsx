import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const H2 = { fontSize: 18, fontWeight: 700, marginTop: 32, marginBottom: 10, color: 'var(--txt)' };
const P = { fontSize: 14.5, lineHeight: 1.75, color: 'var(--txt2)', marginBottom: 12 };
const STRONG = { color: 'var(--txt)', fontWeight: 700 };

export default function AvisoDePrivacidad() {
  const navigate = useNavigate();

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <SEO
        title="Aviso de Privacidad"
        description="Aviso de Privacidad de FRIA (Freight Rate Intelligence Agent)."
        path="/aviso-de-privacidad"
        noindex
      />
      <div style={{ maxWidth: 780, margin: '0 auto', padding: 'var(--page-pad)' }}>
        <div onClick={() => navigate(-1)} style={{ fontSize: 13, color: 'var(--txt3)', cursor: 'pointer', marginBottom: 18 }}>
          ← Volver
        </div>

        <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-.02em' }}>Aviso de Privacidad Integral</div>
        <div style={{ fontSize: 13.5, color: 'var(--txt3)', marginTop: 6 }}>FRIA · Adolfo Miguel Romero Pérez</div>

        <p style={{ ...P, marginTop: 24 }}>
          En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares
          (LFPDPPP) y su Reglamento, se pone a disposición el presente Aviso de Privacidad para informarle sobre
          la gestión, tratamiento y resguardo de sus datos personales.
        </p>

        <div style={H2}>1. Identidad y Domicilio del Responsable</div>
        <p style={P}>
          <strong style={STRONG}>Responsable:</strong> Adolfo Miguel Romero Pérez (en lo sucesivo, "EL RESPONSABLE"),
          quien opera bajo la marca comercial FRIA, con Registro Federal de Contribuyentes (RFC) ROPA9308054AA, y
          con domicilio fiscal ubicado en Av. Insurgentes Sur 546, Roma Sur, Cuauhtémoc, C.P. 06760, Ciudad de
          México, México, es el responsable del tratamiento, uso, almacenamiento y protección de sus datos personales.
        </p>

        <div style={H2}>2. Datos Personales Recabados</div>
        <p style={P}>
          Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, recopilamos los
          siguientes datos personales a través de nuestros formularios web, landing pages, herramientas de
          prospección comercial (como HubSpot CRM, Apollo.io, entre otras) o mediante comunicación directa por
          correo electrónico o teléfono:
        </p>
        <p style={P}><strong style={STRONG}>Datos de identificación:</strong> Nombre completo, puesto o cargo dentro de la empresa.</p>
        <p style={P}><strong style={STRONG}>Datos de contacto:</strong> Correo electrónico empresarial o personal, número telefónico fijo y/o móvil, perfil profesional (LinkedIn).</p>
        <p style={P}><strong style={STRONG}>Datos laborales/corporativos:</strong> Nombre de la empresa o negocio que representa, giro comercial, ubicación y requerimientos del servicio/producto.</p>
        <p style={P}>
          Hacemos de su conocimiento que EL RESPONSABLE NO recaba ni trata datos personales sensibles (tales como
          estado de salud, creencias religiosas, origen étnico o datos bancarios sensibles) a través de los
          formularios de prospección en la landing page.
        </p>

        <div style={H2}>3. Finalidades del Tratamiento de Datos</div>
        <p style={P}>Sus datos personales serán utilizados para las siguientes finalidades:</p>
        <p style={P}><strong style={STRONG}>A. Finalidades Primarias</strong> (necesarias para la relación comercial):</p>
        <ul style={{ ...P, paddingLeft: 20, marginTop: -6 }}>
          <li>Identificarlo y contactarlo como prospecto o cliente potencial de FRIA.</li>
          <li>Dar atención y seguimiento a las solicitudes de información, diagnósticos o cotizaciones de productos/servicios.</li>
          <li>Gestionar el ciclo de venta, prospección B2B y evaluación de requerimientos comerciales.</li>
          <li>Procesar la relación contractual y/o comercial en caso de concretar la venta.</li>
          <li>Envío de propuestas comerciales, contratos y seguimiento de proyectos.</li>
        </ul>
        <p style={P}><strong style={STRONG}>B. Finalidades Secundarias</strong> (mercadotecnia y prospección):</p>
        <ul style={{ ...P, paddingLeft: 20, marginTop: -6 }}>
          <li>Envío de boletines informativos, promociones, boletines técnicos o invitaciones a eventos relacionados con FRIA.</li>
          <li>Encuestas de calidad, satisfacción y prospección de mercado.</li>
        </ul>
        <p style={P}>
          En caso de que no desee que sus datos personales sean tratados para las finalidades secundarias, usted
          puede manifestar su negativa enviando un correo electrónico a{' '}
          <a href="mailto:adolfo.romero@friaai.com" style={{ color: 'var(--accent)' }}>adolfo.romero@friaai.com</a>.
        </p>

        <div style={H2}>4. Transferencia de Datos Personales</div>
        <p style={P}>
          EL RESPONSABLE no transferirá sus datos personales a terceros sin su consentimiento previo, salvo las
          excepciones previstas en el Artículo 37 de la LFPDPPP o requerimientos de autoridades competentes.
        </p>
        <p style={P}>
          No obstante, para garantizar el correcto funcionamiento operativo y el seguimiento de sus solicitudes,
          sus datos pueden ser almacenados o procesados en infraestructura de proveedores de servicios
          tecnológicos (como Google Workspace, HubSpot CRM o proveedores de hosting), quienes operan bajo
          estrictos estándares de confidencialidad y privacidad.
        </p>

        <div style={H2}>5. Medios para Ejercer los Derechos ARCO y Revocación del Consentimiento</div>
        <p style={P}>
          Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las
          condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su
          información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que
          la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo
          utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines
          específicos (Oposición). Estos son conocidos como los Derechos ARCO.
        </p>
        <p style={P}>
          <strong style={STRONG}>Procedimiento:</strong> Para el ejercicio de cualquiera de los Derechos ARCO o
          para revocar su consentimiento, deberá presentar la solicitud correspondiente enviando un correo a:
        </p>
        <p style={P}>
          <strong style={STRONG}>Atención de Derechos ARCO - FRIA</strong><br />
          Correo electrónico: <a href="mailto:adolfo.romero@friaai.com" style={{ color: 'var(--accent)' }}>adolfo.romero@friaai.com</a><br />
          Asunto sugerido: Solicitud Derechos ARCO - [Su Nombre / Nombre de Empresa]<br />
          Requisitos: Adjuntar identificación oficial vigente y descripción clara de los datos sobre los que busca ejercer su derecho.
        </p>

        <div style={H2}>6. Uso de Cookies y Tecnologías de Rastreo</div>
        <p style={P}>
          Le informamos que en nuestro sitio web www.friaai.com utilizamos cookies, web beacons y otras
          tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de internet, con
          la finalidad de brindarle un mejor servicio y experiencia al navegar en nuestra página, así como medir
          el rendimiento de nuestras campañas promocionales.
        </p>
        <p style={P}>
          Los datos que obtenemos de estas tecnologías de rastreo incluyen: dirección IP, tipo de navegador,
          sistema operativo, páginas web visitadas y tiempo de navegación. Usted puede deshabilitar estas
          tecnologías en cualquier momento desde la configuración de su navegador web.
        </p>

        <div style={H2}>7. Cambios al Aviso de Privacidad</div>
        <p style={P}>
          El presente Aviso de Privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de
          nuevos requerimientos legales, de nuestras propias necesidades por los productos o servicios que
          ofrecemos, de nuestras prácticas de privacidad o de cambios en nuestro modelo de negocio.
        </p>
        <p style={P}>
          Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente Aviso de
          Privacidad a través de su publicación directa en nuestro sitio web en la dirección
          www.friaai.com/privacidad.
        </p>

        <div style={{ fontSize: 12.5, color: 'var(--txt4)', marginTop: 28, paddingTop: 18, borderTop: '1px solid var(--border)' }}>
          Última actualización: Agosto de 2026
        </div>
      </div>
    </div>
  );
}
