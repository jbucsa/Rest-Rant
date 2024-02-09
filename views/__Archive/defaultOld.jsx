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
                <ul style={{list_style_type: 'none', margin: 0}}>
                    <li style={{display: 'inline', list_style_type:'none', margin: 0}}>
                        <a href="/" style={{  display: 'block', color: 'black', text_align: 'center', padding: 14+'px', text_decoration: 'none', font_size: 1+'em'}}>Home</a>
                    </li>
                    <li style={{ display: 'inline', list_style_type: 'none', margin: 0}}>
                        <a href="/places" style={{  display: 'block', color: 'black', text_align: 'center', padding: 14+'px', text_decoration: 'none', font_size: 1+'em'}}>Places</a>
                    </li>
                    <li style={{display: 'inline', list_style_type: 'none', margin: 0}}>
                        <a href="/places/new" style={{  display: 'block', color: 'black', text_align: 'center', padding: 14+'px', text_decoration: 'none', font_size: 1+'em'}}>Add Place</a>
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

