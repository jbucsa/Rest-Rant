const React = require('react');

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css"></link>
            </head>
            <body>
            <nav style={{background_color:'cornflowerblue', padding: 10+'px'}}>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/places" className="nav-link">Places</a>
                    </li>
                    <li className="nav-item">
                        <a href="/places/new" className="nav-link">Add Place</a>
                    </li>
                </ul>
            </nav>
                {html.children}
            </body>
        </html>
    );
};

//Following code will export the Def function
module.exports = Def;

