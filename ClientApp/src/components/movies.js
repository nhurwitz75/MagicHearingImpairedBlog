// JavaScript source code
import React, { Component } from 'react';

export class Movies extends Component {
    static displayName = Movies.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Movies</h1>
                <h4>Here are some Movies that I found that I think display hearing impairment well:</h4>
            </div>
        );
    }
}