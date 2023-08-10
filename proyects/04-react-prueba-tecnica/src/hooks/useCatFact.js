import { useState, useEffect } from 'react';
import { getRamdomFact } from '../services/facts';

export function useCatFact() {
  const [fact, setFact] = useState();
  const refreshRamdomFact = () => {
    getRamdomFact().then(setFact);
  };

  // recuperar fact al cargar pagina
  useEffect(refreshRamdomFact, []);

  return { fact, refreshRamdomFact };
}
