import { Item } from "./interfaces"

export type player = {
    name?: string
    profile?: string
    uuid?: string
    items?: Array<Item>
}

export type playerInfo = {
    id: string
    name: string
    error?: string
}