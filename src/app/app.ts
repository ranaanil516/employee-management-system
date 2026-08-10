import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./layout/navbar/navbar";
import { Footer } from "./layout/footer/footer";
import { Sidebar } from "./layout/sidebar/sidebar";
import { AppLayout } from "./layout/app-layout/app-layout";

@Component({
  selector: 'app-root',
  imports: [ Navbar, Footer, AppLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-management-system');
}
