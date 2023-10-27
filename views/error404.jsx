const React = require('react');
const Def = require('./default.jsx');

function error404 () {
    return(
        <Def>
            {/*//This section is the {html.children} code in the default.js file.*/}
            <main>

                <h1>404: Page Not Found</h1>
                <p>This Page was lost in the void!!!</p>
                <div>
                    <img src="/images/404ErrorImage.jpg" alt="Image of Beach Life"/>
                </div>
            </main>
        </Def>
    )
};

module.exports = error404