import { Item } from "@/types/interfaces";


export default function ItemComponent({ name, category, tier, durability, id }: Item) {
    return(
        <li className="item-card">
            <img src={`https://sky.shiiyu.moe/item/${id}`}></img>
            <h2 className="item-name">{name}</h2>
            <h5>Category: {category}</h5>
            <h5>Tier: {tier}</h5>
            <h5>Durability: {durability}</h5>
        </li>
    )
}