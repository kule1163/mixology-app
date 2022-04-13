import {v4 as uuidv4} from "uuid"

interface FaqProps {
    id: string;
    question: string;
    answer: string;
    s: boolean;
}

export const faqItems:FaqProps[] = [
    {s: false,id: uuidv4(), question:"How many days in advance should I book?", answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur."},
    {s: false,id: uuidv4(), question:"How many people can you host?", answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur."},
    {s: false,id: uuidv4(), question:"Do you host Bussiness Events?", answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur."},
    {s: false,id: uuidv4(), question:"How many days in advance should I book?", answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur."},
    {s: false,id: uuidv4(), question:"Are people under 21 allowed in events?", answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur."},

] 