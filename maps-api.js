require('dotenv').config()
const util = require('util')
const axios = require('axios')

class Directions {
  constructor() {
    this.base_url = "https://maps.googleapis.com/maps/api/directions/json"
    this.dir_key = process.env.DIRECTIONS_KEY
  }

  async getDirections(origin, destination){
    let response = await axios.get(`${this.base_url}?origin=${origin}&destination=${destination}&key=${this.dir_key}`)
    return JSON.stringify(response.data)
  }
}

let directions = new Directions()

let dir = directions.getDirections("london", "paris")