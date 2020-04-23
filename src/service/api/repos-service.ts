import { Source } from './../../models/repos';

export async function getRepos(): Promise<Source[] | undefined> {
    try {
        // get the API call
        const response = await fetch(
          `https://api.github.com/users/dejanajan/repos?per_page=10`
        );
        // API response in json format
        const responseJson = await response.json();

        return responseJson;
      } catch (e) {
        console.error(e);
      }
}

export default getRepos