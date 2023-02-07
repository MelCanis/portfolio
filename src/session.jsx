import { create } from 'zustand';

export const session = create((set)=>({
    active: "hero",
    setActive: val => set(s=>({active:val}))
}))