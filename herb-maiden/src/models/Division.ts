import { fallBackCharacter, type Character } from "../store/characterStore";
import { nanoid } from 'nanoid';
import type { Regiment } from "./Regiment";

export class Division {
    id: string = nanoid();
    leader: Character = fallBackCharacter;
    regiments: Regiment[] = [];
}