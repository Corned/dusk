require("dotenv").config()

module.exports = { 
  db_url: process.env.PRODUCTION_DATABASE_URL,
  port: process.env.PRODUCTION_PORT
}