const fs = require('fs-extra')
const path = require('path')
const { log, config } = require('@vitel/utils')
const { red } = require('chalk')
const { prompt } = require('inquirer')
async function factory(argv) {
  // console.log('process.cwd()', process.cwd())
  //cwd = C:\aproject\vite2\packages\create 执行factory函数的目录

  //1.创建项目目录 currentDirectory=test name=project1
  const { currentDirectory, name } = argv

  const { ORG_NAME } = config
  if (!ORG_NAME) {
    throw new Error(red('X') + '还没有设置组织名')
  }
  const targetDir = path.join(currentDirectory, name)
  // log.info('vitel', '准备创建的目录为 %s', targetDir)

  try {
    await fs.access(targetDir)
    const files = await fs.readdir(targetDir)
    if (files.length > 0) {
      //目录 不为空
      const { overwrite } = await prompt({
        type: 'confirm',
        name: 'overwrite',
        message: '目标目录非空，是否要移除已经存在的目录?'
      })
      console.log('overwrite', overwrite)
      if (overwrite) {
        await fs.emptyDir(targetDir)
      } else {
        throw new Error(red('X') + '操作被取消')
      }
    }
  } catch (error) {
    await fs.mkdirp(targetDir) //如果不存在会抛异常，创建目录
  }

  //准备好了一个空目录，等待拷贝文件了
  log.info('vitel', '%s 目录已经准备就绪', targetDir)
}
module.exports = factory
