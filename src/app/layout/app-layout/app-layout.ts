import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Dashboard } from '../../pages/dashboard/dashboard';


@Component({
  selector: 'app-app-layout',
  imports: [Sidebar, Dashboard],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css',
})
export class AppLayout {

}
