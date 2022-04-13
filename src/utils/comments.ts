import {v4 as uuidv4} from "uuid"

interface CommentProps {
    id: string;
    text: string;
    name: string;
    role: string;
}

export const comments:CommentProps[] = [
    {id: uuidv4(), text: "Amazing cocktails with fruit margarita from a fancy bar, it has its own place in the cocktail kingdom", name: "John Doe", role: "Drinks Reviwer"},
    {id: uuidv4(), text: "When u taste their cocktail that's when u know u have just a cocktail crafted by a master mixologist", name: "Cokctail Magazine", role: "Reviwer"},
    {id: uuidv4(), text: "These are solidly high-end cocktail bar worthy drinks that happen to be affordable", name: "Mary Smith", role: "Cacktail Expert"},
] 