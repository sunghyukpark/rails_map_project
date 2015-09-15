var DirectionForm = React.createClass({

  propTypes:{
    url: React.PropTypes.string.isRequired,
    request_forgery_token: React.PropTypes.string.isRequired,
    form_authenticity_token: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  },

	onSubmit: function(event){
		event.preventDefault();

		var originDOMNode      = this.refs.origin.getDOMNode();
		var destinationDOMNode = this.refs.destination.getDOMNode();
		var modeDOMNode        = this.refs.mode.getDOMNode();

		var origin      = originDOMNode.value.trim();
		var destination = destinationDOMNode.value.trim();
		var mode        = modeDOMNode.value.trim();

		// check validity
		if(!origin || !destination || !mode){
			return;
		};

		// data to be used for ajax request to server
		this.props.onSubmit({
			origin: origin, 
			destination: destination,
			mode: mode
		});


		// initializing form value
		originDOMNode.value      = '';
		destinationDOMNode.value = '';
		modeDOMNode.value        = '';

		return;
	},


	render: function(){
		return (
			<form ref='form' className='directionForm' action={this.props.url} method='post' onSubmit={this.onSubmit}>
				<input type="hidden" name={ this.props.request_forgery_token} value={ this.props.form_authenticity_token } />
			  <input type='text' name='origin' placeholder='From' defaultValue='633 Folsom St. San Francisco' ref='origin'/>
			  <input type='text' name='destination' placeholder='To' defaultValue='740 Webster st. San Francisco' ref='destination'/>
			  <input type='text' name='mode' placeholder='By' defaultValue='driving' ref='mode'/>
			  <input type='submit' value='Post' />
			</form>
		)
	}
})