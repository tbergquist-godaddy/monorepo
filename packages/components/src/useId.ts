import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

/**
 * This is because we need to re create the id after SSR and hydrate.
 * There could be a mismatch in ids if we don't use the useEffect.
 */
export default function useId(): string {
  const [id, setId] = useState(v4());
  useEffect(() => {
    setId(v4());
  }, []);

  return id;
}
