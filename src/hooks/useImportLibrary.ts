import { useEffect, useState } from 'react';

import { LibraryMap, LibraryName } from '../types';

const libCache = new Map();

export const useImportLibrary = <
  Name extends LibraryName,
  Lib = LibraryMap[Name],
>(
  libName: Name,
) => {
  const [lib, setLib] = useState<Lib | null>(
    () => libCache.get(libName) || null,
  );

  useEffect(() => {
    if (libCache.get(libName)) {
      return;
    }

    const load = async () => {
      const data = (await google.maps.importLibrary(libName)) as Lib;

      libCache.set(libName, data);

      setLib(data);
    };
    load();
  }, []);

  return lib;
};
