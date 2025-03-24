import {create} from 'zustand'

type FeaturesProps = {
    inViewFeature: string | null
    setInViewFeature: (feature:string | null) => void
 }

export const useFeatureStore = create<FeaturesProps>((set)=>({
    inViewFeature: null,
    setInViewFeature: (feature:string | null) => set({inViewFeature: feature})
}))