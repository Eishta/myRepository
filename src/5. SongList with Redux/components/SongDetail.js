import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {

    return (
    <div>
    <h4>Details Are:</h4>
    <p> {props.song && props.song.title}
        <br></br>
        {props.song && props.song.duration}
    </p>
</div>
    );

}
// class SongDetail extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h4>Details Are:</h4>
//                 <p> {this.props.song && this.props.song.title}
//                     {this.props.song && this.props.song.duration}
//                 </p>
//             </div>
//         )
//     }
// }

const mapStateToProps = state => {
    return { song: state.selectedSong };
}
export default connect(mapStateToProps, null)(SongDetail);

