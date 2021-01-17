import React, { Component } from 'react'


class Form extends Component {
    initialState = {
        title: '',
        desc: '',
        isCompleted: false,
    }

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)
    }

    render() {
        const { title, desc } = this.state;
        return (
            <form className="py-3 text-light add-task-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="desc"
                        name="desc"
                        value={desc}
                        onChange={this.handleChange}
                        rows="3"
                    ></textarea>
                </div>
                <input type="button" className="btn btn-primary" value="Add Task" onClick={this.handleSubmit} />
            </form>
        );
    }
}
export default Form;