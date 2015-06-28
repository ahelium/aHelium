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

var Blog = React.createClass({

	getInitialState: function() {
		console.log(_posts)
		return {posts: _posts.posts}
	},

	render: function() {
		console.log("my state is", this.state.posts);
		return <div>
			<h1>aHelium Blog</h1>
			{this.state.posts.map(function(post) {
					return <Post postData={post} whoa={"ffffuuuuck"} />
				})}
		</div>
	}
});

module.exports = Blog;
