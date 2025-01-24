import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Dispatch, InputHTMLAttributes, ReactNode } from "react";
import { ObjectKeysStringErrors } from "./auth";

export interface NavLinkProps {
    href: string
    type: 'solid' | 'ghost' | 'cta'
    size: 'big' | 'medium' | 'small'
    children: ReactNode,
    icon?: ReactNode
}

export interface FeaturesCardsProps {
    title: string
    img: StaticImport
    description: string
    index: number
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
    type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search' | 'url'
}

export interface InputSignUpProps extends InputProps {
    inputError?: ObjectKeysStringErrors
}

export interface BtnLoginProviderProps {
    provider: 'github' | 'google' | 'dribbble'
    loading: boolean
    setLoading:Dispatch<boolean>
    pending?:boolean
}