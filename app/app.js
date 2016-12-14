import angular from 'angular';
import ngRoute from 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style/main.scss';

const app = angular.module("app", ["ngRoute"]);

// Set Services

// Set Directive

// Set Controllers
import HomeController from './partials/Home/HomeController.js'
app.controller("HomeController", HomeController);

// Set Routes
import routing from './routes'
app.config(routing);
