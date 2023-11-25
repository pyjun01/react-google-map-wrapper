import { useEffect, useState } from 'react';

import { LibraryMap, LibraryName } from '../types';

export const useImportLibrary = <
  Name extends LibraryName,
  Lib = LibraryMap[Name],
>(
  libName: Name,
) => {
  const [lib, setLib] = useState<Lib | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = (await google.maps.importLibrary(libName)) as Lib;

      setLib(data);
    };
    load();
  }, []);

  return lib;
};
