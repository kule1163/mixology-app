import {v4 as uuidv4} from "uuid"
import AwardsWinnerWine from "../components/blogPostComp/blogpost/AwardsWinnerWine"
import BarmenSecret from "../components/blogPostComp/blogpost/BarmenSecret"
import ClasicCosmopolition from "../components/blogPostComp/blogpost/ClasicCosmopolition"


interface BlogPageItem {
    id: string;
    header: string;
    item: () => JSX.Element;
}

export const blogPageItems:BlogPageItem[] = [
    {id: uuidv4(), item: AwardsWinnerWine, header: "The Classic Cosmopolitan with a twist"},
    {id: uuidv4(), item: BarmenSecret, header: "Our Barman’s secret tips"},
    {id: uuidv4(), item: ClasicCosmopolition, header: "The Best Award Winner Wines"},
] 