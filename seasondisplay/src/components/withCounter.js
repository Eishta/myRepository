import React from 'react';

const withCounter = WrappedComponent => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            debugger;
            this.setState(prevState => {
                return {count: prevState.count + 1};
            })
    
        }
        render(){
            console.log(this);
            return <WrappedComponent incrementCount={this.incrementCount.bind(this)}
                                     count={this.state.count}
                    />
		}
    }
    return WithCounter;
}

export default withCounter;