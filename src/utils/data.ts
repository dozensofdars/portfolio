const data = {
  header: {
    title: 'Yuya Sugibuchi',
    subtitle: 'Portfolio'
  },
  profile: {
    title: 'Profile',
    items: [
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
    items: [
      {
        title: 'フロントエンド',
        description:
          '直近で主に取り組んでいる領域です。Reactをメインで使用しています。',
        items: [
          {
            title: '言語',
            items: [
              { icon: 'devicon-javascript-plain', text: 'JavaScript' },
              { icon: 'devicon-typescript-plain', text: 'TypeScript' },
              { icon: 'fas fa-file-code', text: 'HTML/CSS' }
            ]
          },
          {
            title: 'フレームワーク',
            items: [
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
        items: [
          {
            title: '言語',
            items: [
              { icon: 'devicon-nodejs-plain', text: 'JavaScript (Node.js)' },
              { icon: 'devicon-ruby-plain', text: 'Ruby' },
              { icon: 'devicon-python-plain', text: 'Python' }
            ]
          },
          {
            title: 'フレームワーク',
            items: [
              { icon: 'devicon-express-original', text: 'express' },
              { icon: 'devicon-ruby-plain', text: 'Padrino' },
              { icon: 'devicon-ruby-plain', text: 'Sinatra' },
              { icon: 'devicon-rails-plain', text: 'Rails' },
              { icon: 'devicon-python-plain', text: 'Flask' }
            ]
          },
          {
            title: 'データベース',
            items: [
              { icon: 'devicon-postgresql-plain', text: 'PostgreSQL' },
              { icon: 'devicon-mongodb-plain', text: 'mongoDB' }
            ]
          }
        ]
      },
      {
        title: 'ネイティブアプリ',
        description:
          '直近ではAndroidスマートグラス向けアプリを開発していました。',
        items: [
          {
            title: '言語',
            items: [
              { icon: 'devicon-java-plain', text: 'Java' },
              { icon: 'kotlin.svg', text: 'Kotlin' },
              { icon: 'devicon-csharp-plain', text: 'C# (WPF)' }
            ]
          },
          {
            title: 'デバイス',
            items: [
              { icon: 'devicon-android-plain', text: 'Android スマートフォン' },
              { icon: 'fas fa-clock', text: 'Android スマートウォッチ' },
              { icon: 'fas fa-glasses', text: 'Android スマートグラス' },
              { icon: 'devicon-windows8-original', text: 'Windows PC' }
            ]
          }
        ]
      },
      {
        title: 'その他',
        description:
          '直近ではNode-REDを使ったIoTシステム構築を行っていました。',
        items: [
          {
            title: '技術領域',
            items: [
              { icon: 'node-red.svg', text: 'Node-RED' },
              { icon: 'fab fa-raspberry-pi', text: 'Raspberry Pi' },
              { icon: 'fas fa-wifi', text: 'EnOcean' },
              { icon: 'fas fa-wifi', text: 'MQTT' },
              { icon: 'fas fa-wifi', text: 'WebSocket' },
              { icon: 'fas fa-video', text: 'WebRTC' },
              { icon: 'fas fa-industry', text: 'ロボット・CNC・PLC制御' }
            ]
          }
        ]
      },
      {
        title: '開発環境',
        description: 'Dockerで開発環境を立てることが多いです。',
        items: [
          {
            title: 'ツール',
            items: [
              { icon: 'devicon-docker-plain', text: 'Docker' },
              {
                icon: 'devicon-visualstudio-plain',
                text: 'Visual Studio Code'
              },
              { icon: 'devicon-git-plain', text: 'Git' },
              { icon: 'fas fa-desktop', text: 'VirtualBox' },
              { icon: 'fas fa-desktop', text: 'Hyper-V' },
              { icon: 'fas fa-desktop', text: 'Vagrant' }
            ]
          },
          {
            title: 'OS',
            items: [
              { icon: 'devicon-windows8-original', text: 'Windows' },
              { icon: 'devicon-linux-plain', text: 'Linux' }
            ]
          }
        ]
      },
      {
        title: '資格',
        description: '社会人になってから取得した資格です。',
        items: [
          {
            title: '保有資格',
            items: [
              { icon: 'fas fa-graduation-cap', text: '応用情報技術者' },
              { icon: 'fas fa-graduation-cap', text: 'IoTシステム技術検定中級' }
            ]
          }
        ]
      }
    ]
  },
  works: {
    title: 'Works',
    items: [
      {
        title: 'Portfolio',
        description: '本サイトです。実装ではDataとViewの分離を意識しています。',
        image: 'portfolio',
        techs: ['TypeScript', 'React', 'Material-UI']
      },
      {
        title: '男子校 Official Web Site',
        description:
          '私が活動しているオリジナルバンド「男子校」の公式ホームページです。制作・運用を担当しています。',
        image: 'danshikoh',
        techs: ['WordPress', 'HTML', 'CSS'],
        link: 'https://danshikoh.com'
      },
      {
        title: 'Vocaminer',
        description:
          '簡単に使えるボカロ曲発掘サービスです。主にバックエンドを担当しました。',
        image: 'vocaminer',
        techs: ['Node.js'],
        link: 'https://yumuta.github.io/vocaminer/'
      },
      {
        title: 'スマートホーム',
        description:
          '自宅でGoogle HomeやRaspberry Piを活用し、スマホから家電の電源を入れたり、Slackに投稿したメッセージをGoogle Homeに喋らせたりといったシステムを構築しています。知見はQiitaにも投稿しています。',
        image: 'nodered',
        techs: [
          'Node-RED',
          'Node-RED Dashboard',
          'Raspberry Pi',
          'Google Home',
          'Slack Apps'
        ],
        link: 'https://qiita.com/dozensofdars/items/43ec9e51cc3e33239e5c'
      },
      {
        title: '(業務) スマートウォッチを活用した作業者通知システム',
        description:
          '工場の設備異常等をスマートウォッチで作業者へリアルタイムで通知し、ダウンタイムを削減するシステムです。バックエンド・モバイル(Android)・フロントエンド開発を担当しました。',
        techs: [
          'Ruby',
          'Padrino',
          'PostgreSQL',
          'MQTT',
          'Java',
          'HTML(erb)',
          'CSS',
          'jQuery',
          'Bootstrap'
        ]
      },
      {
        title: '(業務) スマートグラスを活用した作業者遠隔支援システム',
        description:
          'スマートグラスを活用して工場作業者に遠隔支援を行うシステムです。主にバックエンド・モバイル(Android)・一部フロントエンド開発を担当しました。',
        techs: [
          'Node.js',
          'express',
          'WebSocket',
          'WebRTC',
          'Java',
          'HTML(jade)',
          'CSS',
          'jQuery'
        ]
      }
    ]
  },
  contact: {
    title: 'Contact',
    twitter: {
      name: '@dozensofdars',
      link: 'https://twitter.com/dozensofdars'
    },
    qiita: {
      name: '@dozensofdars',
      link: 'https://qiita.com/dozensofdars'
    },
    github: {
      name: 'dozensofdars',
      link: 'https://github.com/dozensofdars'
    }
  },
  copyright: { name: 'dozensofdars', link: 'https://github.com/dozensofdars' }
}

export default data
