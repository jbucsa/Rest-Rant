const React = require('react');
const Def = require('./default.jsx');

function home(){
    return(
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/BeachLife.jpg" alt="Image of Beach Life" />
                </div>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
</a>

            </main>
        </Def>
    )
};

module.exports = home;