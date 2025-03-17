import { StaticImageData } from "next/image";

export interface StarOrbitProps{
    size: number;
    rotate: number;
    spinDuration?: string;
    spin?: boolean;
    star?: boolean;
    starDuration?: string;
    animatedLoop?: boolean;
}

export interface TechProps{
    id: number;
    name: string;
    image: StaticImageData | string;
}

export interface TechStackProps{
    item: TechProps[];
    delay: number
    right?:boolean
}

export interface TechCardProps {
    bgColor?: string; 
    lottie:string | object
    title:string
    content:string
}
