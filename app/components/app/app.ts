// https://plnkr.co/edit/wnLWAW?p

//our root app component
import {Component} from 'angular2/core'

import {Router, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

@Component({
  selector: 'tasks-list',
  template: `
  <h3>Task-List</h3>
  <button (click)="goBack()">Go Back</button>
  `,
  directives: [ROUTER_DIRECTIVES]
})


export class TasksList {
  task = {id: 1};

  from:any;

  static parameters = [Router]
  constructor(router:Router) {
    this.router = router;
  }

  routerOnActivate(to, from) {
    // console.log('tasks-list routerOnActivate: ');
    // console.debug(to);
    // console.debug(from);
  }

  ngOnChanges() {
    // console.log('tasks-list ngOnChanges');
  }

  ngOnInit() {
    console.log('tasks-list ngOnInit');
  }

  goBack() {
    // console.log('tasks-list goBack to ');
    // console.debug(this.from);

    //this.router.navigateByInstruction(this.from);
  }
}


@Component({
  selector: 'tasks',
  template: `
  <h2>Tasks</h2>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  {path: '/list', component: TasksList, name: 'List', useAsDefault: true}
])
export class Tasks {
  routerOnActivate(to, from) {
    this.render();
  }

  render() {
    console.log('tasks: render fired');
  }

  ngOnInit() {
    console.log('tasks ngOnInit');
  }
}


@Component({
  selector: 'about',
  template: `
  <h2>About</h2>
  <button (click)="goBack()">Go Back</button>
  `
})
export class About {
  from;

  static parameters = [Router]
  constructor(router:Router) {
    this.router = router;
  }

  routerOnActivate(to, from) {
    this.from = from;
  }

  goBack() {
    this.router.navigateByInstruction(this.from);
  }

  ngOnInit() {
    //console.log('about ngOnInit');
  }
}


@Component({
  selector: 'dashboard',
  template: '<h1>Dashboard App</h1>',
})
export class Dashboard {
}


@Component({
  selector: 'route-test',
  template: `
  <h1>App</h1>
   <a [routerLink]="['/Dashboard']" class="link">Dashboard</a>
   <a [routerLink]="['/About']" class="link">About</a>
   <a [routerLink]="['/Tasks']" class="link">Tasks</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', component: Dashboard, name: 'Dashboard'},
  {path: '/about', component: About, name: 'About'},
  {path: '/tasks/...', component: Tasks, name: 'Tasks'}

])
export class routeTestComponent {
}
