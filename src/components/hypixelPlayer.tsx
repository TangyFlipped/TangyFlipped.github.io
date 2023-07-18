import { useHypixelPlayer } from "@/context/playerContext";
import { useEffect, useState } from "react";

export default function HypixelPlayerConfig() {
    const [headImgUrl, setHeadImgUrl] = useState('');
    const hypixelPlayer = useHypixelPlayer();
    
    useEffect(() => {
        setHeadImgUrl(`https://mc-heads.net/avatar/${hypixelPlayer.getName()}`);

        fetch(`https://api.ashcon.app/mojang/v2/user/${hypixelPlayer.getName()}`)
        .then(data => { return data.json() })
        .then(mojangInfo => {
            console.log(mojangInfo)
            return hypixelPlayer.setUUID(mojangInfo['uuid']) })
        .catch(e => {
            console.error(e)
        })
    }, [hypixelPlayer.getName()]);

    function handleNameChange(name: string) {
        hypixelPlayer.setName(name)
    }

    return (
        <div className='hypixel-info'>
            <h1 className='hypixel-info-title'>Hypixel Player Info</h1>
            <img className='hypixel-info-img' src={headImgUrl}/>

            
            <input className='hypixel-info-input' type='text' onChange={(e) => {handleNameChange(e.target.value)}} placeholder="Type Minecraft Name" value={hypixelPlayer.getName()}/>
        </div>
    );
}
