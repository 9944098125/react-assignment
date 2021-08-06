// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props

  return (
    <div className="match-details-list">
      <div className="upper-part">
        <div>
          <h1 className="comp-team">{matchDetails.competingTeam}</h1>
          <p className="date">{matchDetails.date}</p>
          <p className="venue">{matchDetails.venue}</p>
          <p className="venue">{matchDetails.manOfTheMatch}</p>
        </div>
        <img src={matchDetails.competingTeamLogo} alt="competing team logo" />
      </div>
      <br className="break" />
      <div className="down-part">
        <p className="inning">First Innings</p>
        <p className="small-innings">{matchDetails.firstInnings}</p>
        <p className="inning">Second Innings</p>
        <p className="small-innings">{matchDetails.secondInnings}</p>
        <p className="inning">{matchDetails.result}</p>
        <p className="small-innings">{matchDetails.umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
