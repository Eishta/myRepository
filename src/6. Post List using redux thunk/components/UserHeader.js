import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {


render(){
    if(!this.props.user)return null;
    return (
       
        <div>
          <h1><b>  {this.props.user.name}</b></h1>  
        </div>
    )
}
  
}

const mapStateToProps = (state, ownProps) => {
   
    return { user: state.users.find(user=> user.id===ownProps.userId) };
}
export default connect(mapStateToProps, null)(UserHeader);

