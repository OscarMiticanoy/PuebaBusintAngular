import { Dates } from "./Dates.interface";
import { Result } from "./Result.interface ";

export interface Peliculas{
    dates : Dates;
    page : number;
    results : Result[];
    total_pages : number;
    total_results : number;
}