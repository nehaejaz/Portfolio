import React from 'react'

const Intro = () => {
    return (
        <div className='teal lighten'>
            <nav class="blue" role="navigation">
                <div class="nav-wrapper container">
                    <a id="logo-container" href="#" class="left brand-logo">Neha Ejaz</a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>

                    <ul id="nav-mobile" class="sidenav">
                        <li><a href="#">Navbar Link</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                </div>
            </nav>
            <div class="col s12">
                <div class="icon-block">
                    <h2 class="center white-text"><i class="material-icons">N E H A  E J A Z</i></h2>
                    <p class="dark">Welcome</p>
                </div>
            </div>
            <div>
                <h2>Who Am I?</h2>
                <p>My name is Neha Ejaz I am from Karachi Pakitan</p>
            </div>

        </div>

    )
}

export default Intro