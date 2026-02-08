import { nanoid } from "nanoid";

export class Regiment{
    id: string = nanoid();
    born_region_id: string = "000";
    city_id: string = "000";

    constructor(born_region_id: string, city_id: string) {
        this.born_region_id = born_region_id;
        this.city_id = city_id;
    }

    getRegimentNameChi () {
         
    }
}