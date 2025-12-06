import { useState, useEffect } from 'react';

export const useContent = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/content.json');
        if (!response.ok) {
          throw new Error('Error al cargar el contenido');
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err.message);
        console.error('Error cargando content.json:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading, error };
};
