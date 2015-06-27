/*
 * This is the main entry point for the Single Page Application
 */


var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

React.initializeTouchEvents(true);

var Header = require('./components/Header.jsx').Header;
var Footer = require('./components/Footer.jsx').Footer;
var About = require('./components/About.jsx');
var Blog = require('./components/Blog.jsx');

var App = React.createClass({

    render: function() {
        return <div className="container-fluid row">
                <div className="col-md-2"></div>
                <div className="col-md-8 col-xs-12">
                    <Header />
                    <RouteHandler/>
                    <Footer />
                </div>
                <div className="col-md-2"></div>
                </div>
    }
});



//Define our Routes for the entire applicaiton here !!

var routes = (
        <Route handler={App}>
            <Route name="About" path="about" handler={About}/>
            <Route name="Blog" path="blog" handler={Blog}/>
            <DefaultRoute handler={Blog} />
        </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});
