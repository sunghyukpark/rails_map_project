var DirectionBox = React.createClass({

  getInitialState: function () {
    return JSON.parse(this.props.data_json);
  },


  loadDirectionsFromServer: function(){
  	$.ajax({
  		url: JSON.parse(this.props.data_json).direction_form.action,
  		dataType:'json',
  		success: function(data){
  			this.setState({data: data});
  		}.bind(this)
  	})
  },


  handleDirectionSubmit: function (formData) {
    $.ajax({
      data: formData,
      url: JSON.parse(this.props.data_json).direction_form.action,
      type: 'POST',
      dataType: "json",
      success: function ( data ) {
        this.setState({ directions: data });
      }.bind(this)
    });
  },


  componentDidMount: function(){
  	this.loadDirectionsFromServer();
  },


  render: function () {
    return (
      <div className="comment-box">
        <DirectionList data= { this.state.directions } />
        <DirectionForm form={ this.state.direction_form } onDirectionSubmit={ this.handleDirectionSubmit } />
      </div>
    );
  }
});

// var DirectionBox = React.createClass({

// 	getInitialState: function(){
// 		var data = JSON.parse(this.props.data_json);
// 		return data;
// 	},

// 	componentDidMount: function(){
// 		$.ajax({

// 		})
// 	},

// 	render: function(){
// 		return (
// 			<div className='directionBox'>
// 				<DirectionList data={JSON.parse(this.props.data_json)}/>	
// 				<DirectionForm data={JSON.parse(this.props.data_json)}/>
// 			</div>
// 		);
// 	}
// });