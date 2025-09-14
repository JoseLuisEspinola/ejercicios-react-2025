import { useState } from 'react';

function GaleriaIntereses({ temas }) {
  const [activos, setActivos] = useState([]);

  const toggleTema = (tema) => {
    setActivos((prev) =>
      prev.includes(tema)
        ? prev.filter((t) => t !== tema)
        : [...prev, tema]
    );
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
      {temas.map((tema, index) => (
        <button
          key={index}
          onClick={() => toggleTema(tema)}
          style={{
            backgroundColor: activos.includes(tema) ? '#17a2b8' : '#ccc',
            color: 'white',
            padding: '8px 12px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {tema}
        </button>
      ))}
    </div>
  );
}

export default GaleriaIntereses;
