const userhome = require('userhome')
const fs = require('fs-extra')
const { CONFIG_NAME } = require('@vitel/settings')
const configPath = userhome(CONFIG_NAME) //C:\Users\lxy/.vitel.json
let config = {}
if (fs.existsSync(configPath)) {
  config = fs.readJSONSync(configPath)
}
config.configPath = configPath
module.exports = config
