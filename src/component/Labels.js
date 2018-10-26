import React from 'react';
import axios from 'axios';

class Labels extends React.Component {
    
    state = {
        labels: [],
    };
    
    componentDidMount() {
        axios.get(
            'http://localhost:3001/labels',
            {
                headers: {
                    "Authorization": "0cPYKT8RClpeRNYp"
                }
            }
        )
            .then((response) => {
                var response = response.data;
                console.log(response);
                this.setState({ labels: response })
            },
                (error) => {
                    var status = error.response.status;
                }
            );
    }

    render() {
        return (
            <div className="container">
                <h4>Available labels:</h4>
                <ul>
                    {this.state.labels.map(labels => <li>{labels.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Labels;