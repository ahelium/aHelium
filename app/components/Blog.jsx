var React = require('react');
var _posts = require('../posts/posts');


var Post = React.createClass({

	render: function() {
		var title = this.props.postData.title;
		var content = this.props.postData.content;

		return (<div>
			<h3>{title}</h3>
			<p>{content}</p>
		</div>);
	}
})


var BlogHeader = React.createClass({

	render: function() {
		return (
            <div className="header">
            	<hr className="hr-bottom" /> 
            	<h3>a place for tiny problem solving</h3>
                <hr className="hr-bottom" />                                                             
            </div>
            );
	}
});

var Blog = React.createClass({

	getInitialState: function() {
		console.log(_posts)
		return {posts: _posts.posts}
	},

	render: function() {
		console.log("my state is", this.state.posts);
		return <div>
			<BlogHeader />
			{this.state.posts.map(function(post) {
					return <Post postData={post} />
				})}
		</div>
	}
});

module.exports = Blog;
