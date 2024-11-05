import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export interface NavLinkProps {
    href: string,
    type: 'solid' | 'ghost' | 'cta',
    size: 'big' | 'medium' | 'small',
    children: ReactNode,
    icon?: ReactNode
}

export interface FeaturesCardsProps {
    title: string,
    img: StaticImport,
    description: string,
    index: number
}

export interface UserProps {
    name:string,
    email:string,
    password:string,
    niche: number,
}

export interface SignUpProps extends UserProps {
    confirmPassword: string,
}

export interface SignUpErrorsProps {
    name: null | string,
    email: null | string,
    confirmPassword: null | string,
    password: null | string
}
