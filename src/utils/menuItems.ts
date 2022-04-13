import { v4 as uuidv4 } from "uuid";
import Cocktail from "../assets/galery.jpg"
import Wine from "../assets/menuwine.jpg"
import Bite from "../assets/menubite.jpg"

interface MenuItem {
    id: string;
    title: string;
    path: string;
}

interface SnackMenu {
    id: string;
    text: string;
    img: string;
}

export interface SingleBarItem {
    id: string;
    title: string;
    desc: string;
    price: number;
}

export const menuItems:MenuItem[] = [
    {id: uuidv4(), title: "Home", path: "/"},
    {id: uuidv4(), title: "About", path: "/about"},
    {id: uuidv4(), title: "Menu", path: "/menu"},
    {id: uuidv4(), title: "Gallery", path: "/gallery"},
    {id: uuidv4(), title: "Events", path: "/event"},
    {id: uuidv4(), title: "Book a Table", path: "/reserve"},
    {id: uuidv4(), title: "Blog", path: "/blog"},
    {id: uuidv4(), title: "Blog Post", path: "/blog-post"},
]

export const snackMenu:SnackMenu[] = [
    {id: uuidv4(), text: "Cocktails", img: Cocktail},
    {id: uuidv4(), text: "Wine", img: Wine},
    {id: uuidv4(), text: "Bites", img: Bite},
]

export const cocktails:SingleBarItem[] = [
    {id: uuidv4(), desc:"A well-made version is a fresh mix of lime juice and tequila, with a hint of sweetener" , title: "Classic Margarita", price:20 },
    {id: uuidv4(), desc: "A cocktail made of gin, grapefruit, and orange juice making this a smooth drink", title: "Gin and Juice", price: 22},
    {id: uuidv4(), desc: "A tasty mixture of vodka, tomatolemon, tabasco sauce and worcestershire sauce.", title: "Bloody Mary", price: 22},
    {id: uuidv4(), desc:"Moscow Mule is one of the most refreshing things to sip on a hot summer day.", title: "Moscow Mule", price: 22},
    {id: uuidv4(), desc: "Combine Whiskey and just enough Soda to make it a crisp bitte", title: "Jack and Cola", price: 20},
    {id: uuidv4(), desc: "Combine Whiskey and just enough Soda to make it a crisp bitte", title: "Jack and Cola", price: 20},
    {id: uuidv4(), desc:"Moscow Mule is one of the most refreshing things to sip on a hot summer day.", title: "Moscow Mule", price: 22},
    {id: uuidv4(), desc: "A tasty mixture of vodka, tomatolemon, tabasco sauce and worcestershire sauce.", title: "Bloody Mary", price: 22},
    {id: uuidv4(), desc:"A well-made version is a fresh mix of lime juice and tequila, with a hint of sweetener" , title: "Classic Margarita", price:20 },
    {id: uuidv4(), desc: "A cocktail made of gin, grapefruit, and orange juice making this a smooth drink", title: "Gin and Juice", price: 22},
]


export const wines:SingleBarItem[] = [
    {id: uuidv4(), desc: "Wine color can range from intense violet, typical of young wines, through to brick red", title: "Spanish red wine", price: 220},
    {id: uuidv4(), desc: "Wine color can range from intense violet, typical of young wines, through to brick red", title: "Italian red wine", price: 120},
    {id: uuidv4(), desc: "Wine color can range from intense violet, typical of young wines, through to brick red", title: "French red wine", price: 89},
    {id: uuidv4(), desc: "Wine color can range from intense violet, typical of young wines, through to brick red", title: "French red wine", price: 89},
    {id: uuidv4(), desc: "Wine color can range from intense violet, typical of young wines, through to brick red", title: "Italian red wine", price: 120},
    {id: uuidv4(), desc: "Wine color can range from intense violet, typical of young wines, through to brick red", title: "Spanish red wine", price: 220},
]

export const bites:SingleBarItem[] = [
    {id: uuidv4(), desc: "Salad with salmon, cucumber, red bell peppers, red onions, avocado and lettuce.", title: "Croque Monsieur", price: 19},
    {id: uuidv4(), desc: "Croque monsieur with soft sourdough, gruyère, smoked ham and creamy mustard mayo. You'll relish every mouthful of", title: "Salmon Salad", price: 22},
    {id: uuidv4(), desc: "A variety of jams, preserves, mustards, dips and bread", title: "Charcuterie board to share", price: 50},

]