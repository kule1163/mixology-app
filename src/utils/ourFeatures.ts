import {v4 as uuidv4} from "uuid"
import AboutUs from "../../assets/aboutUs.jpg"
import OurMenu from "../../assets/ourMenu.jpg"

interface FeaturesProps {
    id: string;
    buttonText: string;
    header: string;
    background: string;
}

const ourFeatures:FeaturesProps[] = [
    {id: uuidv4(), buttonText:'ABOUT US', header:'Our Bar', background: AboutUs},
    {id: uuidv4(), buttonText:'OUR MENU', header:'Our Cocktails', background:OurMenu}
]