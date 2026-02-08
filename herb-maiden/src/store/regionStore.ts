import { create } from 'zustand';
import { rawRegions, type RegionBase } from '../data/regions';

// Simple region type with only 3 fields
export interface Region extends RegionBase {
    
}

interface RegionStore {
  // State
  regions: Region[];
  selectedId: string | null;
  
  // Actions
  addRegion: (region: Omit<Region, 'id'>) => void;
  updateRegion: (id: string, updates: Partial<Region>) => void;
  removeRegion: (id: string) => void;
  updatehp: (id: string, newhp: number) => void;
  selectRegion: (id: string | null) => void;
  
  // Getters (computed values)
  getRegion: (id: string) => Region | undefined;
  getSelected: () => Region | undefined;
}

export const useRegionStore = create<RegionStore>((set, get) => ({
  // Initial state
  regions: rawRegions.map(rawRegion => ({
    ...rawRegion,
  })
  )
  ,
  selectedId: null,
  
  // Actions
  addRegion: (regionData) => {
    const newChar: Region = {
      ...regionData,
      id: Date.now().toString(),
    };
    set((state) => ({
      regions: [...state.regions, newChar],
    }));
  },
  
  updateRegion: (id, updates) => {
    set((state) => ({
      regions: state.regions.map((region) =>
        region.id === id ? { ...region, ...updates } : region
      ),
    }));
  },
  
  removeRegion: (id) => {
    set((state) => ({
      regions: state.regions.filter((region) => region.id !== id),
    }));
  },
  
  updatehp: (id, newhp) => {
    set((state) => ({
      regions: state.regions.map((region) =>
        region.id === id ? { ...region, hp: Math.max(0, newhp) } : region
      ),
    }));
  },
  
  selectRegion: (id) => {
    set({ selectedId: id });
  },
  
  // Getters
  getRegion: (id) => {
    return get().regions.find((region) => region.id === id);
  },
  
  getSelected: () => {
    const { selectedId, regions } = get();
    return regions.find((region) => region.id === selectedId);
  },
}));

