var React = require('react');

var Anna = React.createClass({

    render: function() {
        return (
            <div className="header">
                <h3>Github! <a href="https://github.com/ahelium"> First Draft </a> </h3>
            </div>
        )
    }
});

var Coleman = React.createClass({

    render: function() {
        return (
            <div className="header">
                <h3>With Help From Our <a href="https://github.com/anxiousmodernman"> Sponsors </a> </h3>
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
                <Coleman />                                                             
            </div>
            );
    }
});


var About = React.createClass({

    render: function() {
        return (
            <div>
                <AboutHeader />
            </div>
        )
    }
});

module.exports = About;
