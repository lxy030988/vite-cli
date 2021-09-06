#!/usr/bin/env node
const yargs = require('yargs/yargs')
const configCmd = require('@vitel/config/command')
const createCmd = require('@vitel/create/command')
async function main() {
  const cli = yargs()
  cli
    .usage(`Usage: vitel <command> [options]`)
    .demandCommand(1, '至少需要一个命令')
    .strict() //严格模式 没有这个命令的时候报错
    .recommendCommands() //显示推荐命令
    .command(configCmd)
    .command(createCmd)
    .parse(process.argv.slice(2))
}
main().catch((err) => {
  console.log('catch', err)
})

//process.argv命令行参数
//0 node可执行文件
//1 脚本自己
