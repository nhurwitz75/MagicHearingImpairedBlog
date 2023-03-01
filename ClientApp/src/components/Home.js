import React, { Component } from 'react';
import car from '../img/nava_car.jpg';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <div>
                    <img class="car" src={car} alt="Picture of Me in car"></img>
                    <h3 class="title">About Me</h3>
                    <p>My name is Nava Hurwitz. I currently live in West Hempstead, New York with my parents and three siblings. I am in tenth grade at Stella K. Abraham High School for Girls.
                        One of my favorite classes in school is my STEM class where we are working on how to use an Arduino which is a microcontroller.
                        Outside of school I have an interest in computer science with four years of being self-taught. In computer science my main interest is front-end development.</p>
                </div>
                <div>
                    <h3 class="title">Inspiration for This Blog</h3>
                    <p>My high school gave me the opportunity to work on my programming skills with MAGIC. MAGIC is a program which helps middle and high school aged girls get more involved in the STEM field.
                        Since I love front-end development I have decided to work with my mentor to create a website.</p>
                    <p>My website is designed to help promote awareness for the hearing impaired community. Hearing impaired means that a person is deaf or hard of hearing.
                        Those that are not hearing impaired do not have the same challenges as someone who is deaf or hard of hearing.
                        This can create a challenge for the broader community to understand the struggles of someone that is hearing impaired.
                        As well, there is a spectrum within the hearing impaired community, which can cause differences in wants and needs.
                        For example, a deaf person or someone who considers themself deaf, may not want to get any type of assistive hearing device because of the sense of community that they are surrounded by.
                        The purpose of my blog is to take in these considerations, to educate and provide resources to others.</p>
                    <p>My inspiration to build this website is my brother. My brother is eight years old and has moderate to severe hearing loss.
                        As a result of this he has been wearing hearing aids since he was five months old. Having moderate to severe hearing loss means that without hearing aids
                        he can not hear most things. Things that we think of as normal to hear clearly, such as birds chirping or the shower water running are not necessarily audible
                        to someone with moderate to severe hearing loss if they are not wearing their hearing aids. Being exposed to someone who is hearing impaired has given me sensitivity and understanding to create this blog.</p>
                </div>
            </div>
        );
    }
}
