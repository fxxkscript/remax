# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.10.6](https://github.com/remaxjs/remax/compare/v1.10.5...v1.10.6) (2019-12-19)

### Bug Fixes

- 修复当点击区域为阻止冒泡元素的子元素时，阻止冒泡失败的问题 ([d032d8d](https://github.com/remaxjs/remax/commit/d032d8d))
- 修复无法在 inline style 中使用 css3 var 特性的问题 ([e2d0dde](https://github.com/remaxjs/remax/commit/e2d0dde)), closes [#507](https://github.com/remaxjs/remax/issues/507)

## [1.10.5](https://github.com/remaxjs/remax/compare/v1.10.4...v1.10.5) (2019-12-19)

### Bug Fixes

- 修复原生组件编译文件丢失的问题 ([268ec7e](https://github.com/remaxjs/remax/commit/268ec7e))

## [1.10.4](https://github.com/remaxjs/remax/compare/v1.10.3...v1.10.4) (2019-12-18)

### Bug Fixes

- 修复当原生组件带有导出内容时编译报错的问题 ([c0f88c2](https://github.com/remaxjs/remax/commit/c0f88c2))

## [1.10.3](https://github.com/remaxjs/remax/compare/v1.10.2...v1.10.3) (2019-12-17)

### Bug Fixes

- 修复 watch 编译时原生自定义组件出错的问题 ([d171c1d](https://github.com/remaxjs/remax/commit/d171c1d))

## [1.10.2](https://github.com/remaxjs/remax/compare/v1.10.1...v1.10.2) (2019-12-15)

**Note:** Version bump only for package root

## [1.10.1](https://github.com/remaxjs/remax/compare/v1.10.0...v1.10.1) (2019-12-15)

### Bug Fixes

- 去除没有使用 ref 时原生自定义组件抛出无用的警告 ([89ccaa1](https://github.com/remaxjs/remax/commit/89ccaa1)), closes [#478](https://github.com/remaxjs/remax/issues/478)

# [1.10.0](https://github.com/remaxjs/remax/compare/v1.9.0...v1.10.0) (2019-12-13)

### Bug Fixes

- 修复 options.rootDir 读取错误的问题 ([b43a2cf](https://github.com/remaxjs/remax/commit/b43a2cf))
- 修复有嵌套的 node_modules 时，自定义组件构建错误的问题 ([04b00ae](https://github.com/remaxjs/remax/commit/04b00ae))
- 修复未使用 JSX 方式调用自定义组件报错的问题 ([#477](https://github.com/remaxjs/remax/issues/477)) ([1d31284](https://github.com/remaxjs/remax/commit/1d31284)), closes [#326](https://github.com/remaxjs/remax/issues/326)
- 当配置的页面不存在时有提醒信息 ([#483](https://github.com/remaxjs/remax/issues/483)) ([012a01d](https://github.com/remaxjs/remax/commit/012a01d)), closes [#482](https://github.com/remaxjs/remax/issues/482)

### Features

- 支持对 css 中的图片做 base64 处理 ([#460](https://github.com/remaxjs/remax/issues/460)) ([127fb88](https://github.com/remaxjs/remax/commit/127fb88)), closes [#448](https://github.com/remaxjs/remax/issues/448)

# [1.9.0](https://github.com/remaxjs/remax/compare/v1.8.0...v1.9.0) (2019-12-09)

### Bug Fixes

- 修复 async 语法解析错误的问题 ([#461](https://github.com/remaxjs/remax/issues/461)) ([c45ba2b](https://github.com/remaxjs/remax/commit/c45ba2b))
- 修复使用 redux 时 Class Component 的生命周期函数不触发的问题 ([#454](https://github.com/remaxjs/remax/issues/454)) ([8457c50](https://github.com/remaxjs/remax/commit/8457c50))
- 修复使用依赖 regeneratorRuntime lib 报错的问题 ([#457](https://github.com/remaxjs/remax/issues/457)) ([2a652c2](https://github.com/remaxjs/remax/commit/2a652c2)), closes [#451](https://github.com/remaxjs/remax/issues/451)

### Features

- 支持 typescript 3.7 ([#458](https://github.com/remaxjs/remax/issues/458)) ([2723504](https://github.com/remaxjs/remax/commit/2723504)), closes [#442](https://github.com/remaxjs/remax/issues/442)

# [1.8.0](https://github.com/remaxjs/remax/compare/v1.7.2...v1.8.0) (2019-12-05)

### Bug Fixes

- 修复 ts 的配置文件 watch 时无法更新的问题 ([6d1a040](https://github.com/remaxjs/remax/commit/6d1a040))
- 修复 ts 的配置文件没有被 watch 的问题 ([a5b009c](https://github.com/remaxjs/remax/commit/a5b009c))
- 修复 ts 配置文件不支持使用 export default 导出的问题 ([#447](https://github.com/remaxjs/remax/issues/447)) ([2157962](https://github.com/remaxjs/remax/commit/2157962))
- 修复使用 babel.config.js 配置 preset-remax 时项目出错的问题 ([9f41119](https://github.com/remaxjs/remax/commit/9f41119))

### Features

- babel-preset-remax 增加 decorators 和 class-properties 配置项 ([fe4d243](https://github.com/remaxjs/remax/commit/fe4d243))
- remax.config.js 支持 compressTemplate 配置 ([fbaa2b4](https://github.com/remaxjs/remax/commit/fbaa2b4)), closes [#416](https://github.com/remaxjs/remax/issues/416)

## [1.7.2](https://github.com/remaxjs/remax/compare/v1.7.1...v1.7.2) (2019-12-03)

### Bug Fixes

- 修复带 esmodule 标志的模块无法被正确引入的问题 ([ce9cec2](https://github.com/remaxjs/remax/commit/ce9cec2))

## [1.7.1](https://github.com/remaxjs/remax/compare/v1.7.0...v1.7.1) (2019-12-03)

### Bug Fixes

- 修复改变元素顺序后，渲染结果出错的问题 ([57632c9](https://github.com/remaxjs/remax/commit/57632c9))

# [1.7.0](https://github.com/remaxjs/remax/compare/v1.6.0...v1.7.0) (2019-12-02)

### Bug Fixes

- 修复改变元素顺序后，出现元素错乱的问题 ([#439](https://github.com/remaxjs/remax/issues/439)) ([0563194](https://github.com/remaxjs/remax/commit/0563194)), closes [#438](https://github.com/remaxjs/remax/issues/438)
- **cli:** 修复多个 CSS 文件引用同一图片时报错的问题 ([#408](https://github.com/remaxjs/remax/issues/408)) ([b4dbbef](https://github.com/remaxjs/remax/commit/b4dbbef)), closes [#407](https://github.com/remaxjs/remax/issues/407)

### Features

- 支持直接使用 react-redux/mobx-react ([#425](https://github.com/remaxjs/remax/issues/425)) ([8b3245a](https://github.com/remaxjs/remax/commit/8b3245a)), closes [#405](https://github.com/remaxjs/remax/issues/405)
- **babel-preset-remax:** 支持配置 TypeScript preset 参数 ([#420](https://github.com/remaxjs/remax/issues/420)) ([23939e1](https://github.com/remaxjs/remax/commit/23939e1)), closes [#417](https://github.com/remaxjs/remax/issues/417)
- 支持使用 TypeScript 写应用和页面配置文件 ([#400](https://github.com/remaxjs/remax/issues/400)) ([56a96e5](https://github.com/remaxjs/remax/commit/56a96e5)), closes [#280](https://github.com/remaxjs/remax/issues/280)

# [1.6.0](https://github.com/remaxjs/remax/compare/v1.6.0-beta.3...v1.6.0) (2019-11-29)

### Bug Fixes

- 修复不能正确引用带有 esModule 标识的 cjs 模块的问题 ([cf4a348](https://github.com/remaxjs/remax/commit/cf4a348))

# [1.6.0-beta.3](https://github.com/remaxjs/remax/compare/v1.6.0-beta.2...v1.6.0-beta.3) (2019-11-28)

**Note:** Version bump only for package root

# [1.6.0-beta.2](https://github.com/remaxjs/remax/compare/v1.6.0-beta.1...v1.6.0-beta.2) (2019-11-27)

### Bug Fixes

- 修复由于编译优化导致引入同一个原生组件的渲染错误 ([9952853](https://github.com/remaxjs/remax/commit/9952853))

# [1.6.0-beta.1](https://github.com/remaxjs/remax/compare/v1.6.0-beta.0...v1.6.0-beta.1) (2019-11-25)

### Bug Fixes

- 修复 v1.6.0-beta.0 wechat 平台不支持的错误 ([e16d4df](https://github.com/remaxjs/remax/commit/e16d4df))

# [1.6.0-beta.0](https://github.com/remaxjs/remax/compare/v1.5.2...v1.6.0-beta.0) (2019-11-22)

### Bug Fixes

- 修复 App 是函数组件时生命周期调用错误的问题 ([3a0a42d](https://github.com/remaxjs/remax/commit/3a0a42d))
- 修复 createHostComponent 参数类型 ([1d47523](https://github.com/remaxjs/remax/commit/1d47523))
- 修复 npm 包中 createHostComponent 不生效的问题 ([#393](https://github.com/remaxjs/remax/issues/393)) ([b6292a1](https://github.com/remaxjs/remax/commit/b6292a1))
- 修复 ts 引入的子组件中包含原生组件的渲染错误 ([dca8741](https://github.com/remaxjs/remax/commit/dca8741))
- 修正 App 组件被 HOC 包裹后无法触发生命周期回调的问题 ([#398](https://github.com/remaxjs/remax/issues/398)) ([98be559](https://github.com/remaxjs/remax/commit/98be559))
- 让开发者可以从 remax 导入组件的类型 ([#394](https://github.com/remaxjs/remax/issues/394)) ([2e12c04](https://github.com/remaxjs/remax/commit/2e12c04)), closes [#369](https://github.com/remaxjs/remax/issues/369)

### Features

- **alipay:** 支持获取小程序组件 ref ([a7fba88](https://github.com/remaxjs/remax/commit/a7fba88)), closes [#384](https://github.com/remaxjs/remax/issues/384)
- createHostComponent 支持定义 prop 别名 ([#392](https://github.com/remaxjs/remax/issues/392)) ([cccf477](https://github.com/remaxjs/remax/commit/cccf477))
- 支持开发者注册 host 组件 ([4ba9c45](https://github.com/remaxjs/remax/commit/4ba9c45)), closes [#293](https://github.com/remaxjs/remax/issues/293)
- **alipay:** 新增 Video 组件及相关 API ([#401](https://github.com/remaxjs/remax/issues/401)) ([35e039d](https://github.com/remaxjs/remax/commit/35e039d))

### Performance Improvements

- 优化编译速度 ([#388](https://github.com/remaxjs/remax/issues/388)) ([131519d](https://github.com/remaxjs/remax/commit/131519d))

## [1.5.2](https://github.com/remaxjs/remax/compare/v1.5.1...v1.5.2) (2019-11-20)

### Bug Fixes

- 修改引用多个相同小程序组件时构建错误的问题 ([#386](https://github.com/remaxjs/remax/issues/386)) ([da01293](https://github.com/remaxjs/remax/commit/da01293))

## [1.5.1](https://github.com/remaxjs/remax/compare/v1.5.0...v1.5.1) (2019-11-20)

### Bug Fixes

- 修复使用 TypeScript 时无法引用小程序组件的问题 ([#383](https://github.com/remaxjs/remax/issues/383)) ([db7a2d8](https://github.com/remaxjs/remax/commit/db7a2d8))

# [1.5.0](https://github.com/remaxjs/remax/compare/v1.4.7...v1.5.0) (2019-11-19)

### Bug Fixes

- **wechat:** 修复 spread 方式传递 Button 组件参数时 size 无效的问题 ([883d962](https://github.com/remaxjs/remax/commit/883d962)), closes [#375](https://github.com/remaxjs/remax/issues/375)
- 修复自定义组件重复引用的问题 ([#342](https://github.com/remaxjs/remax/issues/342)) ([#360](https://github.com/remaxjs/remax/issues/360)) ([1d0ec2d](https://github.com/remaxjs/remax/commit/1d0ec2d))

### Features

- rollupOptions 支持函数方式修改配置 ([#359](https://github.com/remaxjs/remax/issues/359)) ([53fbf8b](https://github.com/remaxjs/remax/commit/53fbf8b))
- 支持在 onClick 回调中使用 stopPropagation 阻止冒泡 ([#292](https://github.com/remaxjs/remax/issues/292)) ([09e006f](https://github.com/remaxjs/remax/commit/09e006f)), closes [#283](https://github.com/remaxjs/remax/issues/283)
- 新增配置 pxToRpx 用于设置是否转换 px 到 rpx ([dd73e13](https://github.com/remaxjs/remax/commit/dd73e13)), closes [#380](https://github.com/remaxjs/remax/issues/380) [#380](https://github.com/remaxjs/remax/issues/380) [#381](https://github.com/remaxjs/remax/issues/381) [#381](https://github.com/remaxjs/remax/issues/381) [#381](https://github.com/remaxjs/remax/issues/381)

## [1.4.7](https://github.com/remaxjs/remax/compare/v1.4.6...v1.4.7) (2019-11-19)

**Note:** Version bump only for package root

## [1.4.6](https://github.com/remaxjs/remax/compare/v1.4.5...v1.4.6) (2019-11-18)

### Bug Fixes

- 修复原生组件驼峰风格，React 风格函数属性转换错误的问题 ([#358](https://github.com/remaxjs/remax/issues/358)) ([5a789fc](https://github.com/remaxjs/remax/commit/5a789fc)), closes [#357](https://github.com/remaxjs/remax/issues/357)

## [1.4.5](https://github.com/remaxjs/remax/compare/v1.4.4...v1.4.5) (2019-11-15)

### Bug Fixes

- build 时无法正确清理自定义 output 目录的问题 ([6545a47](https://github.com/remaxjs/remax/commit/6545a47))
- 带有 src 目录的 npm 包小程序组件构建错误的问题 ([#356](https://github.com/remaxjs/remax/issues/356)) ([4f3f53e](https://github.com/remaxjs/remax/commit/4f3f53e)), closes [#346](https://github.com/remaxjs/remax/issues/346)

## [1.4.4](https://github.com/remaxjs/remax/compare/v1.4.3...v1.4.4) (2019-11-14)

### Bug Fixes

- 找不到 regenerator-runtime 的问题 ([#351](https://github.com/remaxjs/remax/issues/351)) ([03dbf3d](https://github.com/remaxjs/remax/commit/03dbf3d))

## [1.4.3](https://github.com/remaxjs/remax/compare/v1.4.2...v1.4.3) (2019-11-14)

### Bug Fixes

- **wechat:** 修正 ScrollView 组件类型 ([84e3c91](https://github.com/remaxjs/remax/commit/84e3c91))
- 修复小程序组件引入错误 ([7c07e2d](https://github.com/remaxjs/remax/commit/7c07e2d))

## [1.4.2](https://github.com/remaxjs/remax/compare/v1.4.1...v1.4.2) (2019-11-13)

### Bug Fixes

- **wechat:** 修正 wx:key 的警告 ([4806635](https://github.com/remaxjs/remax/commit/4806635)), closes [#332](https://github.com/remaxjs/remax/issues/332)
- 修复 node 10.10 打包出现 mkdir 的错误 ([7f4c3e2](https://github.com/remaxjs/remax/commit/7f4c3e2)), closes [#331](https://github.com/remaxjs/remax/issues/331)
- 修复钉钉小程序使用原生组件渲染错乱的问题 ([e38f578](https://github.com/remaxjs/remax/commit/e38f578)), closes [#316](https://github.com/remaxjs/remax/issues/316)
- 完善支付宝 Button 组件 type 定义 ([#340](https://github.com/remaxjs/remax/issues/340)) ([77900ce](https://github.com/remaxjs/remax/commit/77900ce))
- 自定义组件会重复引用的问题 ([9c05961](https://github.com/remaxjs/remax/commit/9c05961)), closes [#342](https://github.com/remaxjs/remax/issues/342)
- 自定义组件路径带有 @ 时构建错误的问题 ([63c0ddb](https://github.com/remaxjs/remax/commit/63c0ddb))

## [1.4.1](https://github.com/remaxjs/remax/compare/v1.4.0...v1.4.1) (2019-11-11)

### Bug Fixes

- 修复支付宝 view 缺少 slot 属性导致原生组件 slot 不生效的问题 ([b89c721](https://github.com/remaxjs/remax/commit/b89c721))

# [1.4.0](https://github.com/remaxjs/remax/compare/v1.3.1...v1.4.0) (2019-11-11)

### Bug Fixes

- 修复 dataset 属性失效的问题 ([68af03b](https://github.com/remaxjs/remax/commit/68af03b))
- 修复 inline style 单位 px 没有转换成 rpx 的问题 ([b5a366a](https://github.com/remaxjs/remax/commit/b5a366a)), closes [#320](https://github.com/remaxjs/remax/issues/320)
- 修复多次切换页面导致加载速度变慢的问题 ([1f93d18](https://github.com/remaxjs/remax/commit/1f93d18)), closes [#304](https://github.com/remaxjs/remax/issues/304)

### Features

- add remax version check in project ([#325](https://github.com/remaxjs/remax/issues/325)) ([6ab19ce](https://github.com/remaxjs/remax/commit/6ab19ce))

## [1.3.1](https://github.com/remaxjs/remax/compare/v1.3.0...v1.3.1) (2019-11-04)

### Bug Fixes

- 修正 virtual modules 导致的构建错误 ([08ac82b](https://github.com/remaxjs/remax/commit/08ac82b))

# [1.3.0](https://github.com/remaxjs/remax/compare/v1.2.2...v1.3.0) (2019-11-04)

### Bug Fixes

- **wechat:** 设置 Navigator 组件 openType 默认值为 navigate ([e2fe7cc](https://github.com/remaxjs/remax/commit/e2fe7cc))
- page lifecye pageScroll callback‘s params is undefined issue ([a36d79d](https://github.com/remaxjs/remax/commit/a36d79d))
- 修复 css 中 base64 的路径会被修改的问题 ([b6ca1f0](https://github.com/remaxjs/remax/commit/b6ca1f0))
- 修复 watch 时 rebuild 没有清理掉多余的属性 ([8e52818](https://github.com/remaxjs/remax/commit/8e52818))
- 修复 windows 下图片引入路径错误的问题 ([#312](https://github.com/remaxjs/remax/issues/312)) ([0b75693](https://github.com/remaxjs/remax/commit/0b75693)), closes [#311](https://github.com/remaxjs/remax/issues/311)
- 修复每个测试收集到的 props 会串起来的问题 ([31b6201](https://github.com/remaxjs/remax/commit/31b6201))

### Features

- 增加从插件引用组件的功能 ([639391b](https://github.com/remaxjs/remax/commit/639391b))

### Performance Improvements

- **cli:** 关闭 tree shaking 提升开发环境编译速度 ([698dbe2](https://github.com/remaxjs/remax/commit/698dbe2)), closes [#298](https://github.com/remaxjs/remax/issues/298)

## [1.2.2](https://github.com/remaxjs/remax/compare/v1.2.1...v1.2.2) (2019-10-22)

### Bug Fixes

- native 文件 copy 时没有遵从 options.ouput 的配置 ([99fd382](https://github.com/remaxjs/remax/commit/99fd382))
- **alipay:** 修复 catchClick ([5897266](https://github.com/remaxjs/remax/commit/5897266))

## [1.2.1](https://github.com/remaxjs/remax/compare/v1.2.0...v1.2.1) (2019-10-16)

### Bug Fixes

- 修复 style 性质的属性没有转换成内联样式的问题 ([e2bc745](https://github.com/remaxjs/remax/commit/e2bc745)), closes [#281](https://github.com/remaxjs/remax/issues/281)

# [1.2.0](https://github.com/remaxjs/remax/compare/v1.2.0-beta.0...v1.2.0) (2019-10-14)

### Bug Fixes

- 修正 jsx 解析错误 ([4b71e7c](https://github.com/remaxjs/remax/commit/4b71e7c))
- 修正 module import 错误 ([e27547e](https://github.com/remaxjs/remax/commit/e27547e))

# [1.2.0-beta.0](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.3...v1.2.0-beta.0) (2019-10-14)

### Bug Fixes

- **alipay:** 完善接口的 promise 类型 ([e6862f2](https://github.com/remaxjs/remax/commit/e6862f2))
- **wechat:** 修复 Slider 组件 max 属性的默认值为 100 ([5f0ba37](https://github.com/remaxjs/remax/commit/5f0ba37))

### Features

- 支持引用小程序自定义组件 ([#270](https://github.com/remaxjs/remax/issues/270)) ([61d2aac](https://github.com/remaxjs/remax/commit/61d2aac))

# [1.2.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.2...v1.2.0-alpha.3) (2019-10-11)

**Note:** Version bump only for package root

# [1.2.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.1...v1.2.0-alpha.2) (2019-10-11)

**Note:** Version bump only for package root

**Note:** Version bump only for package root

**Note:** Version bump only for package root

# [1.2.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.2.0-alpha.1...v1.2.0-alpha.2) (2019-10-11)

**Note:** Version bump only for package root

# [1.2.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.1.3...v1.2.0-alpha.1) (2019-10-11)

### Bug Fixes

- **wechat:** 修复 Slider 组件默认值错误的问题 ([f14ce42](https://github.com/remaxjs/remax/commit/f14ce42)), closes [#273](https://github.com/remaxjs/remax/issues/273)
- 修复 rebuild 时不存在的属性依然残留的问题 ([3bc0f71](https://github.com/remaxjs/remax/commit/3bc0f71)), closes [#266](https://github.com/remaxjs/remax/issues/266)
- 修复 rebuild 读取到错误的 remax config 文件的问题 ([#265](https://github.com/remaxjs/remax/issues/265)) ([6b97092](https://github.com/remaxjs/remax/commit/6b97092)), closes [#263](https://github.com/remaxjs/remax/issues/263)
- 修复 windows 下跨平台开发会引入错误平台代码的问题 ([5f49e57](https://github.com/remaxjs/remax/commit/5f49e57)), closes [#206](https://github.com/remaxjs/remax/issues/206)
- 修复跨平台开发 esm build 结果报错的问题 ([cc5cd34](https://github.com/remaxjs/remax/commit/cc5cd34))
- **wechat:** 修复 Textarea focus 状态错乱的问题 ([f2c1dbf](https://github.com/remaxjs/remax/commit/f2c1dbf)), closes [#241](https://github.com/remaxjs/remax/issues/241)
- 修复内联样式 vendor prefix 解析错误的问题 ([988722b](https://github.com/remaxjs/remax/commit/988722b)), closes [#259](https://github.com/remaxjs/remax/issues/259)
- 修正 windows 上 css 图片路径 ([12a3669](https://github.com/remaxjs/remax/commit/12a3669)), closes [#235](https://github.com/remaxjs/remax/issues/235)

### Features

- 支持自定义 babel 配置 ([8afee36](https://github.com/remaxjs/remax/commit/8afee36))
- 新增 rootDir 配置，允许设置源码目录 ([#262](https://github.com/remaxjs/remax/issues/262)) ([59a47f2](https://github.com/remaxjs/remax/commit/59a47f2))

**Note:** Version bump only for package root

**Note:** Version bump only for package root

# [1.2.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.1.3...v1.2.0-alpha.1) (2019-10-11)

### Bug Fixes

- **wechat:** 修复 Slider 组件默认值错误的问题 ([f14ce42](https://github.com/remaxjs/remax/commit/f14ce42)), closes [#273](https://github.com/remaxjs/remax/issues/273)
- 修复 rebuild 时不存在的属性依然残留的问题 ([3bc0f71](https://github.com/remaxjs/remax/commit/3bc0f71)), closes [#266](https://github.com/remaxjs/remax/issues/266)
- 修复 rebuild 读取到错误的 remax config 文件的问题 ([#265](https://github.com/remaxjs/remax/issues/265)) ([6b97092](https://github.com/remaxjs/remax/commit/6b97092)), closes [#263](https://github.com/remaxjs/remax/issues/263)
- 修复 windows 下跨平台开发会引入错误平台代码的问题 ([5f49e57](https://github.com/remaxjs/remax/commit/5f49e57)), closes [#206](https://github.com/remaxjs/remax/issues/206)
- 修复跨平台开发 esm build 结果报错的问题 ([cc5cd34](https://github.com/remaxjs/remax/commit/cc5cd34))
- **wechat:** 修复 Textarea focus 状态错乱的问题 ([f2c1dbf](https://github.com/remaxjs/remax/commit/f2c1dbf)), closes [#241](https://github.com/remaxjs/remax/issues/241)
- 修复内联样式 vendor prefix 解析错误的问题 ([988722b](https://github.com/remaxjs/remax/commit/988722b)), closes [#259](https://github.com/remaxjs/remax/issues/259)
- 修正 windows 上 css 图片路径 ([12a3669](https://github.com/remaxjs/remax/commit/12a3669)), closes [#235](https://github.com/remaxjs/remax/issues/235)

### Features

- 支持自定义 babel 配置 ([8afee36](https://github.com/remaxjs/remax/commit/8afee36))
- 新增 rootDir 配置，允许设置源码目录 ([#262](https://github.com/remaxjs/remax/issues/262)) ([59a47f2](https://github.com/remaxjs/remax/commit/59a47f2))

## [1.1.3](https://github.com/remaxjs/remax/compare/v1.1.2...v1.1.3) (2019-09-30)

### Bug Fixes

- 修复 rebuild 读取到错误的 remax config 文件的问题 ([#265](https://github.com/remaxjs/remax/issues/265)) ([5c28c5c](https://github.com/remaxjs/remax/commit/5c28c5c)), closes [#263](https://github.com/remaxjs/remax/issues/263)
- 修复内联样式 vendor prefix 解析错误的问题 ([1e7997d](https://github.com/remaxjs/remax/commit/1e7997d)), closes [#259](https://github.com/remaxjs/remax/issues/259)

# [1.2.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.1.2...v1.2.0-alpha.0) (2019-09-30)

### Bug Fixes

- getAlias ([924736d](https://github.com/remaxjs/remax/commit/924736d))
- 修复 ci 报错 ([3f46009](https://github.com/remaxjs/remax/commit/3f46009))
- 修复找不到 dot-props 依赖 ([4ce1af0](https://github.com/remaxjs/remax/commit/4ce1af0))

### Features

- 修改头条小程序的模板适配原生组件 ([3436245](https://github.com/remaxjs/remax/commit/3436245))
- 修改支付宝和微信适配原生组件 ([0b4ce79](https://github.com/remaxjs/remax/commit/0b4ce79))
- 完成引入原生小程序的功能 ([99a2cdb](https://github.com/remaxjs/remax/commit/99a2cdb))
- 支持 config.js 写 esm ([361cb4e](https://github.com/remaxjs/remax/commit/361cb4e))
- 新增 rootDir 配置，允许设置源码目录 ([#262](https://github.com/remaxjs/remax/issues/262)) ([59a47f2](https://github.com/remaxjs/remax/commit/59a47f2))

## [1.1.2](https://github.com/remaxjs/remax/compare/v1.1.1...v1.1.2) (2019-09-27)

### Bug Fixes

- 修复在 App 上使用 Context 导致页面回调出错的问题 ([56fcc2f](https://github.com/remaxjs/remax/commit/56fcc2f)), closes [#256](https://github.com/remaxjs/remax/issues/256)

### Performance Improvements

- optimize using promise/key ([#258](https://github.com/remaxjs/remax/issues/258)) ([25c60ad](https://github.com/remaxjs/remax/commit/25c60ad))

## [1.1.1](https://github.com/remaxjs/remax/compare/v1.1.0...v1.1.1) (2019-09-24)

### Bug Fixes

- 修复跨平台开发时，type 定义冲突的问题 ([#245](https://github.com/remaxjs/remax/issues/245)) ([0594a90](https://github.com/remaxjs/remax/commit/0594a90)), closes [#227](https://github.com/remaxjs/remax/issues/227)
- **wechat:** 完善 Input, Pick 组件类型 ([c1e5614](https://github.com/remaxjs/remax/commit/c1e5614))
- 修正环境变量替换导致的语法错误 ([5a5c020](https://github.com/remaxjs/remax/commit/5a5c020))

## [1.1.1](https://github.com/remaxjs/remax/compare/v1.1.0...v1.1.1) (2019-09-24)

### Bug Fixes

- 修复跨平台开发时，type 定义冲突的问题 ([#245](https://github.com/remaxjs/remax/issues/245)) ([0594a90](https://github.com/remaxjs/remax/commit/0594a90)), closes [#227](https://github.com/remaxjs/remax/issues/227)
- **wechat:** 完善 Input, Pick 组件类型 ([c1e5614](https://github.com/remaxjs/remax/commit/c1e5614))
- 修正环境变量替换导致的语法错误 ([5a5c020](https://github.com/remaxjs/remax/commit/5a5c020))

# [1.1.0](https://github.com/remaxjs/remax/compare/v1.0.18...v1.1.0) (2019-09-22)

### Bug Fixes

- 修复 scope 包的引用错误 ([#211](https://github.com/remaxjs/remax/issues/211)) ([f2e8cb7](https://github.com/remaxjs/remax/commit/f2e8cb7))
- 修正微信 Image mode 属性 type 定义 ([#240](https://github.com/remaxjs/remax/issues/240)) ([c1b5687](https://github.com/remaxjs/remax/commit/c1b5687))
- **wechat:** 添加微信遗漏的云开发 API ([#247](https://github.com/remaxjs/remax/issues/247)) ([4298813](https://github.com/remaxjs/remax/commit/4298813)), closes [#246](https://github.com/remaxjs/remax/issues/246)

### Features

- 新增 postcss 配置项 ([#233](https://github.com/remaxjs/remax/issues/233)) ([646a03d](https://github.com/remaxjs/remax/commit/646a03d))

# [1.1.0-alpha.5](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.4...v1.1.0-alpha.5) (2019-09-07)

# [1.1.0-alpha.4](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.3...v1.1.0-alpha.4) (2019-09-07)

# [1.1.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.2...v1.1.0-alpha.3) (2019-09-07)

### Bug Fixes

- regenerator-runtime 报错的问题 ([fa4cc68](https://github.com/remaxjs/remax/commit/fa4cc68))
- 修复直接从 node_modules export 路径出错的问题 ([f586ea7](https://github.com/remaxjs/remax/commit/f586ea7))
- 删除头条里没必要的 api ([f5af7aa](https://github.com/remaxjs/remax/commit/f5af7aa))
- 完善头条组件定义 ([aaf3a27](https://github.com/remaxjs/remax/commit/aaf3a27))

# [1.1.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.0.15...v1.1.0-alpha.2) (2019-09-05)

### Bug Fixes

- rewrite alias config for folders other than src ([71bcb3b](https://github.com/remaxjs/remax/commit/71bcb3b))

### Features

- 新增 unstable_batchedUpdates ([5b485b4](https://github.com/remaxjs/remax/commit/5b485b4))

### Performance Improvements

- 精简头条的 template ([25872a1](https://github.com/remaxjs/remax/commit/25872a1))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://github.com/remaxjs/remax/issues/182)) ([d46af4e](https://github.com/remaxjs/remax/commit/d46af4e))

### Features

- 支持 App 是一个 React 组件 ([9b5bc84](https://github.com/remaxjs/remax/commit/9b5bc84))

# [1.1.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持在运行时访问 REMAX*APP* 开头的环境变量 ([b8fb287](https://github.com/remaxjs/remax/commit/b8fb287))
- 支持字节跳动小程序 ([d7adadc](https://github.com/remaxjs/remax/commit/d7adadc))

## [1.0.18](https://github.com/remaxjs/remax/compare/v1.0.17...v1.0.18) (2019-09-18)

### Bug Fixes

- 修复模版生成错误 ([89e7024](https://github.com/remaxjs/remax/commit/89e7024)), closes [#238](https://github.com/remaxjs/remax/issues/238)

## [1.0.17](https://github.com/remaxjs/remax/compare/v1.0.16...v1.0.17) (2019-09-18)

### Bug Fixes

- remove regenerator-runtime ([cd33ad9](https://github.com/remaxjs/remax/commit/cd33ad9))
- 修复 scope 包的引用错误 ([#211](https://github.com/remaxjs/remax/issues/211)) ([fd7d542](https://github.com/remaxjs/remax/commit/fd7d542))
- 修复 css 中使用网络图片报错的问题 ([#237](https://github.com/remaxjs/remax/issues/237)) ([d02c1db](https://github.com/remaxjs/remax/commit/d02c1db))
- 修复无法使用 catch 事件和 dataset 的问题 ([44485b4](https://github.com/remaxjs/remax/commit/44485b4)), closes [#219](https://github.com/remaxjs/remax/issues/219) [#231](https://github.com/remaxjs/remax/issues/231)

### Features

- 使用新的 this.emitFile api 生成文件 ([941f522](https://github.com/remaxjs/remax/commit/941f522))

# [1.1.0-alpha.5](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.4...v1.1.0-alpha.5) (2019-09-07)

**Note:** Version bump only for package root

# [1.1.0-alpha.4](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.3...v1.1.0-alpha.4) (2019-09-07)

**Note:** Version bump only for package root

# [1.1.0-alpha.3](https://github.com/remaxjs/remax/compare/v1.1.0-alpha.2...v1.1.0-alpha.3) (2019-09-07)

### Bug Fixes

- regenerator-runtime 报错的问题 ([fa4cc68](https://github.com/remaxjs/remax/commit/fa4cc68))
- 修复直接从 node_modules export 路径出错的问题 ([f586ea7](https://github.com/remaxjs/remax/commit/f586ea7))
- 删除头条里没必要的 api ([f5af7aa](https://github.com/remaxjs/remax/commit/f5af7aa))
- 完善头条组件定义 ([aaf3a27](https://github.com/remaxjs/remax/commit/aaf3a27))

# [1.1.0-alpha.2](https://github.com/remaxjs/remax/compare/v1.0.15...v1.1.0-alpha.2) (2019-09-05)

### Bug Fixes

- rewrite alias config for folders other than src ([71bcb3b](https://github.com/remaxjs/remax/commit/71bcb3b))
- 修复带有 \_\_esModule 标示的 cjs 模块不能正确 import 的问题 ([f98b0ca](https://github.com/remaxjs/remax/commit/f98b0ca))
- 修正支付宝 api 类型定义 ([844624a](https://github.com/remaxjs/remax/commit/844624a))

### Features

- 新增 unstable_batchedUpdates ([5b485b4](https://github.com/remaxjs/remax/commit/5b485b4))

### Performance Improvements

- 精简头条的 template ([25872a1](https://github.com/remaxjs/remax/commit/25872a1))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://github.com/remaxjs/remax/issues/182)) ([d46af4e](https://github.com/remaxjs/remax/commit/d46af4e))

### Features

- 支持 App 是一个 React 组件 ([9b5bc84](https://github.com/remaxjs/remax/commit/9b5bc84))

# [1.1.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持在运行时访问 REMAX*APP* 开头的环境变量 ([b8fb287](https://github.com/remaxjs/remax/commit/b8fb287))
- 支持字节跳动小程序 ([d7adadc](https://github.com/remaxjs/remax/commit/d7adadc))

# [1.1.0-alpha.1](https://github.com/remaxjs/remax/compare/v1.0.11...v1.1.0-alpha.1) (2019-09-02)

### Bug Fixes

- add toutiao getIcons function ([#182](https://github.com/remaxjs/remax/issues/182)) ([d46af4e](https://github.com/remaxjs/remax/commit/d46af4e))
- 修复 jsx 后缀报错的问题 ([88d0668](https://github.com/remaxjs/remax/commit/88d0668))

### Features

- 支持 App 是一个 React 组件 ([9b5bc84](https://github.com/remaxjs/remax/commit/9b5bc84))

# [1.1.0-alpha.0](https://github.com/remaxjs/remax/compare/v1.0.6...v1.1.0-alpha.0) (2019-08-28)

### Features

- 支持在运行时访问 REMAX*APP* 开头的环境变量 ([b8fb287](https://github.com/remaxjs/remax/commit/b8fb287))
- 支持字节跳动小程序 ([d7adadc](https://github.com/remaxjs/remax/commit/d7adadc))

## [1.0.16](https://github.com/remaxjs/remax/compare/v1.0.15...v1.0.16) (2019-09-16)

### Bug Fixes

- 修复 onReady 回调 ([f6e276d](https://github.com/remaxjs/remax/commit/f6e276d)), closes [#203](https://github.com/remaxjs/remax/issues/203)
- 修复带有 \_\_esModule 标示的 cjs 模块不能正确 import 的问题 ([f98b0ca](https://github.com/remaxjs/remax/commit/f98b0ca))
- **wechat:** 更正 Image 和 Button 的 type 定义 ([7ba51d3](https://github.com/remaxjs/remax/commit/7ba51d3))
- 修复编译后图片路径不对的问题 ([#225](https://github.com/remaxjs/remax/issues/225)) ([b05acc6](https://github.com/remaxjs/remax/commit/b05acc6)), closes [#224](https://github.com/remaxjs/remax/issues/224)
- 修复较为动态地使用 Remax 组件时可能不会渲染的问题 ([bfc3201](https://github.com/remaxjs/remax/commit/bfc3201))
- 修正支付宝 api 类型定义 ([844624a](https://github.com/remaxjs/remax/commit/844624a))

## [1.0.15](https://github.com/remaxjs/remax/compare/v1.0.14...v1.0.15) (2019-09-04)

### Bug Fixes

- 修复 npm 中带有非 js 后缀文件时支付宝小程序无法上传的问题 ([e53e0b9](https://github.com/remaxjs/remax/commit/e53e0b9))
- 支付宝 css 背景图片支持相对路径写法 ([#198](https://github.com/remaxjs/remax/issues/198)) ([8f01e64](https://github.com/remaxjs/remax/commit/8f01e64))

## [1.0.14](https://github.com/remaxjs/remax/compare/v1.0.13...v1.0.14) (2019-09-03)

### Bug Fixes

- 修复支付宝 Button 组件缺少的 style 属性 ([9e52a2d](https://github.com/remaxjs/remax/commit/9e52a2d))
- 修复支付宝组件无法接受动态传递 props 的问题 ([9d26dd2](https://github.com/remaxjs/remax/commit/9d26dd2))
- 修正微信组件及 API 类型定义 ([4630ff4](https://github.com/remaxjs/remax/commit/4630ff4))

## [1.0.13](https://github.com/remaxjs/remax/compare/v1.0.12...v1.0.13) (2019-09-02)

### Bug Fixes

- 修复生命周期 hooks 里的闭包变量不更新的问题 ([3b5e039](https://github.com/remaxjs/remax/commit/3b5e039))

## [1.0.12](https://github.com/remaxjs/remax/compare/v1.0.11...v1.0.12) (2019-09-02)

### Bug Fixes

- 修复 jsx 后缀报错的问题 ([88d0668](https://github.com/remaxjs/remax/commit/88d0668))
- 修正带有 @ 的文件夹无法在支付宝里上传的问题 ([b998304](https://github.com/remaxjs/remax/commit/b998304))

## [1.0.11](https://github.com/remaxjs/remax/compare/v1.0.10...v1.0.11) (2019-08-31)

### Bug Fixes

- rollup watch [#148](https://github.com/remaxjs/remax/issues/148) ([f2f15ba](https://github.com/remaxjs/remax/commit/f2f15ba))
- 修复 app.config.js 没有被 watch 的问题 ([b88cfc8](https://github.com/remaxjs/remax/commit/b88cfc8))
- 修复 watch 状态下删除 dist 目录导致小程序本身构建进程奔溃的问题 ([921846d](https://github.com/remaxjs/remax/commit/921846d))
- 修复微信 api 的类型定义 ([49e8d34](https://github.com/remaxjs/remax/commit/49e8d34))
- 修复支付宝 css 无法引用本地图片的问题 ([#191](https://github.com/remaxjs/remax/issues/191)) ([9b6b501](https://github.com/remaxjs/remax/commit/9b6b501)), closes [#186](https://github.com/remaxjs/remax/issues/186)
- 完善微信组件类型定义 ([#161](https://github.com/remaxjs/remax/issues/161)) ([356fcbf](https://github.com/remaxjs/remax/commit/356fcbf))

## [1.0.10](https://github.com/remaxjs/remax/compare/v1.0.9...v1.0.10) (2019-08-30)

### Bug Fixes

- 修复 Windows 下的路径转换错误 ([1045a5b](https://github.com/remaxjs/remax/commit/1045a5b)), closes [#183](https://github.com/remaxjs/remax/issues/183)
- 修复支付宝基础组件类型 ([1b30b49](https://github.com/remaxjs/remax/commit/1b30b49))

## [1.0.9](https://github.com/remaxjs/remax/compare/v1.0.8...v1.0.9) (2019-08-29)

### Bug Fixes

- 修复 async/await 报错 ([e1912a2](https://github.com/remaxjs/remax/commit/e1912a2))

## [1.0.8](https://github.com/remaxjs/remax/compare/v1.0.7...v1.0.8) (2019-08-28)

### Bug Fixes

- 修复 tabBar 配置 iconPath 无效的问题 ([b1efe2f](https://github.com/remaxjs/remax/commit/b1efe2f)), closes [#150](https://github.com/remaxjs/remax/issues/150)
- 修复页面组件不能命名为 Page 的问题 ([9237dac](https://github.com/remaxjs/remax/commit/9237dac)), closes [#158](https://github.com/remaxjs/remax/issues/158)

## [1.0.7](https://github.com/remaxjs/remax/compare/v1.0.6...v1.0.7) (2019-08-28)

### Bug Fixes

- 修正 async/await 报错问题 ([423f30d](https://github.com/remaxjs/remax/commit/423f30d))
- 修正支付宝 events 事件不触发的问题 ([dbf6e09](https://github.com/remaxjs/remax/commit/dbf6e09))
- 修正支付宝组件的类型定义 ([#154](https://github.com/remaxjs/remax/issues/154)) ([9050ca1](https://github.com/remaxjs/remax/commit/9050ca1))

## [1.0.6](https://github.com/remaxjs/remax/compare/v1.0.5...v1.0.6) (2019-08-28)

### Bug Fixes

- 修复 useShareAppMessage 的回调会被多次调用的问题 ([20adb1f](https://github.com/remaxjs/remax/commit/20adb1f)), closes [#172](https://github.com/remaxjs/remax/issues/172)

## [1.0.5](https://github.com/remaxjs/remax/compare/v1.0.4...v1.0.5) (2019-08-27)

### Bug Fixes

- 修复 onShareAppMessage 拿不到参数的问题 ([9189f01](https://github.com/remaxjs/remax/commit/9189f01)), closes [#169](https://github.com/remaxjs/remax/issues/169)
- 微信 Swiper 自动播放不会受 state 变化影响 ([bdc9c67](https://github.com/remaxjs/remax/commit/bdc9c67))

### Performance Improvements

- 提升模板渲染性能 ([9af03f9](https://github.com/remaxjs/remax/commit/9af03f9))

## [1.0.4](https://github.com/remaxjs/remax/compare/v1.0.3...v1.0.4) (2019-08-24)

### Bug Fixes

- 增加 remax-cli 缺失的 acorn-walk 依赖 ([0eec56b](https://github.com/remaxjs/remax/commit/0eec56b))

## [1.0.3](https://github.com/remaxjs/remax/compare/v1.0.2...v1.0.3) (2019-08-24)

### Bug Fixes

- 修复支付宝的 PickerView 组件 ([731b28e](https://github.com/remaxjs/remax/commit/731b28e))
- 支付宝 picker 无法渲染的问题 ([41ddddc](https://github.com/remaxjs/remax/commit/41ddddc))

## [1.0.2](https://github.com/remaxjs/remax/compare/v1.0.1...v1.0.2) (2019-08-23)

### Bug Fixes

- style 为 null/undefined 时报错的问题 ([28f4367](https://github.com/remaxjs/remax/commit/28f4367))
- stylus typo ([60c4ec9](https://github.com/remaxjs/remax/commit/60c4ec9))
- 修复 PX 也会被转换成 rpx 的问题 ([e34c366](https://github.com/remaxjs/remax/commit/e34c366))
- 生命周期 hooks 不能在组件中使用的问题 ([4fa5695](https://github.com/remaxjs/remax/commit/4fa5695))

## 1.0.1

第一个正式版本。

## 1.0.0

不存在。
