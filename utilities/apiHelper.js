export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const storyUrl = `${baseUrl}item/`;

export const apiHelper = (page) => {
  if (page === '/top') {
    return `${baseUrl}topstories.json`;
  }
  if (page === '/new') {
    return `${baseUrl}newstories.json`;
  }
  if (page === '/show') {
    return `${baseUrl}showstories.json`;
  }
};
