import {v4 as uuidv4} from "uuid"
import About from "../assets/about.jpg"
import AboutUs from "../assets/aboutUs.jpg"
import Bar from "../assets/bar.jpg"
import Booknow from "../assets/booknow.jpg"
import Customer from "../assets/customer.jpg"

interface EventProps {
    id: string;
    image: string;
}

export const eventImages:EventProps[] = [
    {id: uuidv4(), image: About},
    {id: uuidv4(), image: AboutUs},
    {id: uuidv4(), image: Bar},
    {id: uuidv4(), image: Booknow},
    {id: uuidv4(), image: Customer},
] 