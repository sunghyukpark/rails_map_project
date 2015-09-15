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


  // onRemoveDirection: function(direction){
  //   var dIndex = parseInt(direction.target.value, 10);
  //   this.state.directions.splice(dIndex,1);
  //   this.setState({directions: this.state.directions});

  //   $.ajax({
  //     url: this.props.url+'.json',
  //     type: 'DELETE', 
  //     success: this.setDirections
  //   })

  // },


  render: function(){
    return (
      <div className="comment-box">
        <DirectionList 
          directions={ this.state.directions } 
          onRemoveDirection={this.onRemoveDirection} />
        <DirectionForm 
          url={this.props.url}
          request_forgery_token={this.props.request_forgery_token}
          form_authenticity_token={this.props.form_authenticity_token}
          onSubmit={this.onAddDirection} />
      </div>
    );
  }
});



