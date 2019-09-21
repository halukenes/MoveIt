// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  tmdApiKey: '154a2e5b46a3b30f8a37f9c2a1c70418',   //The Movie DB api key
  tmdApiUrl: 'https://api.themoviedb.org/3',
  get tmdSearchUrl() {
    return this.tmdApiUrl + '/search/movie' + '?api_key=' + this.tmdApiKey;
  }
};