import { User } from "entities/User";

export enum ArticleTypes {
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMY = "ECONOMY"
}

export enum ArticleBlocksType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE'
}

export enum ArticleView {
    SMALL = 'SMALL',
    BIG = 'BIG'
}

interface ArticleBlockBase {
    id: string,
    type: ArticleBlocksType,
}

export interface ArticleBlockText extends ArticleBlockBase {
    type: ArticleBlocksType.TEXT
    title?: string
    paragraphs: string[]
}

export interface ArticleBlockImage extends ArticleBlockBase {
    type: ArticleBlocksType.IMAGE
    src: string
    title: string
}

export interface ArticleBlockCode extends ArticleBlockBase {
    type: ArticleBlocksType.CODE
    code: string
}

export type ArticleBlock = ArticleBlockText | ArticleBlockImage | ArticleBlockCode

export interface Article {
    id: string,
    title: string,
    user: User,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleTypes[],
    blocks: ArticleBlock[]
}