export interface IArticle {
    id: number
    title: string
}

export interface IState {
    articles: IArticle[]
}

export const ADD_ARTICLE = 'ADD_ARTICLE';

interface IAddArticleAction {
    type: typeof ADD_ARTICLE
    payload: IArticle
}

export type IArticleAction = IAddArticleAction
