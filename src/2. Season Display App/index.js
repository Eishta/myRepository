import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, err: '' };
        
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ err: err.message }) 
        )
    }
    render() {
        if (this.state.lat && !this.state.err)
          return  <SeasonDisplay lat= {this.state.lat}/>;
        else if (!this.state.lat && this.state.err)
            return <div> Error: {this.state.err}</div>;
        else return <Spinner message="Please accept the location request"/>;
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));
