// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount = () => {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch(`https://apis.ccbp.in/team-matches/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamData: updatedData, isLoading: false})
  }

  renderTeamMatchesDetails = () => {
    const {teamData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <div className="team-matches-con">
        <img src={teamBannerUrl} alt="team banner" />
        <div className="latest-matches-list">
          <ul className="latest-match-details">
            {isLoading ? (
              <Loader type="Oval" color="#ffffff" height={80} width={80} />
            ) : (
              latestMatchDetails.map(eachDetail => (
                <LatestMatch key={eachDetail.id} matchDetails={eachDetail} />
              ))
            )}
          </ul>
        </div>
        {recentMatches.map(eachMatch => (
          <MatchCard key={eachMatch.id} oneCard={eachMatch} />
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="team-matches-container">
        {this.renderTeamMatchesDetails()}
      </div>
    )
  }
}

export default TeamMatches
