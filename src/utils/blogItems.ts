import {v4 as uuidv4} from "uuid"
import Blog from "../assets/blog1.jpg"
import BlogS from "../assets/blog2.jpg"
import BlogT from "../assets/blog3.jpg"
import BlogF from "../assets/blog4.jpg"

interface BlogItem {
    id:string;
    image: string;
    label: string;
    header: string;
    text: string;
}

export const blogItems:BlogItem[] = [
    {id: uuidv4(), label: "DRINKS", image: BlogS, header: "Our Barman’s secret tips", text: "Orci eu lobortis elementum nibh tellus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Vulputate ut pharetra sit amet aliquam. Luctus venenatis lectus magna fringilla urna"},
    {id: uuidv4(), label: "DRINKS", image: BlogT, header: "The Best Award Winner Wines", text: "Orci eu lobortis elementum nibh tellus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Vulputate ut pharetra sit amet aliquam. Luctus venenatis lectus magna fringilla urna"},
    {id: uuidv4(), label: "RECIPE", image: BlogF, header: "The Classic Cosmopolitan with a twist", text: "Orci eu lobortis elementum nibh tellus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Vulputate ut pharetra sit amet aliquam. Luctus venenatis lectus magna fringilla urna"},

]