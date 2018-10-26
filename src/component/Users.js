import React from 'react';
import axios from 'axios';

class Users extends React.Component {

    state = {
        users: [],
    };

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
                this.setState({ users: response })
            },
                (error) => {
                    var status = error.response.status;
                }
            );
    }

    render() {
        return (
            <div className="container">
                <h4>Users:</h4>
                <ul>
                    {this.state.users.name}
                </ul>
            </div >
        )
    }
}

export default Users;