export const SITE_METADATA = {
  title: `Mushfiqur's blog – Full Stack Developer, Tech Geek, Audiophile, Cinephile, and Lifelong Learner!`,
  author: 'Mushfiqur Rahman Shishir',
  headerTitle: `Mushfiqur's blog – Full Stack Developer, Tech Geek, Audiophile, Cinephile, and Lifelong Learner!`,
  description: `A personal blog a Software Developer, Software Engineer, Principal Engineer, React Developer, NodeJs Developer`,
  language: 'en-us',
  theme: 'dark', // system, dark or light
  // siteUrl: 'localhost:3435',
  siteUrl: 'https://www.mushfiqweb.com',
  siteRepo: 'https://github.com/mushfiqweb/mushfiqweb-next',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'mushfiqweb@gmail.com',
  github: 'https://github.com/mushfiqweb',
  x: 'https://x.com/mushfiqweb',
  facebook: 'https://facebook.com/shiss',
  youtube: 'https://www.youtube.com/mushfiqwebTV',
  linkedin: 'https://www.linkedin.com/in/mushfiqweb',
  threads: 'https://www.threads.net/mushfiqweb',
  instagram: 'https://www.instagram.com/mushfiqweb',
  lastfm: 'https://www.last.fm/user/mushfiqweb',
  locale: 'en-US',
  stickyNav: true,
  goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/',
  goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/',
  imdbRatingsList: 'https://www.imdb.com/user/mushfiqweb/ratings/?view=grid',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://analytics.mushfiqweb.com/share/c9ErglxqzY5CQJ8g/mushfiqweb.com',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/mushfiqweb.com',
    paypal: 'https://paypal.me/mushfiqweb?country.x=VN&locale.x=en_US',
    kofi: 'https://ko-fi.com/mushfiqweb',
  },
}
