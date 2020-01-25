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
    data: {
      frontend: {
        title: 'フロントエンド',
        description:
          '直近で主に取り組んでいる領域です。主にReactを使用しています。',
        data: {
          languages: ['JavaScript', 'TypeScript', 'HTML/CSS'],
          frameworks: [
            'React',
            'Redux',
            'Material-UI',
            'Vue',
            'jQuery',
            'Bootstrap',
            'HTML/CSS'
          ]
        }
      },
      backend: {
        title: 'バックエンド',
        description: '直近ではNode.js + expressを使用して開発していました。',
        data: {
          languages: ['JavaScript (Node.js)', 'Ruby', 'Python'],
          frameworks: ['express', 'Padrino', 'Sinatra', 'Rails', 'Flask']
        }
      },
      native: {
        title: 'ネイティブアプリ',
        description:
          '直近ではAndroidスマートグラス向けアプリを開発していました。',
        data: {
          languages: ['Java', 'Kotlin', 'C# (WPF)'],
          devices: [
            'Android スマートフォン',
            'Android スマートウォッチ',
            'Android スマートグラス',
            'Windows PC'
          ]
        }
      },
      others: {
        title: 'その他',
        description:
          '直近ではNode-REDを使ったIoTシステム構築を行っていました。',
        data: ['Node-RED', 'Raspberry Pi', 'EnOcean', 'ロボット・CNC・PLC制御']
      },
      developments: {
        title: '開発環境',
        description: 'Dockerで開発環境を立てることが多いです。',
        data: {
          tools: ['Docker', 'Git', 'VirtualBox', 'Hyper-V', 'Vagrant'],
          os: ['Windows', 'Linux']
        }
      },
      certifications: {
        title: '保有資格',
        data: [
          { name: '基本情報技術者', date: '2014/11' },
          { name: '応用情報技術者', date: '2018/08' },
          { name: 'IoTシステム技術検定中級', date: '2019/07' }
        ]
      }
    }
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
