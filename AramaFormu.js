import React, { useState } from 'react';

const AramaFormu = () => {
  const [kalkisHavaalani, setKalkisHavaalani] = useState('');
  const [varisHavaalani, setVarisHavaalani] = useState('');
  const [kalkisTarihi, setKalkisTarihi] = useState('');
  const [varisTarihi, setVarisTarihi] = useState('');
  const [tekYonlu, setTekYonlu] = useState(false);

  const handleArama = () => {
  };

  return (
    <div>
      <input
        type="text"
        value={kalkisHavaalani}
        onChange={(e) => setKalkisHavaalani(e.target.value)}
        placeholder="Kalkış Havaalanı"
      />
      <input
        type="text"
        value={varisHavaalani}
        onChange={(e) => setVarisHavaalani(e.target.value)}
        placeholder="Varış Havaalanı"
      />
      <input
        type="date"
        value={kalkisTarihi}
        onChange={(e) => setKalkisTarihi(e.target.value)}
      />
      {!tekYonlu && (
        <input
          type="date"
          value={varisTarihi}
          onChange={(e) => setVarisTarihi(e.target.value)}
        />
      )}
      <label>
        <input
          type="checkbox"
          checked={tekYonlu}
          onChange={() => setTekYonlu(!tekYonlu)}
        />
        Tek Yönlü Uçuş
      </label>
      <button onClick={handleArama}>Ara</button>
    </div>
  );
};

export default AramaFormu;
