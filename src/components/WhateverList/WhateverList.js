import React, { Component } from 'react';
import { connect } from 'react-redux';
import WhateverListItem from '../WhateverListItem/WhateverListItem';

const mapReduxStateToProps = (reduxState) => ({reduxState});

class WhateverList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newInput: '',
        }
    }

    render() {
        const data = this.props.reduxState.thirdsies.map((item) => {
            return <WhateverListItem key={item} item={item}/>
        });
        return (
            data
        );
    }
}

// connect allows us to dispatch actions
export default connect(mapReduxStateToProps)(WhateverList);
