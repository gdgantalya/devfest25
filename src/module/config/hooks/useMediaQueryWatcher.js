import { useEffect, useState } from "react";

const useMediaQueryWatcher = (mediaQuery) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQueryWatcher = window.matchMedia(mediaQuery);
    setIsMatch(mediaQueryWatcher.matches);

    const updateMediaQueryWatcher = (e) => {
      setIsMatch(e.matches);
    };

    mediaQueryWatcher.addEventListener("change", updateMediaQueryWatcher);

    return () => {
      mediaQueryWatcher.removeEventListener("change", updateMediaQueryWatcher);
    };
  }, [mediaQuery]);

  return isMatch;
};

export default useMediaQueryWatcher;
