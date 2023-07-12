import { Item } from "@/app/items/page";


export default function ItemComponent({ name }: Item) {
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}