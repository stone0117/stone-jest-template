module.exports = {
  // For a detailed explanation regarding each configuration property, visit:
  // 有关每个配置属性的详细说明，请访问
  // https://jestjs.io/docs/en/configuration.html

  // All imported modules in your tests should be mocked automatically
  // 测试中的所有导入模块都应自动进行模拟
  // automock: false,

  // Stop running tests after `n` failures
  // “n”次失败后停止运行测试
  // bail: 0,

  // Respect "browser" field in package.json when resolving modules
  // 解析模块时，请考虑package.json中的“browser”字段
  // browser: false,

  // The directory where Jest should store its cached dependency information
  // Jest应存储其缓存的依赖关系信息的目录
  // cacheDirectory: "/private/var/folders/np/lcg5wz_90w93vf729971f3pm0000gn/T/jest_dx",

  // Automatically clear mock calls and instances between every test
  // 在每次测试之间自动清除模拟调用和实例
  // clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  // 指示在执行测试时是否应收集覆盖率信息
  // collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // 一组glob模式，指示应为其收集覆盖率信息的一组文件
  // collectCoverageFrom: null,

  // The directory where Jest should output its coverage files
  // Jest应输出其覆盖范围文件的目录
  // coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  // 用于跳过覆盖率收集的正则表达式模式字符串数组
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // A list of reporter names that Jest uses when writing coverage reports
  // Jest 在撰写报道报告时使用的记者姓名列表
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An object that configures minimum threshold enforcement for coverage results
  // 为覆盖率结果配置最小阈值执行的对象
  // coverageThreshold: null,

  // A path to a custom dependency extractor
  // 自定义依赖项提取器的路径
  // dependencyExtractor: null,

  // Make calling deprecated APIs throw helpful error messages
  // 使调用已弃用的 API 抛出有用的错误消息
  // errorOnDeprecated: false,

  // Force coverage collection from ignored files using an array of glob patterns
  // 使用一组 glob 模式强制从被忽略的文件中收集覆盖率
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // 导出在所有测试套件之前触发一次的异步函数的模块的路径
  // globalSetup: null,

  // A path to a module which exports an async function that is triggered once after all test suites
  // 导出异步函数的模块的路径，该函数在所有测试套件之后触发一次
  // globalTeardown: null,

  // A set of global variables that need to be available in all test environments
  // 一组需要在所有测试环境中可用的全局变量
  // globals: {},

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // 用于运行测试的最大工作人员数量。可以指定为 % 或数字。例如。 maxWorkers: 10% 将使用 10% 的 CPU 数量 + 1 作为最大工人数量。 maxWorkers: 2 将使用最多 2 个工人。
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  // 从所需模块的位置递归搜索的目录名称数组
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // An array of file extensions your modules use
  // 您的模块使用的一组文件扩展名
  // moduleFileExtensions: [
  //   "js",
  //   "json",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "node"
  // ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  // 从正则表达式到模块名称的映射，允许使用单个模块存根资源
  // moduleNameMapper: {},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // 一组正则表达式模式字符串，在被模块加载器视为“可见”之前与所有模块路径匹配
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  // 激活测试结果通知
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // 指定通知模式的枚举. 要求 { notify: true }
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  // 用作 Jest 配置基础的预设
  // preset: '@vue/cli-plugin-unit-jest',

  // Run tests from one or more projects
  // 从一个或多个项目运行测试
  // projects: null,

  // Use this configuration option to add custom reporters to Jest
  // 使用此配置选项将自定义记者添加到 Jest
  // reporters: undefined,

  // Automatically reset mock state between every test
  // 在每次测试之间自动重置模拟状态
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // 在运行每个单独的测试之前重置模块注册表
  // resetModules: false,

  // A path to a custom resolver
  // 自定义解析器的路径
  // resolver: null,

  // Automatically restore mock state between every test
  // 在每次测试之间自动恢复模拟状态
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // Jest 应该在其中扫描测试和模块的根目录
  // rootDir: null,

  // A list of paths to directories that Jest should use to search for files in
  // Jest 应该用来搜索文件的目录路径列表
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // 允许您使用自定义运行器而不是 Jest 的默认测试运行器
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // 在每次测试之前运行一些代码以配置或设置测试环境的模块的路径
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // 在每次测试之前运行一些代码以配置或设置测试框架的模块的路径列表
  // setupFilesAfterEnv: [],

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // Jest 应该用于快照测试的快照序列化器模块的路径列表
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  // 将用于测试的测试环境
  testEnvironment: "jest-environment-jsdom",
  // testEnvironment: "node",

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // 此选项设置 jsdom 环境的 URL。它反映在 location.href 等属性中
  testURL: "http://localhost",

  // Options that will be passed to the testEnvironment
  // 将传递给 testEnvironment 的选项
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // 向测试结果添加位置字段
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  // Jest 用于检测测试文件的 glob 模式
  testMatch: [
    // "**/__tests__/**/*.[jt]s?(x)",
    // "**/?(*.)+(spec|test).[tj]s?(x)"
    '<rootDir>/tests/unit/**/*.(spec|test).[jt]s?(x)',
    '<rootDir>/__tests__/*.[jt]s?(x)'
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // 匹配所有测试路径的正则表达式模式字符串数组，匹配的测试将被跳过
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // Jest 用于检测测试文件的正则表达式模式或模式数组
  // testRegex: [],

  // This option allows the use of a custom results processor
  // 此选项允许使用自定义结果处理器
  // testResultsProcessor: null,

  // This option allows use of a custom test runner
  // 此选项允许使用自定义测试运行器
  // testRunner: "jasmine2",

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  // 将此值设置为“fake”允许将假计时器用于“setTimeout”等功能
  // timers: "real",

  // A map from regular expressions to paths to transformers
  // 从正则表达式到转换器路径的映射
  // transform: null,

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // 与所有源文件路径匹配的正则表达式模式字符串数组，匹配的文件将跳过转换
  // transformIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // 在模块加载器自动为它们返回模拟之前，与所有模块匹配的正则表达式模式字符串数组
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // 指示是否应在运行期间报告每个单独的测试
  // verbose: null,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // 在监视模式下重新运行测试之前与所有源文件路径匹配的一组正则表达式模式
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // 是否使用watchman进行文件爬取
  // watchman: true,
}