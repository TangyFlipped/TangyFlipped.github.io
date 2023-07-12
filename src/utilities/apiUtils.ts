import * as base64 from "base-64"

export function getItems() {
    return fetch("https://api.hypixel.net/resources/skyblock/items", { method: "GET" })
      .then(response => {
        if (!response.ok) {
          throw new Error("Unable to fetch items! " + response.status);
        }
        return response.json();
      })
      .then(items => {
        console.log(items);
        return items;
      })
      .catch(error => {
        throw new Error("Unable to fetch items! " + error);
      });
  }
  
export async function getBazaarItems() {
    const res = await fetch("https://api.hypixel.net/skyblock/bazaar")
    if(!res.ok) {
        throw new Error("Unable to fetch bazaar items.")
    }

    const bazaar = await res.json()
    return bazaar
}

export function getImageFromSkin64(val: string) {
    const skin = JSON.parse(base64.decode(val))
    if(skin === undefined) {
        throw new Error("Can not get skin from " + val)
    }

    const image = skin["textures"]["SKIN"]["url"]
}