/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "\n            Automatically enter new location": "\n 自动进入新位置",
    "\"All the bananas are gone! Wonderful job!\" said Ducky.": "“所有的香蕉都不见了！干得好！”达基说。",
    "\"But wait!\"": "\“可是等等！\”",
    "\"Don't worry! I developed these upgrades to help you on your way!\"": "“别担心！我开发了这些升级来帮助你！”",
    "\"I'd say, it's time to build up some": "\“我想说，是时候建立一些",
    "\"I'm a professional,\" I smiled.": "“我是专业人士，”我笑着说。",
    "\"Isn't that a bit too much?!\"": "“是不是有点过分了？！”",
    "\"It's over for now. But if we want to truly master the Great Banana Technology, we would need something more powerful\" Wilbert said.": "“暂时结束了。但如果我们想要真正掌握大香蕉技术，我们还需要更强大的东西。”威尔伯特说道。",
    "\"It's over, right?\"": "“结束了，对吧？”",
    "\"Like what?\" asked Ducky.": "“比如什么？”达基问。",
    "\"Our": "\“我们的",
    "(resets all progress)": "（重置所有进度）",
    "All locations have been cleared!": "所有地点都已清空！",
    "Ask an elephant to help you eat bananas": "让大象帮你吃香蕉",
    "Audio": "声音",
    "Autoeat": "自动吃",
    "Autopoop: the skill of superheroes!": "自动屙粑粑：超级英雄的技能！",
    "Banana-Powered Engine": "香蕉动力引擎",
    "bananas. Eat them all!": " 香蕉。把它们都吃掉！",
    "Befriend a monkey to help you eat bananas": "和猴子做朋友，帮你吃香蕉",
    "Capacity:": "容量：",
    "Capacity: 1M bananas": "容量：1M 香蕉",
    "Chew several bananas at the same time": "同时咀嚼几个香蕉",
    "Cloning Genie": "克隆精灵",
    "Copy": "复制",
    "Copy save": "复制存档",
    "Current base:": "当前基础：",
    "Dark theme": "深色主题",
    "Delete save": "删除保存",
    "Doubles the base amount of bananas everyone can eat in a single meal": "每个人一顿饭可以吃的香蕉基本量翻倍",
    "Doubles the speed of the truck": "卡车速度翻倍",
    "Ducky and I turned to Wilbert.": "达基和我转向威尔伯特。",
    "Eat": "吃",
    "Eat bananas in 10 million locations at the same time": "在 1000 万个地点同时吃香蕉",
    "Enter a location without upgrades": "输入未升级的位置",
    "Enter New Location": "输入新位置",
    "Full package: befriends animals, upgrades truck, applies prestige!": "全套：与动物交朋友，升级卡车，应用声望！",
    "Hire driver to ride the truck": "聘请司机驾驶卡车",
    "Hire Manager": "招聘经理",
    "Import save": "导入保存",
    "Join our Discord": "加入我们的Discord",
    "locations left!\" she said. \"And each contains a billion bananas that needs to be eaten!\"": "剩下的位置！\”她说。“每个都包含需要吃掉的十亿根香蕉！\”",
    "Louigi Verona's Workshop": "Louigi Verona的工作室",
    "Machinery": "机械装置(网站有汉化版~)",
    "Make everyone 10 times as hungry": "让每个人的饥饿感增加 10 倍",
    "Massive Banana Detector": "大型香蕉探测器",
    "Massive Banana Multiplier": "大香蕉乘数",
    "Poop": "屙",
    "Poop:": "粑粑：",
    "Prestige:": "声望：",
    "Ready to eat bananas?": "准备好吃香蕉了吗？",
    "Restart Game": "重启游戏",
    "Resume game": "继续游戏",
    "Save Game": "保存游戏",
    "Saved": "已保存",
    "Scientific notation": "科学计数法",
    "See prestige upgrades": "查看声望升级",
    "See upgrades": "查看升级",
    "Send a truck with bananas to your local community": "向当地社区派出一辆装有香蕉的卡车",
    "Send truck": "派出卡车",
    "shows that there are still about": "表明仍有约",
    "Speed: 50 kmph": "速度：50公里/小时",
    "The skill of professionals": "专业人士的技能",
    "There are": "这里有 ",
    "Toggle": "切换",
    "Turn it off": "把它关掉",
    "Upgrade truck capacity to transport more bananas": "升级卡车运力以运输更多香蕉",
    "Upgrade truck engines to make it faster": "升级卡车引擎以使其更快",
    "Volume": "体积",
    "Copied": "已复制",
    "Turn it back on": "重新打开声音",
    "Hide prestige upgrades": "隐藏声望升级",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Monkeys: ": "猴子：",
    "Elephants: ": "大象：",
    "Speed: ": "速度：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Capacity: (.+) bananas$/, '容量： $1 香蕉'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);