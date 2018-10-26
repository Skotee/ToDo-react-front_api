import React from 'react';
import axios from 'axios';

class Todos extends React.Component{

    state = {
        todos: [],
    };

    componentDidMount() {
        axios.get(
            'http://localhost:3001/todos',
            {
                headers: {
                    "Authorization": "0cPYKT8RClpeRNYp"
                }
            }
        )
            .then((response) => {
                var response = response.data;
                console.log(response);
                this.setState({todos: response})
            },
                (error) => {
                    var status = error.response.status;
                }
            );
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const todo = {
            name: this.state.name
        };

        axios.post('http://localhost:3001/categories/${id}/add-todo' )
            .then((response) => {
                var response = response.data;
                console.log(response);
                this.setState({ todos: response })
            })
    }

        // axios.delete(`http://localhost:3001/todos/${id}/`)
        //     .then(res => {
        //     console.log(res);
        //     console.log(res.data);

    render() {
        return (
            <div className="container">
                <h4 className="#01579b light-blue darken-4 center z-depth-5 white-text">To Do:</h4>

                <div className="row">
                    {this.state.todos.map(
                        todos =>
                            <div className="col s12 m6">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{todos.name}</span>
                                        <p>{todos.description}</p>
                                        <p>Category: {todos.category.name}</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">Edit</a>
                                        <a href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter new todo:
                    </label>
                        <input type="text" name="name" onChange={this.handleChange} />
                        <button className="btn-floating btn-large waves-effect waves-light red" type="submit"><i class="material-icons">+</i></button>
                </form>
            </div>
        )
    }
}

export default Todos;