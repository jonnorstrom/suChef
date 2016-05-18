var EventGrid = React.createClass({
  getImage: function(kitchen) {
    console.log(kitchen)
    if (kitchen.apprentice_id != null && kitchen.instructor_id == null) {
      return(<Sad/>)
    } else if (kitchen.apprentice_id == null && kitchen.instructor_id != null) {
      return(<Sad/>)
    } else {
      return(<Happy/>)
    }
  },
  getClasses: function(array) {
    return array.map(function(viewing, i) {
      var time = moment(viewing.starttime).format("dddd MMMM Do, [at] h:mm a").toString();
      var emails = "[{ id : '"+(viewing.instructor_email)+"', invite_type : 'EMAIL' },{ id : '"+(viewing.apprentice_email)+"', invite_type : 'EMAIL' }]"
      return (
        <div key={i} className="fillers">
        <div className="body">
          <p>{viewing.user_type} - {this.getImage(viewing)}</p>
        </div>
          <div className="body">
            <p>{viewing.dish}</p>
          </div>
          <div className="body">
            <p>{time}</p>
          </div>
          <div className="body">
            <div className="g-hangout" data-render="createhangout" data-invites={emails}></div>
          </div>
        </div>
        )
      }, this)
  },
  render: function() {

    return (
      <div className="my-events-grid">
        <div className="cal-headers">
        <div className="header">
          <p>Type/Role</p>
        </div>
          <div className="header">
            <p>Event</p>
          </div>
          <div className="header">
            <p>Time</p>
          </div>
          <div className="header">
            <p>Hangout link</p>
          </div>
        </div>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={2000}>
          {this.getClasses(this.props.profile.kitchen_hashes)}
        </ReactCSSTransitionGroup>
      </div>);
  }
})
