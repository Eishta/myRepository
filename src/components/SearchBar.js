import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }
    componentDidMount(){
        this.setState({term: 'buildings'});
        this.props.onTermSubmit(this.state.term);
    }
    onFormSubmit(e) {
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }
    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={e => this.onFormSubmit(e)}>
                    <label>Search Videos</label>
                    <div className='field'>
                        <input type='text' value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        )

    }
}
export default SearchBar;