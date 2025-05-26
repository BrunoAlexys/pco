import githubIcon from '../assets/github.png';
import figma from '../assets/figma.png'
import couchbase from '../assets/couchbase.png';
import spring from '../assets/spring.png';
import trello from '../assets/trello.png';
import flutter from '../assets/flutter.png';

export interface IconData {
    id: number;
    icon: string;  // Caminho para a imagem
    alt?: string;  // Texto alternativo
}

export const IconData: IconData[] = [
    {
        id: 1,
        icon: githubIcon,
        alt: "GitHub Icon",
    },
    {
        id: 2,
        icon: figma,
        alt: "Figma Icon",
    },
    {
        id: 3,
        icon: couchbase,
        alt: "Couchbase Icon",
    },
    {
        id: 4,
        icon: spring,
        alt: "Spring Icon",
    },
    {
        id: 5,
        icon: trello,
        alt: "Trello Icon",
    },
    {
        id: 6,
        icon: flutter,
        alt: "Flutter Icon",
    }
];
