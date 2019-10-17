import React from 'react';
import withCounter from './withCounter';

class ClickCounter extends React.Component {

    render() {
        debugger;
        const {count , incrementCount} = this.props;
        console.log(this.props);
        console.log(this.props.incrementCount);
        return (
            <div>
                <button onClick={incrementCount}>you clicked {count} times</button>
            </div>
        )

    }


}

export default withCounter(ClickCounter);