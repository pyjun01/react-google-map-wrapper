import { useEffect, useState } from 'react';

import { LibraryMap, LibraryName } from '../types';

const libCache = new Map();

export const importLibrary = async <Name extends LibraryName, Lib = LibraryMap[Name]>(libName: Name): Promise<Lib> => {
  const data = (await google.maps.importLibrary(libName)) as Lib;

  libCache.set(libName, data);

  return data;
};

export const useImportLibrary = <Name extends LibraryName, Lib = LibraryMap[Name]>(libName: Name) => {
  const [lib, setLib] = useState<Lib | null>(() => libCache.get(libName) || null);

  useEffect(() => {
    if (libCache.get(libName)) {
      return;
    }

    const load = async () => {
      setLib(await importLibrary(libName));
    };
    load();
  }, []);

  return lib;
};
