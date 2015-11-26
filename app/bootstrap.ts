/// <reference path="../typings/_custom.d.ts" />

// main imports
import 'babelify/polyfill';
import 'reflect-metadata';
import 'zone.js';

// angular 2 main imports
import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';

// global services

// main component
import {App} from './components/app/app';

// bootstrap
bootstrap(App, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	FORM_PROVIDERS
]);