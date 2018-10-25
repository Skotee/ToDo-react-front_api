import React from 'react';
import axios from 'axios';

class Users extends React.Component {


    componentDidMount() {
        axios.get(
            'http://localhost:3001/users',
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
                <button>View user</button>
            </div>
        )
    }
}

export default Users;