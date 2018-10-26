import React from 'react';
import axios from 'axios';

class Categories extends React.Component {

    state = {
        categories: [],
    };

    componentDidMount() {
        axios.get(
            'http://localhost:3001/categories',
            {
                headers: {
                    "Authorization": "0cPYKT8RClpeRNYp"
                }
            }
        )
            .then((response) => {
                var response = response.data;
                console.log(response);
                this.setState({ categories: response })
            },
                (error) => {
                    var status = error.response.status;
                }
            );
    }

    render() {
        return (
            <div className="container">
                <h4 >Available categories:</h4>
                <ul>
                    {this.state.categories.map(categories => <li>{categories.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Categories;