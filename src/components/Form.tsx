import React, {Component} from "react";
import {connect, ConnectedProps} from "react-redux";
import {addArticle} from "../store/actions";

const mapDispatchToProps = {
    addArticle: addArticle,
};

interface IProps {

}

interface IState {
    title: string
}

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & IProps

class ConnectedForm extends Component<Props, IState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: "",
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({title: event.target.value})
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {title} = this.state;
        this.props.addArticle({
            title: title,
            id: Math.random(),
        });
        this.setState({title: ""});
    };

    render() {
        const {title} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">SAVE</button>
            </form>
        )
    }
}

export const Form = connector(ConnectedForm);