import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsData: {}}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    console.log(isLoading)
    return (
      <div className="total-con">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="ipl-head">IPL Dashboard</h1>
        </div>
        <div className="team-list-container">
          {isLoading ? (
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          ) : (
            teamsData.map(item => <TeamCard teamsData={item} key={item.id} />)
          )}
        </div>
      </div>
    )
  }
}

export default Home
