# create-vite

- 创建项目 npm init vite@latest 找 [create-vite](https://www.npmjs.com/package/create-vite) 然后执行 create-vite
- 创建 5 个包，都会放在当前仓库中，都会发到 npm 去
  - lerna create vitel -y
  - lerna create @vitel/config -y
  - lerna create @vitel/create -y
  - lerna create @vitel/utils -y
  - lerna create @vitel/settings -y
- yarn install 安装第三方包和自己包的软链接
- vitel 命令
  - cd packages/vitel/
  - yarn link / npm link
  - yarn global bin 查看 yarn 命令的目录
  - npm bin -g 查看 npm 命令的目录

在我们这个 cli 中的
我们可动态的读取组织中的仓库和标签
支持 github gitee

vitel config 访问所有的配置
vitel config GIT_TYPE github 配置 git 类型
vitel config GIT_TYPE gitee 配置 git 类型
vitel config GIT_TYPE 访问 git 类型

vitel config ORG_NAME zhutemplate 配置组织名
vitel config ORG_NAME 访问组织名
