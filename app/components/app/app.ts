import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from '../home/home';

@Component({
  selector: 'app',
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home' }
])
export class App {
  
}