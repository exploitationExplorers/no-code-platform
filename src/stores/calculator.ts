export class CalculatorPlugins {
  /**用来存放所有的插件 */

  private plugins: ((input: string) => boolean)[] = []

  /**注册插件 */
  use(plugin: (input: string) => boolean) {
    this.plugins.push(plugin)
  }
  /**执行插件 */
  run(a: string) {
    // 获取所有的插件
    const plugins = this.plugins
    console.log('🚀 ~ file: Calculator.ts:31 ~ CalculatorPlugins ~ run ~ plugins:', plugins)

    // 遍历所有的插件，执行
    return !!plugins.reduce((result: string | false, plugin) => {
      return plugin(result as string) ? result : false
    }, a)
  }
}

// 表单校验
// 自定义 rules，babel、eslint，plugin
// 1. 定义一个插件
// 长度不小于 10
const plugin1 = (result: string) => {
  console.log('🚀 ~ file: Calculator.ts:47 ~ plugin1 ~ result:', result)
  return result.length >= 10
}

// 2. 定义一个插件
// 长度不大于 20
const plugin2 = (result: string) => {
  console.log('🚀 ~ file: Calculator.ts:54 ~ plugin2 ~ result:', result)
  return result.length <= 20
}

const plugins = new CalculatorPlugins()
plugins.use(plugin1)
plugins.use(plugin2)

console.log(plugins.run('123456789012345678901234567890'))
