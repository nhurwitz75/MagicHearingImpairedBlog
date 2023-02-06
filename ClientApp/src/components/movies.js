import React, { Component } from 'react';
import moonLight from '../img/MoonlightSonataHBOdocmainpost5992.jpg';
import ordinary from '../img/ordinary.jpg';
import sound from '../img/OIP.jpg'; 
import audible from '../img/Audible.jpg';

import './style/movies.css';

export class Movies extends Component {
    static displayName = Movies.name;

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="box">
                <h1>Movies and Books</h1>

                <h5>Here is a list of movies and books that I found that I want to share with you that I think depicts hearing impairment well and can help make you more aware.</h5>
                <br></br>
                <h2>Movies:</h2>
                <ul>
                    <li>
                        <a class="moon" href="https://www.imdb.com/title/tt9135318/" target="_blank" rel="noopener noreferrer">Moonlight Sonata: Deafness in Three Movements</a>
                        <p>A personal memoir about a deaf boy growing up, his deaf grandfather aging, and Ludwig van Betthoven in the year he wrote his most iconic sonata.</p>
                        <img class="mooonlight" src={moonLight} alt="Moonlight Sonata Movie Poster" />
                    </li>
                    <li>
                        <a class="audible" href="https://www.imdb.com/title/tt12771540/" target="_blank" rel="noopener noreferrer">Audible</a>
                        <p>Amaree is a deaf student at Maryland school for the deaf. Shaken by his friend committing suicide, he does everything in his memory. Amaree plays for the school football team who lose their first game in sixteen seasons. Amaree and the rest of the team spend a lot of time training for the upcoming homecoming game, his last game before he graduates. Watch Amaree as he plays football, builds relationships, and has fun with his friends.</p>
                        <img class="audible" src={audible} alt="audible netflix image" /> 
                    </li>
                    <li>
                        <a class="sound" href="https://www.imdb.com/title/tt0240912/" target="_blank" rel="noopener noreferrer">Sound and Fury</a>
                        <p>Cousins Heather and Peter Artinian -- ages 6 and almost 2, respectively -- are deaf. Their condition could be changed by a cochlear implant, a device that stimulates hearing. The benefits are obvious, but this documentary focuses on why the children's families face a tough decision. There are concerns about how the device will change the recipient's relationship with deaf culture and whether there can ever be true connection between those who hear sounds and those who hear only silence.</p>
                        <img class="sound" src={sound} alt="Sound and Fury Movie Poster" />
                    </li>
                    <li>
                        <a class="ordinary" href="https://www.imdb.com/title/tt2907898/" target="_blank" rel="noopener noreferrer">No Ordinary Hero: The SuperDeafy Movie</a>
                        <p>A deaf actor who plays a superhero on tv helps a young, deaf boy believe in himself when the two cross paths.</p>
                        <img class="ordinary" src={ordinary} alt="No Ordinary Hero: The SuperDeafy Movie" />
                    </li>
                </ul>
                <br></br>
                <h2>Books:</h2>
                <ul>
                    <li>
                        <h3>Super Kena: A Girl Made Fierce With Hearing Aids</h3>
                        <h4>By: Becky Cymbaluk</h4>
                        <p>This colorfully illustrated book stars Kena, a girl with hearing aids as she works through issues with classmates who don't understand her hearing loss. With the help of her mom, Kena realizes that her hearing aids give her ears "super powers" and makes plans to form a team of her other differently-abled friends in an effort to explain their super-powers to the class during show and tell.</p>
                    </li>
                    <li>
                        <h3>Freddie and the Fairy</h3>
                        <h4>By: Julia Donaldson</h4>
                        <p>Fairy Besse Belle has hearing loss, but that doesn't stop her from trying to grant Freddie's wishes. Unfortunately, Freddie mumbles, so the Fairy Queen steps in to help. Children will love this witty, rhyming tale with its subtle message about the importance of speaking directly to someone who has hearing loss.</p>
                    </li>
                    <li>
                        <h3>Dad and Me in the Morning</h3>
                        <h4>By: Patricia Lakin</h4>
                        <p>Parents and children will enjoy this sweet read describing the very special relationship a dad has with his deaf son and how they find ways to communicate with each other. A great introduction to American Sign Language(ASL) and Deaf culture. This book is a good read for children of all hearing abilities.</p>
                    </li>
                    <li>
                        <h3>El Deafo</h3>
                        <h4>By: Cece Bell</h4>
                        <p>After getting sick, Cece loses her hearing. This ends up leading to her wearing hearing aids. Cece discovers the highs and lows and how to navigate her new normal with her hearing aids.</p>
                    </li>
                    <li>
                        <h3>Rally Caps</h3>
                        <h4>Stephen J. and Jodi Michelle Cutler</h4>
                        <p>After 10-year old Jordan is injured in an accident, he finds it difficult to return to his favorite sport of baseball. Fortunately, he meets Luca at summer camp, a deaf boy who wears a cochlear implant and inspires Jordan with a “nothing is impossible” attitude. Find out how they rally together in the biggest game of Jordan’s life.</p>
                    </li>
                    <li>
                        <h3>Diary of a Hard of Hearing Kid</h3>
                        <h4>By: Isaiah John Baier</h4>
                        <p>There's nothing more poignant than a heartfelt memoir and this one delivers. Written and Illustrated by 11-yeard old Isaiah Baier, the book gives readers a glimpse into his life as a child who lost his hearing to meningitis at 20 months of age and now wears cochlear implants.</p>
                    </li>
                    <li>
                        <h3>Wonder</h3>
                        <h4>By: R.J. Palacio</h4>
                        <p>August Pullman was born with a facial difference that up until now has prevented him from going to a mainstream school. Starting 5th grade at Beecher Prep, he wants nothing more than to be treated an an ordinary kid - but his new classmates can't get past his extraordinary face. Wonder begins from Auggies point of view but soon switches to include his classmates, his sister and her boyfriend, and others.</p>
                    </li>
                </ul>
            </div>
        );
    }
} 