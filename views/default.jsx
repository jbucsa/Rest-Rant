const React = require('react');

function Def (html) {
    return (
        <html>
            <head>
                <h1>Title</h1>
            </head>
            <body>
                {html.childred}
            </body>
        </html>
    )
};

//Following code will export the Def function
module.exports = Def;

