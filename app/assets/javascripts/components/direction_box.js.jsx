var DirectionBox = React.createClass({

  propTypes:{
    directions:               React.PropTypes.array.isRequired,
    url:                      React.PropTypes.string.isRequired,
    request_forgery_token:    React.PropTypes.string.isRequired,           
    form_authenticity_token:  React.PropTypes.string.isRequired,             
  },


  getInitialState: function(){
    return {
      directions: this.props.directions
    }
  },


  onAddDirection: function(direction){
  	var directions = this.state.directions.concat([direction]);
    this.setState({directions:directions});

		$.ajax({
    	url: this.props.url+'.json',
      data: direction,
      type: 'POST',
      dataType: 'json',
      success: this.setDirections,
    });
  },

  setDirections: function(directions){
    this.setState({directions:directions});
  },



  render: function(){
    return (
      <div className="comment-box">
        <DirectionList directions={ this.state.directions } />
        <DirectionForm 
          url={this.props.url}
          request_forgery_token={this.props.request_forgery_token}
          form_authenticity_token={this.props.form_authenticity_token}
          onSubmit={this.onAddDirection} 
        />
      </div>
    );
  }
});



