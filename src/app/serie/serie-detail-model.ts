import { Serie } from "./serie-model";

export class SerieDetailModel extends Serie {
    constructor(
        id: number,
        name: string,
        channel: string,
        seasons: number,
        description: string,
        webpage: string,
        poster: string
    ) {
        super(id, name, channel, seasons, description, webpage, poster);
    }
}