import { create } from 'zustand';
import { rawChars, type CharacterBase } from '../data/chars';

// Simple character type with only 3 fields
interface Character extends CharacterBase {
  imgSrc: string;
}

interface CharacterStore {
  // State
  characters: Character[];
  selectedId: string | null;
  
  // Actions
  addCharacter: (character: Omit<Character, 'id'>) => void;
  updateCharacter: (id: string, updates: Partial<Character>) => void;
  removeCharacter: (id: string) => void;
  updatehp: (id: string, newhp: number) => void;
  selectCharacter: (id: string | null) => void;
  
  // Getters (computed values)
  getCharacter: (id: string) => Character | undefined;
  getSelected: () => Character | undefined;
  getAlive: () => Character[];
  getLowhp: () => Character[]; // hp < 50
}

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  // Initial state
  characters: rawChars.map(rawChar => ({
    ...rawChar,
    imgSrc: `chars/${rawChar.id}i.png`,
  })
  )
  ,
  selectedId: null,
  
  // Actions
  addCharacter: (charData) => {
    const newChar: Character = {
      ...charData,
      id: Date.now().toString(),
    };
    set((state) => ({
      characters: [...state.characters, newChar],
    }));
  },
  
  updateCharacter: (id, updates) => {
    set((state) => ({
      characters: state.characters.map((char) =>
        char.id === id ? { ...char, ...updates } : char
      ),
    }));
  },
  
  removeCharacter: (id) => {
    set((state) => ({
      characters: state.characters.filter((char) => char.id !== id),
    }));
  },
  
  updatehp: (id, newhp) => {
    set((state) => ({
      characters: state.characters.map((char) =>
        char.id === id ? { ...char, hp: Math.max(0, newhp) } : char
      ),
    }));
  },
  
  selectCharacter: (id) => {
    set({ selectedId: id });
  },
  
  // Getters
  getCharacter: (id) => {
    return get().characters.find((char) => char.id === id);
  },
  
  getSelected: () => {
    const { selectedId, characters } = get();
    return characters.find((char) => char.id === selectedId);
  },
  
  getAlive: () => {
    return get().characters.filter((char) => char.hp > 0);
  },
  
  getLowhp: () => {
    return get().characters.filter((char) => char.hp < 50);
  },
}));

