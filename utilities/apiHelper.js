export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const storyUrl = `${baseUrl}item/`;

export const apiHelper = (page) => {
  switch (page) {
    case '/top':
      return `${baseUrl}topstories.json`;
    case '/new':
      return `${baseUrl}newstories.json`;
    case '/show':
      return `${baseUrl}showstories.json`;
  }
};
