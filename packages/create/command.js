const { executeNodeScript } = require('@vitel/utils')
const { COMMAND_SOURCE } = require('@vitel/settings')

const command = {
  command: 'create <name>',
  describe: '创建项目',
  builder: (yargs) => {
    yargs.positional('name', {
      type: 'string',
      describe: '项目名称'
    })
  },
  handler: async function (argv) {
    //在这时开启一个子进程执行命令 你在哪个目录下执行命令，process.cwd()指向当前的工作目录
    let args = { name: argv.name, currentDirectory: process.cwd() }
    await executeNodeScript({ cwd: __dirname }, COMMAND_SOURCE, args)
  }
}
module.exports = command
