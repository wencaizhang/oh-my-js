module.exports = {
  base: '/oh-my-js/',
  title: 'oh-my-js',
  description: '',
  plugins: [
    // '@vuepress/pwa',
    // '@vuepress/back-to-top',
    'vuepress-plugin-medium-zoom',
    ['vuepress-plugin-code-copy', {
      align:"bottom",
      color:"#3963bc",
      successText:"复制成功~"
    }]
  ],
  themeConfig: {
    logo: 'https://vuepress-theme-book.netlify.app/logo.png',
    nav: [{
        text: 'Home',
        link: '/'
      },
    ],
    // docsDir: 'docs',
    editLinks: true,
    smoothScroll: true,
    editLinkText: '纠正错误',
    repo: "wencaizhang/oh-my-js",
    docsRepo: "wencaizhang/oh-my-js",
    logo: '/left-logo.png',
    lastUpdated: '上次更新',
    sidebar: getSidebar(),
  }
}

function getSidebar() {
  return [
    {
      title: "01-Array-ES3",
      // path: "/01-Array-ES3/",
      // collapsable: false,
      children: [
        '/01-Array-ES3/overview',
        '/01-Array-ES3/concat',
        '/01-Array-ES3/join',
        '/01-Array-ES3/push',
        '/01-Array-ES3/pop',
        '/01-Array-ES3/shift',
        '/01-Array-ES3/unshift',
        '/01-Array-ES3/slice',
        '/01-Array-ES3/splice',
        '/01-Array-ES3/reverse',
        '/01-Array-ES3/sort',
      ],
    },
    {
      title: "02-Array-ES5",
      // path: "/03-Array-ES6/",
      // collapsable: false,
      children: [
        '/02-Array-ES5/overview',
        '/02-Array-ES5/forEach',
        '/02-Array-ES5/map',
        '/02-Array-ES5/filter',
        '/02-Array-ES5/some',
        '/02-Array-ES5/every',
        '/02-Array-ES5/indexOf',
        '/02-Array-ES5/lastIndexOf',
        '/02-Array-ES5/reduce',
        '/02-Array-ES5/reduceRight',
      ],
    },

    {
      title: "03-Array-ES6",
      // path: "/03-Array-ES6/",
      // collapsable: false,
      children: [
        '/03-Array-ES6/overview',
        '/03-Array-ES6/Array-from',
        '/03-Array-ES6/Array-of',
        '/03-Array-ES6/copyWithin',
        '/03-Array-ES6/find',
        '/03-Array-ES6/findIndex',
        '/03-Array-ES6/fill',
        '/03-Array-ES6/entries',
        '/03-Array-ES6/keys',
        '/03-Array-ES6/values',
        '/03-Array-ES6/includes',
        '/03-Array-ES6/Array-isArray',
      ],
    },
    {
      title: "04-String",
      // path: "/04-String/",
      // collapsable: false,
      children: [
        '/04-String/tag',
        '/04-String/toLowerCase-toUpperCase',
        '/04-String/slice',
        '/04-String/split',
        '/04-String/match',
        '/04-String/trim',
        '/04-String/replace',
        '/04-String/includes',
        '/04-String/repeat',
        '/04-String/padstart-padend',
        '/04-String/search',
      ],
    },
    {
      title: "05-Object",
      // path: "/05-Object/",
      // collapsable: false,
      children: [
        '/05-Object/Object-hasOwnProperty',
        '/05-Object/Object-keys',
        '/05-Object/Object-values',
        '/05-Object/Object-entries',
        '/05-Object/Object-assign',
        '/05-Object/Object-is',
        '/05-Object/Object-defineProperty',
        '/05-Object/Object-create',
      ],
    },
    {
      title: "06-Regexp",
      // path: "/06-Regexp/",
      // collapsable: false,
      children: [
        '/06-Regexp/basic',
        '/06-Regexp/lastIndex',
        '/06-Regexp/test',
        '/06-Regexp/exec',
        '/06-Regexp/pretest',
        '/06-Regexp/demos',
        '/06-Regexp/tools',
        '/06-Regexp/demo-mile-format',
      ],
    },
  ];
}
