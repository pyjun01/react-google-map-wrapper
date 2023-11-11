import { create } from 'zustand';

export enum LoadingStatus {
  LOADING = 'LOADING',
  FAILURE = 'FAILURE',
  SUCCESS = 'SUCCESS',
}

export interface CoreStore {
  status: LoadingStatus;
  core: google.maps.CoreLibrary | null;
  setStatus: (status: LoadingStatus) => void;
  setCore: (status: google.maps.CoreLibrary) => void;
}

export const coreStore = create<CoreStore>((set, get) => ({
  status: LoadingStatus.LOADING,
  core: null,
  setStatus: (status) => set({ status }),
  setCore: (core) => set({ core }),
}));

export const useCoreStore = coreStore;
export const useApiLoadingStatus = () => useCoreStore((state) => state.status);
