import React, { Component } from 'react';

class WhateverListItem extends Component {

    render() {


        return (
            <div>
                <p>{this.props.item}</p>
            </div>
        );
    }
}

export default WhateverListItem;
