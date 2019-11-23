const React = require('react');

class AppLayout extends React.Component{
  render() {
    return (
      <html lang="en" dir="ltr">
        <head>
        {/* charset needs to be Camel Cased in JSX */}
            <meta charSet="utf-8"/>
        {/* This let us dynamically create the title */}
            <title>{this.props.task}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </head>
        <body>
            <nav class="nav">
                <a class="nav-link" href="/todo">Home</a>
                <a class="nav-link" href="#">About</a>
            </nav>
        <h1>{this.props.task}</h1>
       {/* This is where our other components will be injected */}
          {this.props.children}
        </body>
    </html>
    )
  }
}
module.exports= AppLayout;
