import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-app-layout',
  imports: [Sidebar],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css',
})
export class AppLayout {

}
