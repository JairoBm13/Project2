import React from 'react'
import '../App.css';
import '../CSS/Table.css';
import '../CSS/stars.css';


class PlayerStatsView extends React.Component {
  state = {users: []}

  componentDidMount() {
    fetch('/players/' + this.props.params.name.split(' ')[1] + ' ' + this.props.params.name.split(' ')[0].charAt(0) + '.' + '/Results')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (

      <div className="App">
        <section id="playerCardSection">
          <div className="container py-3">
            <div className="card">
              <div className="row ">
                <div className="col-md-4">
                  <img style={{maxWidth: 300}}
                       src={this.props.location.query.url}
                       className="w-100"></img>
                </div>
                <div className="col-md-8 px-3">
                  <div className="card-block px-3">
                    <h3 className="card-title">{this.props.routeParams.name}</h3>
                    <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <br/>
                  <div className="row">
                      <div className="col-md-3 px-1">
                      <h5>Rate displayer:</h5>
                      </div>
                    <div className="col-md-5 px-3">
                     <fieldset className="rating">
                      <input type="radio" id="star5" name="rating" value="5" /><label className = "full" for="star5" title="Awesome - 5 stars"></label>
                      <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                      <input type="radio" id="star4" name="rating" value="4" /><label className = "full" for="star4" title="Pretty good - 4 stars"></label>
                      <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                      <input type="radio" id="star3" name="rating" value="3" /><label className = "full" for="star3" title="Meh - 3 stars"></label>
                      <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                      <input type="radio" id="star2" name="rating" value="2" /><label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
                      <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                      <input type="radio" id="star1" name="rating" value="1" /><label className = "full" for="star1" title="Sucks big time - 1 star"></label>
                      <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                      </fieldset>
                    </div>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/*TABLE*/}
        <table className="table-fill">
          <thead>
          <tr>
            <th className="text-left">Tournament</th>
            <th className="text-left">Series</th>
            <th className="text-left">Round</th>
            <th className="text-left">Surface</th>
            <th className="text-left">VS</th>
            <th className="text-left">Score</th>
          </tr>
          </thead>
          <tbody className="table-hover">
          {this.state.users.map((user, i) =>
            <tr>
              <td className="text-left">{user.Tournament}</td>
              <td className="text-left">{user.Series}</td>
              <td className="text-left">{user.Round}</td>
              <td className="text-left">{user.Surface}</td>
              {(() => {
                if (user.Winner === this.props.params.name.split(' ')[1]+' '+this.props.params.name.split(' ')[0].charAt(0)+'.')
                  return <td className="text-left">{user.Loser}</td>
                else
                  return <td className="text-left">{user.Winner}</td>
              })()}
              {(() => {
                var score ='';
                // if (user.Winner === this.props.params.name.split(' ')[1] + ' ' + this.props.params.name.split(' ')[0].charAt(0) + '.') {
                  //Player Lost
                  if (user.W1)
                    score += user.W1 + '-' + user.L1 + ' ';
                  if (user.W2)
                    score += user.W2 + '-' + user.L2 + ' ';
                  if (user.W3)
                    score += user.W3 + '-' + user.L3 + ' ';
                  if (user.W4)
                    score += user.W4 + '-' + user.L4 + ' ';
                  if (user.W5)
                    score += user.W5 + '-' + user.L5;
                // }
                return <td className="text-left">{score}</td>
              })()}
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PlayerStatsView;