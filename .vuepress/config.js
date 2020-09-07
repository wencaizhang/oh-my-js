module.exports = {
  base: '/oh-my-js/',
  title: 'oh-my-js',
  description: '',
  // plugins: ['@vuepress/pwa', '@vuepress/back-to-top'],
  themeConfig: {
    logo: 'https://vuepress-theme-book.netlify.app/logo.png',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      }
    ],
    sidebar: [{
      title: '01-Array-ES3',
      path: '/01-Array-ES3/',
      collapsable: false,
      children: [
        '',
        './01-Array-ES3/00-indexxx.md',
        './01-Array-ES3/01-Array.prototype.concat.md',
        './01-Array-ES3/02-Array.prototype.join.md',
        './01-Array-ES3/03-Array.prototype.push.md',
        './01-Array-ES3/04-Array.prototype.pop.md',
        './01-Array-ES3/05-Array.prototype.shift.md',
        './01-Array-ES3/06-Array.prototype.unshift.md',
        './01-Array-ES3/07-Array.prototype.slice.md',
        './01-Array-ES3/08-Array.prototype.splice.md',
        './01-Array-ES3/09-Array.prototype.reverse.md',
        './01-Array-ES3/10-Array.prototype.sort.md',
      ],
    }, {
      title: '02-Array-ES5',
      path: '/02-Array-ES5/',
      collapsable: false,
      children: [
        './02-Array-ES5/00-index.md',
        './02-Array-ES5/01-Array.prototype.forEach.md',
        './02-Array-ES5/02-Array.prototype.map.md',
        './02-Array-ES5/03-Array.prototype.filter.md',
        './02-Array-ES5/04-Array.prototype.some.md',
        './02-Array-ES5/05-Array.prototype.every.md',
        './02-Array-ES5/06-Array.prototype.indexOf.md',
        './02-Array-ES5/07-Array.prototype.lastIndexOf.md',
        './02-Array-ES5/08-Array.prototype.reduce.md',
        './02-Array-ES5/09-Array.prototype.reduceRight.md',
      ],
    }, {
      title: '03-Array-ES6',
      path: '/03-Array-ES6/',
      collapsable: false,
      children: [
        './03-Array-ES6/00-home.md',
        './03-Array-ES6/01-Array.from.md',
        './03-Array-ES6/02-Array.of.md',
        './03-Array-ES6/03-Array.prototype.copyWithin.md',
        './03-Array-ES6/04-Array.prototype.find.md',
        './03-Array-ES6/05-Array.prototype.findIndex.md',
        './03-Array-ES6/06-Array.prototype.fill.md',
        './03-Array-ES6/07-Array.prototype.entries.md',
        './03-Array-ES6/08-Array.prototype.keys.md',
        './03-Array-ES6/09-Array.prototype.values.md',
        './03-Array-ES6/10-Array.prototype.includes.md',
        './03-Array-ES6/11-Array.isArray.md',
      ],
    }, {
      title: '04-String',
      path: '/04-String/',
      collapsable: false,
      children: [
        './04-String/00-transform-string-to-tag.md',
        './04-String/01-String.prototype-toLowerCase-toUpperCase.md',
        './04-String/02-String.prototype.slice.md',
        './04-String/03.String.prototype.split.md',
        './04-String/04.String.prototype.match.md',
        './04-String/05-String.prototype.trim.md',
        './04-String/06-String.prototype.replace.md',
        './04-String/07-String.prototype.includes.md',
        './04-String/08-String.prototype.repeat.md',
        './04-String/09-String.prototype-padstart-padend.md',
        './04-String/10-String.prototype.search.md',
      ],
    }, {
      title: '05-Object',
      path: '/05-Object/',
      collapsable: false,
      children: [
        './05-Object/01-Object.prototype.hasOwnProperty.md',
        './05-Object/02-Object.keys.md',
        './05-Object/03-Object.values.md',
        './05-Object/04-Object.entries.md',
        './05-Object/05-Object.assign.md',
        './05-Object/06-Object.is.md',
        './05-Object/07-Object.defineProperty.md',
        './05-Object/08-Object.create.md',
      ],
    }, {
      title: '06-Regexp',
      path: '/06-Regexp/',
      collapsable: false,
      children: [
        './06-Regexp/00-Regexp-basic.md',
        './06-Regexp/01-Regexp.prototype.lastIndex.md',
        './06-Regexp/02-Regexp.prototype.test.md',
        './06-Regexp/03-Regexp.prototype.exec.md',
        './06-Regexp/04-regexp-pretest.md',
        './06-Regexp/100-regexp-demos.md',
        './06-Regexp/101-regexp-tools.md',
        './06-Regexp/demo-mile-format.md',
      ],
    }]
  }
}