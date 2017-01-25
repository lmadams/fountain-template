import * as angular from 'angular';
import 'angular-material/angular-material.css';

import {hello} from './app/hello';

import {Categorias} from './app/categorias/Categorias';
import {AgMenu} from './app/menu/Menu';
import {Produtos} from './app/produtos/Produtos';

import 'angular-ui-router';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import routesConfig from './routes';
import themeConfig from './theme';

import './index.scss';

export const app: string = 'app';

angular
    .module(app, [
        'ui.router',
        'ngMaterial'
    ])
    .config(routesConfig)
    .config(themeConfig)
    .component('app', hello)
    .component('menu', AgMenu)
    .component('categorias', Categorias)
    .component('produtos', Produtos);
