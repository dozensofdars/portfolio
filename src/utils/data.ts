export interface Header {
  title: string
  subtitle: string
}

export interface Item {
  avatarIcon: string
  title: string
  body: string
}

export interface Profile {
  title: string
  items: Item[]
  descriptions: string[]
}

export interface Item4 {
  icon: string
  text: string
}

export interface Item3 {
  title: string
  items: Item4[]
}

export interface Item2 {
  title: string
  description: string
  items: Item3[]
}

export interface Skills {
  title: string
  items: Item2[]
}

export interface Item5 {
  title: string
  description: string
  image: string
  techs: string[]
  link: string
}

export interface Works {
  title: string
  items: Item5[]
}

export interface Twitter {
  name: string
  link: string
}

export interface Qiita {
  name: string
  link: string
}

export interface Github {
  name: string
  link: string
}

export interface Contact {
  title: string
  twitter: Twitter
  qiita: Qiita
  github: Github
}

export interface Copyright {
  name: string
  link: string
}

export interface Data {
  header: Header
  profile: Profile
  skills: Skills
  works: Works
  contact: Contact
  copyright: Copyright
}
