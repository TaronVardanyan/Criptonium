import React from 'react';
import './Search.css';
import {API_URL} from '../../config';
import {Response} from '../../helpers';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const searchQuery = event.target.value;
        this.setState({
            searchQuery,
        })
        if (!searchQuery) {
            return '';
        }
        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
            .then(Response)
            .then((data) => {
                console.log('Success', data);
            })
            .catch((error) => {
                console.log('Error', error);
            });
    }

    render() {
        return (
            <div className="Search"><span className="Search-icon"/>
                <input type="text" className="Search-input" placeholder="Currency Name" onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Search;