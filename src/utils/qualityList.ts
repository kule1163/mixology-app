import {v4 as uuidv4} from "uuid"
import Quality from "../assets/quality1.png"
import QualityS from "../assets/quality2.png"
import QualityT from "../assets/quality3.png"

interface QualityProps {
    id: string;
    image: string;
}

export const quaityList:QualityProps[] = [
    {id: uuidv4(), image: Quality},
    {id: uuidv4(), image: QualityS},
    {id: uuidv4(), image: QualityT},
]