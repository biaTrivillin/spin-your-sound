import { atom } from "recoil";

export const cardList = atom<Record[]>({
    key: "cardList",
    default: []
});

type Record = {
    id: number;
    title: string;
    artist: string,
    release_year: number,
    price_usd: number,
    genre: string,
    condition: string,
    rating: number,
    image: string
}