module.exports = {
  title: `gyurisinZORBA.com`,
  description: `GYURI's Tech Blog`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://github.com/GYURI-PARK`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `박규리`,
    bio: {
      role: `개발자`,
      description: ['노력의 가치를 아는', '일상에 풍요로움을 더해주는', '다양한 관점을 가진'],
      thumbnail: '움직이는미모티콘.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/GYURI-PARK`, // `https://github.com/zoomKoding`,
      // linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `higyuri99@naver.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2018.02',
        activity: '대구 계성고등학교 졸업',
      },
      {
        date: '2023.02',
        activity: '서울시립대학교 공간정보공학과 & 빅데이터분석학 (졸업예정)',
      },
      {
        date: '2022.03 ~ 2022.06',
        activity: '사용자 맞춤형 길 찾기 서비스 WayFindeR 개발',
        links: {
          post: 'https://uos-urbanscience.org/archives/uos_portfolio/당신이-원하는-길로-이끄는-지도-wayfinder',
          github: 'https://github.com/GYURI-PARK/2022_Graduation_project',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '사용자 맞춤형 길 찾기 서비스 WayFindeR 개발',
        description:
          '“여러분은 목적지까지의 길을 찾을 때 어떻게 하시나요?” 기존의 우리가 사용하고 있는 길 찾기 서비스들은 보행환경을 고려하지 않은 채, 최단거리 / 최소 시간 위주의 경로만을 제공합니다. 단순히 빨리 갈 수 있는 길이 아닌, 안전하고 쾌적한 내가 걷고 싶은 길을 제공해 주는 서비스가 있다면 어떨까요? 안전성, 쾌적성 기반의 보행자 맞춤형 길 찾기 서비스, WayFindeR입니다.',
        techStack: ['HTML', 'CSS','JavaScript','Node.js'],
        thumbnailUrl: 'wayfinder.001.png',
        links: {
          post: 'https://uos-urbanscience.org/archives/uos_portfolio/당신이-원하는-길로-이끄는-지도-wayfinder',
          github: 'https://github.com/GYURI-PARK/2022_Graduation_project',
        },
      },
    ],
  },
};
