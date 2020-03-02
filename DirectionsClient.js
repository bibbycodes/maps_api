require('dotenv').config()
const axios = require('axios')

class DirectionsClient {
  constructor() {
    this.baseUrl = "https://maps.googleapis.com/maps/api/directions/json"
    this.dirKey = process.env.DIRECTIONS_KEY
  }

  async getDirections(origin, destination){
    let response = await axios.get(`${this.baseUrl}?origin=${origin}&destination=${destination}&key=${this.dirKey}`)
    return response.data
  }

  async travelTime(origin, destination) {
    let directions = await this.getDirections(origin, destination)
    let routes = directions.routes
    let timeSecs = 0
    for (let leg of routes[0].legs) {
      timeSecs += leg.duration.value
    }
    return timeSecs
  }
}

module.exports = DirectionsClient