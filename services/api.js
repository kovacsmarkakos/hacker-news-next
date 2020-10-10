import axios from 'axios';
import { selectFields } from '../utilities/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const storyUrl = `${baseUrl}item/`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
/* export const topStoriesUrl = `${baseUrl}topstories.json`;
export const showStoriesUrl = `${baseUrl}showstories.json`;
export const askStoriesUrl = `${baseUrl}askstories.json`; */

/* export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return result;
}; */

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

  return result;
};
