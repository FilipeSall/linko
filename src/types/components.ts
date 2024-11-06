import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { InputHTMLAttributes, ReactNode } from "react";

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