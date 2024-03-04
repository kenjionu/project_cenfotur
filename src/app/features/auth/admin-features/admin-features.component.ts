import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { NavbarComponent } from '../../../components/atoms/molecules/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../../../components/atoms/molecules/sidenav/sidenav.component';
import { sideMenuPortal } from '../../../core/constants/menu/menu';

@Component({
  selector: 'app-admin-features',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, SidenavComponent],
  templateUrl: './admin-features.component.html',
  styleUrl: './admin-features.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AdminFeaturesComponent {
  menu = sideMenuPortal;
}
