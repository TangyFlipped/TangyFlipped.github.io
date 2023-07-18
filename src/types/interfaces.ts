export interface Item {
    name: string
    category?: string
    rarity: string
    stats: {
        damage?: number;
        defense?: number;
        intelligence?: number;
        strength?: number;
        speed?: number;
        health?: number;
        mana?: number;
    }
    abilities?: string[]
    enchantments?: string[]
    reforging?: string;
    specialFeatures?: string[]
    tier: number
    durability: number
    id: number
}
