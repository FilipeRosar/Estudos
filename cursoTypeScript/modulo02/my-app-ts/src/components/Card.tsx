import { convertToObject } from "typescript"

interface ICard{
    id: number;
    paragraph: string;
    details: string;
}


export const Card = ({ id, paragraph, details }: ICard) => {
    return(
    <div>
        <h2>Card {id}</h2>
        <p>{paragraph}</p>
        <p>{details}</p>
     </div>
    )
}