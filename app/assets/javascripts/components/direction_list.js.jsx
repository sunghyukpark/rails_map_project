var DirectionList = React.createClass({

  propTypes:{
    directions: React.PropTypes.array.isRequired,
  },


  removeDirection: function(){
    this.setState
  },


  render: function() {

    var directionNodes = this.props.directions.map(function (direction, index) {
      return (
        <Direction key={index} className='direction'> 
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


var RemoveDirectionButton = React.createClass({
  render: function(){
    return <button onClick={this.props.clickHandler}>remove</button> 
  }
})