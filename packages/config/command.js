const { executeNodeScript } = require('@vitel/utils')
const { COMMAND_SOURCE } = require('@vitel/settings')
// <name> 必选项 [key]可选项 可给可不给   <>必选 []可选
const command = {
  command: 'config [key] [value]',
  describe: '设置或者查看配置项，GIT_TYPE表示仓库来源，ORG_NAME配置组织名称',
  builder: (yargs) => {},
  handler: async function (argv) {
    // require('./index.js')(argv)
    //在这时开启一个子进程执行命令
    //__dirname 当前config目录
    await executeNodeScript({ cwd: __dirname }, COMMAND_SOURCE, argv)
  }
}
module.exports = command
/**
 * vitel config    查看所有配置
 * vitel GIT_TYPE  查看GIT_TYPE
 * vitel GIT_TYPE  github 设置GIT_TYPE值为github
 */
