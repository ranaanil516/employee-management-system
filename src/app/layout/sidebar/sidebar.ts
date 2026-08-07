import { Component } from '@angular/core';
import { SidebarMenu } from '../../shared/models/sidebar-menu';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  selectedMenuId = 1;
  sideBarMenus :SidebarMenu[] = [
    {id: 1, name: 'Dashboards', icon:"bi bi-motherboard", route:'/dashboard'},
    {id: 2, name: 'Depts', icon:"bi bi-house", route:'/dept'},
    {id: 3, name: 'Projects', icon:"bi bi-kanban", route:'/project'},
    {id: 4, name: 'Reports', icon:"bi bi-clipboard-data", route:'/report'},
    {id: 5, name: 'Payroll', icon:"bi bi-wallet2", route:'/payroll'},
    {id: 6, name: 'Settings', icon:"bi bi-gear", route:'/setting'}
  ];


  selectedMenuItem(item: SidebarMenu){
    console.log(item);
    this.selectedMenuId = item.id;
    
  }
}
