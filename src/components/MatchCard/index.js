// Write your code here
import './index.css'

const MatchCard = props => {
  const {oneCard} = props
  return (
    <div className="matches-con">
      <img src={oneCard.competingTeamLogo} alt="match" />
      <h1 className="comp-team">{oneCard.competingTeam}</h1>
      <p className="match-details">{oneCard.result}</p>
      <p className="status">{oneCard.matchStatus}</p>
    </div>
  )
}

export default MatchCard
