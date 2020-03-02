const httpsProxyAgent = require('https-proxy-agent');
const axios = require('axios')

class ZillowClient {
  constructor() {
    this.baseUrl = " http://www.zillow.com/webservice/GetSearchResults.htm"
    this.apiKey = process.env('ZILLOW_API_KEY')
  }
}