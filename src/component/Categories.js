import React from 'react';
import axios from 'axios';

class Categories extends React.Component {

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
            },
                (error) => {
                    var status = error.response.status;
                }
            );
    }

    render() {
        return (
            <div>
                <button>View categories</button>
            </div>
        )
    }
}

export default Categories;