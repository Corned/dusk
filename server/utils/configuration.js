require("dotenv").config()

module.exports = { 
  db_url: process.env.PRODUCTION_DATABASE_URL,
  port: process.env.PORT || process.env.PRODUCTION_PORT
}