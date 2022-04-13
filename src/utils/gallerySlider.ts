import {v4 as uuidv4} from "uuid"
import Cocktail from "../assets/menucocktail.jpg"
import Gin from "../assets/glassofgin.jpg"
import Barwomen from "../assets/barwomen.jpg"
import Barmen from "../assets/barmen.jpg"

interface SliderItem {
    id: string;
    image: string;
}

export const gallerySlider:SliderItem[] = [
    {id: uuidv4(), image: Cocktail},
    {id: uuidv4(), image: Gin},
    {id: uuidv4(), image: Barwomen},
    {id: uuidv4(), image: Barmen},
    
]