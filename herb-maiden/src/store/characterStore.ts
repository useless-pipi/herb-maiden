import { create } from 'zustand';
import { rawChars, type CharacterBase } from '../data/chars';
import { getRandomIntegerInclusive } from '../common/Util';

// Simple character type with only 3 fields
export interface Character extends CharacterBase {
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

export const fallBackCharacter: Character = {
  id: 'dummy',
  born_region_id: "001",
  name: 'Officer',
  name_lang2: '士官',
  rarity: 1,
  wisdom: 3,
  leadership: 3,
  speech: 3,
  hp: 5,
  reputation: 0,
  imgSrc: `chars/90${getRandomIntegerInclusive(1,6)}.png`,
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

