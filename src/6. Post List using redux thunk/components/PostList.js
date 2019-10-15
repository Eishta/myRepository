import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader';
class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderedList() {
        return this.props.posts && this.props.posts.map((post, key) => {
            return (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <div>{post.body}</div>)
<h2><UserHeader userId={post.userId} /></h2>
                </div>
            )
        });

    }
    render() {
        return <div className='ui divided list'>{this.renderedList()}</div>;
    }
}

const mapStateToProps = state => {
    return { posts: state.posts, users: state.users };
}


export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);