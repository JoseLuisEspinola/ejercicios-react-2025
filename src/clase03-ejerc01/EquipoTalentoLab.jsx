export default function EquipoTechLab() {
  const equipo = [
    { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://cdn.gamma.app/5k42ay5jcl12uau/4649420bacd14bec857a33a7fd4b1626/original/AD_4nXcmZlNl-8f_Ed_WrykuwqX-Jw3tcM2KJPCJ9wrlOfkhNGoJYQFovGcB385ZhbHhSPZCbikenVcRwEtildHZBR6qQTYoHNhLhIk43cH0_hdL6L0FTTr4C-AdrSjPZejc8TomznDg_zjynMmptDn_8I8.png' },
    { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://cdn.gamma.app/5k42ay5jcl12uau/5f0e00474ac445e3922b34cb789a8bfc/original/AD_4nXfO9ScauuRbuc4iWZJOW_K06JszSbUIwSNUWJNzqdLU2L-ZshquGV1G3Nixsnp93z9AJpKwIVj2j0_O2HonzqNdA0fKLGoWmd4dldCkeroRq3VXcxMkwimjQMTp8lrwRlmJw-5z0o7czbpOQX-RSw.png' },
    { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://cdn.gamma.app/5k42ay5jcl12uau/620881fed9ee4ee796a72e44ddc7022f/original/AD_4nXcxPUs3VeWEwdL_9rFJdQzr5jUe2MyfmMFZUPKwJvIrzLakmXoUX0KnsH_MPScgvbHu1SDJ2YkJBmdpddYezK-VA4I-YgqJRYaOosT3U0IIxjYYiM0dydGZKkFuetSJlhDvxjrb8P_HI9e-lxe81A.png' },
    { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://cdn.gamma.app/5k42ay5jcl12uau/068a5845a83a453993d4af1cff7d212f/original/AD_4nXcy9GmhV4oifkIJPmv9PHIy82Mh7jP4zRWLLACTpx3zXifznI7MWf4OjR1urtXf9TyoBaKRDg4WlqvZNtqbs2Z_pCCyZvusOU1cIsgzR7Q-srex1idGy48LF-0WE-k-RAW9dLc3fYoriiCvpH8CxxI.png' },
  ];

const estilos = {
  seccion: {
    padding: '40px 20px',
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: '2rem',
    marginBottom: '40px',
    textAlign: 'center',
    color: '#222',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '40px',
    justifyItems: 'center',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    flexWrap: 'wrap',
    gap: '40px',

  },
  tarjeta: {
    width: '230px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '25px',
    textAlign: 'center',
    boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
  },
  imagen: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '3px solid #ddd',
  },
  nombre: {
    fontWeight: '600',
    fontSize: '1.2rem',
    marginBottom: '8px',
    color: '#333',
  },
  rol: {
    fontSize: '1rem',
    color: '#777',
  },
};


  return (
    <section style={estilos.seccion}>
      <h2 style={estilos.titulo}>Equipo Tech Lab:</h2>
      <div style={estilos.flex}>
        {equipo.map((persona) => (
          <div key={persona.nombre} style={estilos.tarjeta}>
            <img src={persona.imagen} alt={persona.nombre} style={estilos.imagen} />
            <p style={estilos.nombre}>{persona.nombre}</p>
            <p style={estilos.rol}>{persona.rol}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
