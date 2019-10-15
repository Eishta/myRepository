// import React from 'react';
// import StreamList from './streams/StreamList';
// import StreamCreate from './streams/StreamCreate';
// import StreamDelete from './streams/StreamDelete';
// import StreamEdit from './streams/StreamEdit';
// import Header from './Header';
// import {BrowserRouter, Route} from 'react-router-dom';


// const App = () => {
//     return <div >
        
//               <BrowserRouter> 
//               <div>
//               <Header /> 
//               <Route path='/' exact component={StreamList}/>
//               <Route path='/streamcreate' exact component={StreamCreate}/>
//               <Route path='/streamdelete' exact component={StreamDelete}/>
//               <Route path='/streamedit' exact component={StreamEdit}/>
//               </div>
//               </BrowserRouter>
           
//     </div>;
// }
// export default App;


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