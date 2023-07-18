'use client'

import HypixelPlayerConfig from "@/components/hypixelPlayer";
import HypixelPlayerItems from "@/components/hypixelPlayerItems";
import { HypixelPlayerProvider, useHypixelPlayer } from "@/context/playerContext";
import { useEffect } from "react";

export default function Page() {
    const hypixelPlayer = useHypixelPlayer()

    useEffect(() => {
        const pageTitle = "Upgrade Calculator";
        document.title = pageTitle;
    }, []);

    return (
        <HypixelPlayerProvider>
            <main className='hypixel-main'>
                <HypixelPlayerConfig/>
                <HypixelPlayerItems/>
            </main>
        </HypixelPlayerProvider>
    );
}
