import { useEffect, useState } from "react";

export const debounce = (value = "", time = 0, minLength = 0) => {
  const [debounced, setDebounced] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (value?.length < minLength) {
        setDebounced("");
        return;
      }
      setDebounced(value);
    }, time);

    return () => clearTimeout(timer);
  }, [value]);

  return debounced;
};
