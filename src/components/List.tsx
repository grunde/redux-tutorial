import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {IState} from "../store/types";

interface IOwnProps {

}

const mapStateToProps = (state: IState) => {
    return {articles: state.articles}
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & IOwnProps

const ConnectedList: React.FC<Props> = (props: Props) => (
    <ul>
        {
            props.articles.map((article) => (
                <li key={article.id}>{article.title}</li>
            ))
        }
    </ul>
);

export const List = connector(ConnectedList);
