var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({

    render: function() {
        var hrStyles = { "marginTop": 10};
        return (
            <div className="header">
			<h1>ahelium</h1>
            <Navigation />
            </div>
            );
    }

});


var Navigation = React.createClass({
    render: function() {
        return (
                <div>
                    <ul className="nav nav-pills">
                        <li><h3><Link to='Blog'><span className="glyphicon glyphicon-chevron-left"></span> DS BS <span className="glyphicon glyphicon-chevron-right"></span></Link></h3></li>
                        <li><h3><Link to='About'> About </Link></h3></li>

                    </ul>
                </div>
            );  
        }
});

exports.Header = Header;
