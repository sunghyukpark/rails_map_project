var WelcomeGofast = React.createClass({
	render: function(){
		return (<h1>Welcome to GoFAST</h1>);
	}
});


// failed to load state
// loading state
// loaded state
// TodoLists = {
// 	load: function(id){
// 		return $.getJSON('/todo_lists/'+id);
// 	}
// }




// TodoList = React.createClass({
// 	propTypes:{
// 		todoListId: React.PropTypes.number.isRequired
// 	},

// 	getInitialState: function(){
// 		return {
// 			data: null, 
// 			error: null, 
// 		};
// 	},

// 	componentDidMount: function(){
// 		var request = $.getJSON('/todo_lists/'+this.props.todoListId);
// 		// var request = TodoLists.load(this.props.todoListId)
// 		request.done(this.onLoaded)
// 		request.done(this.onFailedToLoad)
// 	},


// 	onLoaded: function(data){
// 		this.setState({data: data});
// 	},


// 	onFailedToLoad: function(){
// 		this.setState({error: error});
// 	},


// 	render: function(){
// 		if(this.state.error){
// 			return React.DOM.div({}, 'Error Loading data: '+JSON.stringify(this.state.error));
// 		}

// 		if(this.state.data){
// 			return React.DOM.div({}, 'Loaded: '+JSON.stringify(this.state.data));
// 		}
// 	}

// })


// $.getJSON('/foo.js').then(function(data){

// }).catch(function(xhr){
// 	xhr.status
// })






