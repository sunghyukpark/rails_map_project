var DirectionList = React.createClass({
  render: function() {
    var directionNodes = this.props.data.map(function (direction) {
      return (
        <Direction className='direction'> Direction #{direction.id}
          <div className='origin'> Origin: {direction.origin} </div>
          <div className='destination'> Destination: {direction.destination} </div>
          <div className='duration'> Duration: {direction.duration} </div>
          <div className='distance'> Distance: {direction.distance} </div>
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