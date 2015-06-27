var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({

    render: function() {
        var hrStyles = { "marginTop": 10 };
        return (
            <div className="header">
			<h1>I am the Header</h1>
            <Navigation />
            <hr style={hrStyles} />
            <hr style={hrStyles} />
            </div>
            );
    }

});


var Navigation = React.createClass({
    render: function() {
        return (
                <div>
                    <ul className="nav nav-pills">
                        <li><h3><Link to='Blog'> <span className="glyphicon glyphicon-headphones"></span> Episodes</Link></h3></li>
                        <li><h3><Link to='About'><span className="glyphicon glyphicon-globe"></span>  About </Link></h3></li>
                    </ul>
                </div>
            );  
        }
});

exports.Header = Header;
