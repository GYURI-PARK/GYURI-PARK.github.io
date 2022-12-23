module.exports = {
  title: `GYURI-PARK.github.io`,
  description: `GYURI's Tech Blog`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `GYURI-PARK.github.io`,
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
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/GYURI-PARK`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
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
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
