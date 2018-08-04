import React from 'react';
class Video extends React.Component {
    render() {
        var path = this.props.location.pathname.split('/');
        var vidFile = path[path.length-1];
        console.log(path[path.length-1]);
        return (
            <div style={{textAlign: 'center', margin: '1%'}}>
                <video loop autoplay controls="true" width="50%" height="50%">
                    <source src={`http://localhost:5000/api/video/${vidFile}`} type='video/x-m4v'></source>
                </video>
            </div >
        );
    }
}
export default Video;