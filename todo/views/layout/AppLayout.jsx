const React = require('react');

class AppLayout extends React.Component{
  render() {
      function delBoxes(){
          var boxes = document.getElementsByClassName('chk');
          var texts = document.getElementsByClassName('txt');
          for(var i = 0; i<boxes.length; i++){
              box = boxes[i];
              txt = texts[i];
              if(box.checked){
                  box.parentNode.removeChild(box);
                  txt.parentNode.removeChild(txt);
              }
          }
      }
    return (
      <html lang="en" dir="ltr">
        <head>
        {/* charset needs to be Camel Cased in JSX */}
            <meta charSet="utf-8"/>
        {/* This let us dynamically create the title */}
            <title>{this.props.task}</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="/css/style.css" />
            <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        </head>
        <body>
        <div className="container">
          <h1 className='text-center'>to do</h1>
            <nav className="nav nav-tabs">
                <a className="nav-link" href="/todo">Todo list</a>
                <a className="nav-link" href="/todo/new">New Task</a>
            </nav>
        <h1>{this.props.task}</h1>
       {/* This is where our other components will be injected */}
          {this.props.children}
          </div>
        </body>
    </html>
    )
  }
}
module.exports= AppLayout;
