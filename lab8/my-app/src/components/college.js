import React from 'react';

class College extends React.Component {
    render() { 
        return ( <p>College <b>{this.props.name}</b> with college address <b>{this.props.location}</b></p> );
    }
}
 
export default College;