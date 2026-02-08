import { create } from 'zustand';
import { getCityImgSrc, rawCities, type CityBase } from '../data/cities';

// Simple city type with only 3 fields
export interface City extends CityBase {
  imgSrc: string;
  isSelected: boolean;
}

interface CityStore {
  // State
  cities: City[];
  selectedId: string | null;
  
  // Actions
  addCity: (city: Omit<City, 'id'>) => void;
  updateCity: (id: string, updates: Partial<City>) => void;
  removeCity: (id: string) => void;
  updatehp: (id: string, newhp: number) => void;
  selectCity: (id: string | null) => void;
  
  // Getters (computed values)
  getCity: (id: string) => City | undefined;
  getSelected: () => City | undefined;
}

export const useCityStore = create<CityStore>((set, get) => ({
  // Initial state
  cities: rawCities.map(rawCity => ({
    ...rawCity,
    imgSrc: getCityImgSrc(rawCity),
    isSelected: false,
  })
  )
  ,
  selectedId: null,
  
  // Actions
  addCity: (cityData) => {
    const newChar: City = {
      ...cityData,
      id: Date.now().toString(),
    };
    set((state) => ({
      cities: [...state.cities, newChar],
    }));
  },
  
  updateCity: (id, updates) => {
    set((state) => ({
      cities: state.cities.map((city) =>
        city.id === id ? { ...city, ...updates } : city
      ),
    }));
  },
  
  removeCity: (id) => {
    set((state) => ({
      cities: state.cities.filter((city) => city.id !== id),
    }));
  },
  
  updatehp: (id, newhp) => {
    set((state) => ({
      cities: state.cities.map((city) =>
        city.id === id ? { ...city, hp: Math.max(0, newhp) } : city
      ),
    }));
  },
  
  selectCity: (id) => {
    set({ selectedId: id });
    set((state) => ({
      cities: state.cities.map((city) =>
        city.id === id ? { ...city, isSelected: true } : {...city, isSelected: false}
      ),
    }));
  },
  
  // Getters
  getCity: (id) => {
    return get().cities.find((city) => city.id === id);
  },
  
  getSelected: () => {
    const { selectedId, cities } = get();
    return cities.find((city) => city.id === selectedId);
  },
}));

