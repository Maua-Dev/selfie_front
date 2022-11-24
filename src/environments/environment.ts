// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const _BASE_URL_ADM_DOMAIN = process.env["BASE_URL_ADM_DOMAIN"];
const _BASE_URL_ESTUDANTE_DOMAIN = process.env["BASE_URL_ESTUDANTE_DOMAIN"];

export const environment = {
  production: false,
  BASE_URL_ADM_DOMAIN: _BASE_URL_ADM_DOMAIN,
  BASE_URL_ESTUDANTE_DOMAIN:_BASE_URL_ESTUDANTE_DOMAIN
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
