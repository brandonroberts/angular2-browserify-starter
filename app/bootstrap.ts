//import 'angular2/bundles/angular2-polyfills';
import 'reflect-metadata';
import 'babelify/polyfill';
import 'zone.js';
import {bootstrap}    from 'angular2/platform/browser';
import {routeTestComponent} from './components/app/app';
import {ROUTER_PROVIDERS} from 'angular2/router';
bootstrap(routeTestComponent, [ROUTER_PROVIDERS]);
