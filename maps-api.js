require('dotenv').config()
const util = require('util')
const axios = require('axios')

class Directions {
  constructor() {
    this.baseUrl = "https://maps.googleapis.com/maps/api/directions/json"
    this.dirKey = process.env.DIRECTIONS_KEY
  }

  async getDirections(origin, destination){
    console.log(`${this.baseUrl}?origin=${origin}&destination=${destination}&key=${this.dirKey}`)
    let response = await axios.get(`${this.baseUrl}?origin=${origin}&destination=${destination}&key=${this.dirKey}`)
    return response.data
  }

  async travelTime(origin, destination) {
    let directions = await this.getDirections(origin, destination)
    let routes = directions.routes
    let timeSecs = 0
    for (let i = 0; i < routes[0].legs.length; i++) {
      timeSecs += routes[0].legs[i].duration.value
    } 
    return timeSecs
  }
}

let directions = new Directions()
let travelTime = directions.travelTime("London", "Manchester").then(res => console.log(res))