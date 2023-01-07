import React, { Component } from 'react';
import moonLight from './path/to/MoonlightSonataHBOdocmainpost5992.jpg';
import ordinary from './path/to/NoOrdinaryHero.jpg';
import audible from './path/to/Audible.jpg';
import sound from './path/to/Sound-and-Fury-film-images-dc5b5fe4-82dc-4e7d-acc0-b08f6e1f1af.webp';

export class Movies extends Component {
    static displayName = Movies.name;

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Movies and Books</h1>

                <h4>Here are some Movies and Books that I found that I think display hearing impairment well:</h4>
                <ul>
                    <li>
                        <h3>Moonlight Sonata: Deafness in Three Movements</h3>
                        <p>A personal memoir about a deaf boy growing up, his deaf grandfather aging, and Ludwig van Betthoven in the year he wrote his most iconic sonata.</p>
                        <img src={moonLight} alt="Moonlight Sonata Movie Poster" />
                    </li>
                    <li>
                        <h3>Audible</h3>
                        <p>Amaree is a deaf student at Maryland school for the deaf. Shaken by his friend committing suicide, he does everything in his memory. Amaree plays for the school football team who lose their first game in sixteen seasons. Amaree and the rest of the team spend a lot of time training for the upcoming homecoming game, his last game before he graduates. Watch Amaree as he plays football, builds relationships, and has fun with his friends.</p>
                        <img src={audible} alt="audible netflix image" /> 
                    </li>
                    <li>
                        <h3>Sound and Fury</h3>
                        <p>Cousins Heather and Peter Artinian -- ages 6 and almost 2, respectively -- are deaf. Their condition could be changed by a cochlear implant, a device that stimulates hearing. The benefits are obvious, but this documentary focuses on why the children's families face a tough decision. There are concerns about how the device will change the recipient's relationship with deaf culture and whether there can ever be true connection between those who hear sounds and those who hear only silence.</p>
                        <img src={sound} alt="Sound and Fury Movie Poster" />
                    </li>
                    <li>
                        <h3>No Ordinary Hero: The SuperDeafy Movie</h3>
                        <p>A deaf actor who plays a superhero on tv helps a young, deaf boy believe in himself when the two cross paths.</p>
                        <img src={ordinary} alt="No Ordinary Hero: The SuperDeafy Movie" />
                    </li>
                </ul>

            </div>
        );
    }
} 