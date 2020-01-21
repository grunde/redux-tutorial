import {ADD_ARTICLE, IArticle, IArticleAction} from "./types";

export function addArticle(article: IArticle): IArticleAction {
    return { type: ADD_ARTICLE, payload: article }
}