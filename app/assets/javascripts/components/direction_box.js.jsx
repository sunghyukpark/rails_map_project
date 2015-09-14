var DirectionBox = React.createClass({

	getInitialState: function(){
		var data = JSON.parse(this.props.data_json);
		return data;
	},

	componentDidMount: function(){
		$.ajax({

		})
	},

	render: function(){
		return (
			<div className='directionBox'>
				<DirectionList data={JSON.parse(this.props.data_json)}/>	
				<DirectionForm data={JSON.parse(this.props.data_json)}/>
			</div>
		);
	}
});