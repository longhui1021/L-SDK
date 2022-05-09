module.exports = {
  title: 'L-SDK',
  description: 'javascript工具函数',
  head: [
    ['link', { rel: 'icon', href: '/assets/images/hero.png' }]
  ],
  port: 8080, // 端口号
  search: true,
  searchMaxSuggestions: 10,
  repo: '', // git连接
  repoLabel: '查看源码',
  logo: '/assets/images/hero.png',
  themeConfig:{
    nav: [
      { text: '首页', link: '/' },
      {text:'安装与使用',link:'/installAndUse'},
      {
        text: '工具箱',
        items: [
          {
            text: '数字操作', link: '/number' 
          },
          { 
            text: '字符串操作',  link: '/string' 
          },
          { 
            text: '数组操作',  link: '/array' 
          },
          { 
            text: '格式转化',  link: '/format' 
          },
          { 
            text: '存储操作',  link: '/storage' 
          },
          // { 
          //   text: '操作URL',  link: '/url' 
          // },
          { 
            text: '设备判断',  link: '/equipment' 
          },
          { 
            text: '浏览器操作',  link: '/browser' 
          },
          { 
            text: 'JavaScript操作',  link: '/JavaScript' 
          }
        ]
        
      }
    ],
    sidebar: 'auto'
  }
 
}