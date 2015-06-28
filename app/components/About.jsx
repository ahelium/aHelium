var React = require('react');

var Anna = React.createClass({

    render: function() {
        return (
            <div>
                <p>Github! <a href="https://github.com/ahelium"> First Draft </a>
                </p>
            </div>
        )
    }
});


var AboutHeader = React.createClass({

    render: function() {
        return (
            <div className="header">
                <hr className="hr-bottom" /> 
                <Anna />
                <hr className="hr-bottom" />                                                             
            </div>
            );
    }
});


var About = React.createClass({

    render: function() {
        return (
            <div>
                <AboutHeader />
                <br />
            </div>
        )
    }
});

module.exports = About;
