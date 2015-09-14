var DirectionBox = React.createClass({

  

  getInitialState: function() {
    return JSON.parse(this.props.data_json);
  },


  // loadDirectionsFromServer: function(){
  // 	$.ajax({
  // 		url: JSON.parse(this.props.data_json).direction_form.action,
  // 		dataType:'json',
  // 		success: function(data){
  // 			this.setState({data: data});
  // 		}.bind(this)
  // 	})
  // },


  // componentDidMount: function(){
  //   this.loadDirectionsFromServer();
  // },


  handleDirectionSubmit: function(direction){
  	var directions = this.state.directions;
    var newDirections = directions.concat([direction]);
    this.setState({directions: newDirections});
    
		$.ajax({
    	url: JSON.parse(this.props.data_json).direction_form.action,
      data: direction,
      type: 'POST',
      dataType: "json",
      success: function(data){
        this.setState({ data: data });
      }.bind(this)
    });
  },

  render: function(){
    return (
      <div className="comment-box">
        <DirectionList data= { this.state.directions } />
        <DirectionForm form={ this.state.direction_form } onDirectionSubmit={ this.handleDirectionSubmit } />
      </div>
    );
  }
});



