import { useState } from 'react';

type UseNavbar = {
  models: {
    expandMenu: boolean;
  };
  operations: {
    toggleExpand: () => void;
  };
};

export function useNavbar(): UseNavbar {
  const [expandMenu, setExpandMenu] = useState(false);
  const toggleExpand = () => {
    setExpandMenu((expand) => !expand);
  };

  return {
    models: { expandMenu },
    operations: { toggleExpand },
  };
}
