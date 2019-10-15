import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
    onTermSubmit = async (term) => {
        const resp = await youtube.get('/search',
            {
                params: { q: term }
            });

        this.setState({
            videos: resp.data.items,
            selectedVideo: resp.data.items[0]
        })
    }
    onVideoSelect=(video)=>{
        this.setState({selectedVideo: video});
    }
    render() {
        return (
            <div className='ui container'>
                 <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
               
            </div>);
    }
}

export default App; 