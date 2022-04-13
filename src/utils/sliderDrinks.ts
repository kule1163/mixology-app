import Cocktail from "../assets/cocktail1.png"
import CocktailS from "../assets/cocktail2.png"
import CocktailT from "../assets/cocktail3.png"
import CocktailF from "../assets/cocktail4.png"
import {v4 as uuidv4} from "uuid"

interface CocktailProps {
    id: string;
    image: string
}

export const cocktails:CocktailProps[] = [
    {id: uuidv4(), image:Cocktail},
    {id: uuidv4(), image:CocktailS},
    {id: uuidv4(), image:CocktailT},
    {id: uuidv4(), image:CocktailF},
]