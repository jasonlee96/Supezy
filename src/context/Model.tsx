import { StringMap } from "i18next";
import { Ingredient } from "../components/products/IngredientList";

export interface ProductViewModel{
    productName: string,
    header: string,
    productDescription: string,
    ingredientHeader: string,
    ingredients: Array<Ingredient>,
    cert: Certification,
    direction: Direction,
    suitablePerson: SuitablePerson,
    benefit: ProductBenefit,
    productDetail: Array<ProductDesc>
}

export interface HomeViewModel{
    quote: Quote,
    product: HomeProductViewModel,
    benefit: HomeBenefitViewModel
}

interface Quote{
    title?: string,
    description: string,
    author: string
}

interface HomeProductViewModel{
    header: string,
    title: string,
    description: string,
    href: string,
    buttonText: string
}

export interface HomeBenefitViewModel{
    title: string,
    subtitle: string,
    description: string
    list: Array<HomeBenefitItem>
}

interface HomeBenefitItem{
    key: string,
    icon: string,
    title: string,
    description: string
}

interface ProductDesc{
    key: string,
    title: string,
    description: string,
    image: string,
    imageStyle?: React.CSSProperties
}

interface ProductBenefit{
    title: string,
    items: Array<Benefit>
}

export interface Benefit{
    title: string,
    key: string,
    description: string,
    image: string
}

interface SuitablePerson{
    title: string,
    items: Array<SuitablePersonItem>
}

interface SuitablePersonItem{
    title: string,
    description: string,
    key: string
}

export interface Direction{
    title: string,
    description: string,
    items: Array<DirectionItem>
}

interface DirectionItem{
    key: string,
    title: string,
    items: Array<Step>
}

interface Step{
    key: string,
    step: string
}

export interface Certification{
    title: string,
    description: string,
    items: Array<Cert>
}
interface Cert{
    key: string,
    title: string,
    name: string
}

export interface Contact{
    title: string,
    distributorTitle: string,
    distributors: Array<Distributor>,
    feedback: Feedback
}
export interface Feedback{
    title: string,
    description: string,
    input: string,
    button: string
}

interface Distributor{
    key: string,
    name: string,
    position: string,
    instagram: string,
    icon: string,
    whatsapp: string
}

export interface AboutViewModel{
    header: string,
    title: string,
    description: string,
    visionTitle: string,
    visionDesc: string,
    missionTitle: string,
    missionDesc: string,
    news: Array<AboutUsNewViewModel>
}

export interface AboutUsNewViewModel{
    key: string,
    title: string,
    content: string
}