const React = require('react');

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    );
};

//Following code will export the Def function
module.exports = Def;

