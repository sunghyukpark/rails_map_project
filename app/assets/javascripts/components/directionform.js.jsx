var DirectionForm = React.createClass({
	handleSubmit: function(e){
		e.preventDefault;

		var origin = React.findDOMNode(this.refs.origin).value.trim();
		var destination = React.findDOMNode(this.refs.destination).value.trim();
		var mode = React.findDOMNode(this.refs.mode).value.trim();

		// check validity
		if(!origin || !destination || !mode){
			return;
		};

		// declare formData to make ajax request to server
		var formData = $(this.refs.form.getDOMNode()).serialize();
		this.props.onDirectionSubmit(formData);


		// initializing form value
		React.findDOMNode(this.refs.origin).value = '';
		React.findDOMNode(this.refs.destination).value = '';
		React.findDOMNode(this.refs.mode).value = '';

		return;
	},


	render: function(){
		return (
			<form ref='form' className='directionForm' action={this.props.form.action} method='post' onSubmit={this.handleSubmit}>
				<input type="hidden" name={ this.props.form.request_forgery_token} value={ this.props.form.form_authenticity_token } />
			  <input type='text' name='origin' placeholder='From' ref='origin'/>
			  <input type='text' name='destination' placeholder='To' ref='destination'/>
			  <input type='text' name='mode' placeholder='By' ref='mode'/>
			  <input type='submit' value='Post' />
			</form>
		)
	}
})