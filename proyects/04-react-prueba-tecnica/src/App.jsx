import './App.css';
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

export function App() {
  const { fact, refreshRamdomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshRamdomFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first trhee ${fact}`}
        />
      )}
    </main>
  );
}
