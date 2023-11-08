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
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a href="/" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="/places" class="nav-link">Places</a>
                    </li>
                    <li class="nav-item">
                        <a href="/places/new" class="nav-link">Add Place</a>
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

