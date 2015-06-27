var React = require('react');

var Coleman = React.createClass({

    render: function() {
        return (
            <div>
                <h3>Coleman McFarland</h3>
                <p>Raised in the petro-fueled paradise of suburban Houston, Texas, Coleman emigrated to DC to
                pursue journalism, but then thought better of it.</p>
                <p>These days, he stares at a text editor and terminals all day long, and occasionally blogs over
                 at <a href="http://coleman.codes"> coleman.codes</a>, and tweets boring nonsense 
                 from <a href="http://twitter.com/cemcfarland">@CEMcFarland</a>.
                </p>
            </div>
        )
    }
});

var Farhan = React.createClass({

    render: function() {
        return (
            <div>
                <div>
                    <h3>Farhan Syed</h3>
                    <p>A space cowboy from another dimension, Farhan knows how to rock a party.</p>
                    <p>He can be found pushing sweet little bits on github at  <a href="http://github.com/nearhan">Nearhan</a>   and 
                    hardly tweets at all from his Twitter handle  <a href="http://twitter.com/nearhan">@nearhan</a>.
                    </p>
                </div>
            </div>
        )
    }
});

var About = React.createClass({

    render: function() {
        return (
            <div>
                <h6>Who are we, really?</h6>
                <Farhan />
                <Coleman />
                <br />
                <p> Follow the show's Twitter feed  <a href="http://twitter.com/gfpodcast">@GFPodcast</a> </p>
            </div>
        )
    }
});

module.exports = About;
