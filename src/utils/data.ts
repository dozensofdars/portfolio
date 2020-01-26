const data = {
  header: {
    title: 'Yuya Sugibuchi',
    subtitle: 'Portfolio'
  },
  profile: {
    title: 'Profile',
    data: [
      { avatarIcon: 'Person', title: '名前', body: 'Yuya Sugibuchi' },
      { avatarIcon: 'Event', title: '生年月日', body: '1994/02/26' },
      { avatarIcon: 'Work', title: '職業', body: 'System Engineer' }
    ],
    descriptions: [
      '東京大学大学院情報理工学系研究科修士課程修了。2018年に独立系システムインテグレータに入社し、製造業向けの自社製品の設計・開発に携わっています。',
      'Webフロントエンド (React/jQuery)、Webバックエンド (Node.js/Ruby)、Androidアプリ (Java)、Windowsアプリ (C#)と幅広い技術領域での開発経験があります。'
    ]
  },
  skills: {
    title: 'Skill',
    data: [
      {
        title: 'フロントエンド',
        description:
          '直近で主に取り組んでいる領域です。Reactをメインで使用しています。',
        data: [
          {
            title: '言語',
            data: [
              { icon: 'devicon-javascript-plain', text: 'JavaScript' },
              { icon: 'devicon-typescript-plain', text: 'TypeScript' },
              { icon: 'fas fa-file-code', text: 'HTML/CSS' }
            ]
          },
          {
            title: 'フレームワーク',
            data: [
              { icon: 'devicon-react-original', text: 'React' },
              { icon: 'devicon-react-original', text: 'Redux' },
              { icon: 'devicon-react-original', text: 'Material-UI' },
              { icon: 'devicon-vuejs-plain', text: 'Vue' },
              { icon: 'devicon-jquery-plain', text: 'jQuery' },
              { icon: 'devicon-bootstrap-plain', text: 'Bootstrap' }
            ]
          }
        ]
      },
      {
        title: 'バックエンド',
        description: '直近ではNode.js + expressを使用して開発していました。',
        data: [
          {
            title: '言語',
            data: [
              {
                icon: 'devicon-nodejs-plain',
                text: 'JavaScript (Node.js)'
              },
              { icon: 'devicon-ruby-plain', text: 'Ruby' },
              { icon: 'devicon-python-plain', text: 'Python' }
            ]
          },
          {
            title: 'フレームワーク',
            data: [
              { icon: 'devicon-express-original', text: 'express' },
              { icon: 'devicon-ruby-plain', text: 'Padrino' },
              { icon: 'devicon-ruby-plain', text: 'Sinatra' },
              { icon: 'devicon-rails-plain', text: 'Rails' },
              { icon: 'devicon-python-plain', text: 'Flask' }
            ]
          }
        ]
      },
      {
        title: 'ネイティブアプリ',
        description:
          '直近ではAndroidスマートグラス向けアプリを開発していました。',
        data: [
          {
            title: '言語',
            data: [
              { icon: 'devicon-java-plain', text: 'Java' },
              { icon: 'devicon-android-plain', text: 'Kotlin' },
              { icon: 'devicon-csharp-plain', text: 'C# (WPF)' }
            ]
          },
          {
            title: 'デバイス',
            data: [
              { icon: 'devicon-android-plain', text: 'Android スマートフォン' },
              {
                icon: 'devicon-android-plain',
                text: 'Android スマートウォッチ'
              },
              { icon: 'devicon-android-plain', text: 'Android スマートグラス' },
              { icon: 'devicon-windows8-original', text: 'Windows PC' }
            ]
          }
        ]
      },
      {
        title: 'その他',
        description:
          '直近ではNode-REDを使ったIoTシステム構築を行っていました。',
        data: [
          {
            title: '技術領域',
            data: [
              { icon: 'devicon-nodejs-plain', text: 'Node-RED' },
              {
                icon: 'fab fa-raspberry-pi',
                text: 'Raspberry Pi'
              },
              { icon: 'fas fa-wifi', text: 'EnOcean' },
              { icon: 'fas fa-industry', text: 'ロボット・CNC・PLC制御' }
            ]
          }
        ]
      },
      {
        title: '開発環境',
        description: 'Dockerで開発環境を立てることが多いです。',
        data: [
          {
            title: 'ツール',
            data: [
              { icon: 'devicon-docker-plain', text: 'Docker' },
              { icon: 'devicon-git-plain', text: 'Git' },
              { icon: 'fas fa-desktop', text: 'VirtualBox' },
              { icon: 'fas fa-desktop', text: 'Hyper-V' },
              { icon: 'fas fa-desktop', text: 'Vagrant' }
            ]
          },
          {
            title: 'OS',
            data: [
              { icon: 'devicon-windows8-original', text: 'Windows' },
              { icon: 'devicon-linux-plain', text: 'Linux' }
            ]
          }
        ]
      },
      {
        title: '資格',
        description: '社会人になってから取得した資格です。',
        data: [
          {
            title: '保有資格',
            data: [
              { icon: 'fas fa-graduation-cap', text: '応用情報技術者' },
              { icon: 'fas fa-graduation-cap', text: 'IoTシステム技術検定中級' }
            ]
          }
        ]
      }
    ]
  },
  works: {
    title: 'Works'
  },
  contact: {
    title: 'Contact'
  },
  copyright: { name: 'dozensofdars', link: 'https://github.com/dozensofdars' }
}

export default data
