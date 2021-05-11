// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAutoWeb from '../../../app/controller/autoWeb';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    autoWeb: ExportAutoWeb;
    home: ExportHome;
  }
}
