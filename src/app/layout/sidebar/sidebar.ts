import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  sideMenus = [ 'Employees', 'Deptarments', 'Projects', 'Reports', 'Payroll', 'Settings'];
  menuObj = [
    {name: 'Dashboards', icon:"bi bi-motherboard"},
    {name: 'Depts', icon:"bi bi-house"},
    {name: 'Projects', icon:"bi bi-kanban"},
    {name: 'Reports', icon:"bi bi-clipboard-data"},
    {name: 'Payroll', icon:"bi bi-wallet2"},
    {name: 'Settings', icon:"bi bi-gear"}
  ]
}
