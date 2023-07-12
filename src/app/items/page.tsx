'use client'

import ItemComponent from '@/components/item';
import { useEffect, useState } from 'react';

export interface Item {
  name: string;
  category: string;
  durability: string;
  material: string;
  tier: string;
  skin: string;
  id: string;
}

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("https://api.hypixel.net/resources/skyblock/items");
        const itemsData = await response.json();
        setItems(itemsData["items"]);
      } catch (error) {
        console.error("Unable to fetch items:", error);
      }
    }

    fetchItems();
  }, []);

  return (
    <div>
      <ul className="items-list">
        {items.map((item, index) => {
          return <ItemComponent key={index} {...item}/>
        })}
      </ul>
    </div>
  );
}
