import {v4 as uuidv4} from "uuid"
import { BsFillEnvelopeFill } from 'react-icons/bs';
import {BsClockFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationOn} from 'react-icons/md';
import { IconType } from "react-icons";


interface ContactProps {
    id: string;
    text: string;
    icon: IconType;
}

export const contacts:ContactProps[] = [
    {id:uuidv4(), icon:BsFillEnvelopeFill, text:"contact@email.com"},
    {id:uuidv4(), icon:BsClockFill, text:"Monday to Friday 7pm to 11pm"},
    {id:uuidv4(), icon:BsFillTelephoneFill, text:"123 456 789"},
    {id:uuidv4(), icon:MdLocationOn, text:"Coppice Celyn 123, MA US"},
]