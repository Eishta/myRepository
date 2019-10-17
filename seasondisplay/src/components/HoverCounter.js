import React from 'react';
import withCounter from './withCounter';

class HoverCounter extends React.Component{

    render() {
        debugger;
        const {count , incrementCount} = this.props;
        return (
            <div>
                <button onMouseOver={incrementCount}>you clicked {count} times</button>
            </div>
        )

    }


}


export default withCounter(HoverCounter);