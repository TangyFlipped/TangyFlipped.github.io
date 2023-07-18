'use client'

import useLocalStorage from "@/hooks/useLocalStorage";
import { Item } from "@/types/interfaces";
import { player } from "@/types/types";
import { ReactNode, createContext, useContext } from "react";

type defaultReactChildren = {
    children: ReactNode;
}

type GlobalPlayerContext = {
    getName: () => string
    getProfile: () => string
    getUUID: () => string
    getItems: () => Array<Item>
    setName: (name: string) => void
    setProfile: (profile: string) => void
    setUUID: (uuid: string) => void
    setItems: (items: Array<Item>) => void
}

const GlobalPlayerContext = createContext<GlobalPlayerContext>({} as GlobalPlayerContext)

export function useHypixelPlayer() {
    return useContext(GlobalPlayerContext)
}

export function HypixelPlayerProvider({children}: defaultReactChildren) {
    const [{name, profile, uuid, items}, setGlobalPlayerInfo] = useLocalStorage<player>('hypixel_player', {items: []})

    function getName(): string {
        return name || ''
    }

    function getProfile(): string {
        return profile || ''
    }

    function getUUID(): string {
        return uuid || ''
    }

    function getItems(): Array<Item> {
        return items || []
    }

    function setName(name: string): void {
        setGlobalPlayerInfo(prev => {
            return {...prev, name: name}
        })
    }

    function setProfile(profile: string): void {
        setGlobalPlayerInfo(prev => {
            return {...prev, profile: profile}
        })
    }

    function setUUID(uuid: string): void {
        setGlobalPlayerInfo(prev => {
            return {...prev, uuid: uuid}
        })
    }

    function setItems(items: Array<Item>): void {
        setGlobalPlayerInfo(prev => {
            return {...prev, items: items}
        })
    }

    return (
        <GlobalPlayerContext.Provider value={{getName, getProfile, getItems, getUUID, setName, setProfile, setUUID, setItems}}>
            {children}
        </GlobalPlayerContext.Provider>
    ) 
}
