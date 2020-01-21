import {ADD_ARTICLE, IArticleAction, IState} from "./types";


const initialState: IState = {
    articles: [],
};

function rootReducer(state: IState = initialState, action: IArticleAction): IState {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                articles: [...state.articles, action.payload]
            }
    }
    return state
}

export default rootReducer;