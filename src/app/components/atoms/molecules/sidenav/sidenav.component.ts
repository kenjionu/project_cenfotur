import { Component, Input, OnInit } from "@angular/core";
import { sideMenu } from "../../../../core/interfaces/menu/menu";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'molecule-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule],

})

export class SidenavComponent implements OnInit {
  private _recordKeys: sideMenu[] | null = null;

  // @Input() menu: Record<string, sideMenu> = sideMenuPortal;
  // @Input() sideMenuPortal: Record<string, sideMenu> = {};
  @Input() menu: Record<string, sideMenu> = {};



  ngOnInit(): void {
  }

  get recordKeys(): sideMenu[] {
    if (!this._recordKeys) {
      this._recordKeys = Object.values(this.menu);
    }
    return this._recordKeys;
  }
}

