var DirectionList = React.createClass({

  propTypes:{
    directions: React.PropTypes.array.isRequired,
  },


  onButtonClick: function(event){
    event.preventDefault();

    //select direciton to delete
    var direction = this.props.directions[{index}]

    this.props.onRemoveDirection({
      direction: direction
    })
  },


  render: function() {
    var directionNodes = this.props.directions.map(function (direction, index) {
      return (
        <Direction key={index} className='direction'> 
          <div className='id'> Direction #{direction.id} </div>
          <div className='origin'> Origin: {direction.origin} </div>
          <div className='destination'> Destination: {direction.destination} </div>
          <div className='duration'> Duration: {direction.duration} </div>
          <div className='distance'> Distance: {direction.distance} </div>
          <div className='mode'> By: {direction.mode} </div>
          <div></div>
        </Direction>
      );
    });

    return (
      <div className="directionList">
        {directionNodes}
      </div>
    );
  }

});


