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
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <h1>Todos:</h1>

                <ul>
                    {this.state.todos.map(todos => <li>{todos.name},{todos.description},{todos.category.name}</li> )}
                </ul>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter todo:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>


                <div>
                    <button>View todo</button>
                </div>
            </div>
        )
    }
}

export default Todos;