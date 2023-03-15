import React, { Component } from 'react';
import hearing from '../img/hearing.jpg';
import cochlear from '../img/cochlear.jpg';

import './style/assistive.css';

export class Assistive extends Component {
    static displayName = Assistive.name;

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div class="container">
                <div class="aids">
                    <div class="description">
                        <h1>Hearing Aids</h1>
                        <ul>
                            <li>Generally used by people who have moderate to severe hearring loss</li>
                            <li>Amplifies sounds so they can be detected by damaged ears</li>
                            <li>Not surgically attached. Can be taken out and put back in</li>
                            <li>Battery powered</li>
                            <li>Hearing aids made for kids are generally not waterproof. Hearings that are made for older children and adults can be waterproof</li>
                        </ul>
                    </div>
                    <img class="hearing" src={hearing} alt="image of a hearing aid"></img>
                </div>
                <div class="implants">
                    <div class="description">
                        <h1>Cochlear Implants</h1>
                        <ul>
                            <li>Generally used by people who have profound hearing loss. Meaning they would be almost entirely deaf without them</li>
                            <li>cochlear implants bypass the damaged parts of the ear and go straight to the auditory nerve</li>
                            <li>Part of the cochlear implant is surgically inserted underneath the skin with strings or electrode arrays placed in the ear's cochlea</li>
                            <li>Provides a sense of sound for the user</li>
                        </ul>
                    </div>
                    <img class="cochlear" src={cochlear} alt="image of a cochlear implant"></img>
                </div>
                <div class="system">
                    <div class="description">
                        <h1>FM System</h1>
                        <ul>
                            <li>A wireless assistive hearing device that enhances the use of hearing aids, cochlear implants, and anyone who is hard of hearing but does not wear any of the two</li>
                            <li>Reduces background noise</li>
                            <li>The teacher or adult in the room wears a microphone around their neck that when they speak it goes straight to the hearing aids or cochlear impkant</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}