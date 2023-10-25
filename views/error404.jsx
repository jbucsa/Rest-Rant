const React = require('react');
const Def = require('./default.jsx');

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: Page Not Found</h1>
                <p>This Page was lost in the void!!!</p>
            </main>
        </Def>
    )
};

module.exports = error404