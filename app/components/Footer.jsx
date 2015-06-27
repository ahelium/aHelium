var React = require('react');
var Link = require('react-router').Link;

var Footer = React.createClass({

    render: function() {
        return (
            <div className="header text-center">
                <hr className="hr-bottom" />
                <hr className="hr-bottom" />
                <h1 className="glyphicon glyphicon-cloud"></h1>
            </div>
            );
    }

});





exports.Footer = Footer;