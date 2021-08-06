// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="team-item-link">
      <div className="team-card-con">
        <img src={teamImageUrl} alt={name} />
        <h1 className="team-name">{name}</h1>
      </div>
    </Link>
  )
}

export default TeamCard
