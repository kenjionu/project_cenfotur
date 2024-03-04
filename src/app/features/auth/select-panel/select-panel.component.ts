import { Component } from '@angular/core';
import { SidenavComponent } from '../../../components/atoms/molecules/sidenav/sidenav.component';

@Component({
  selector: 'app-select-panel',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './select-panel.component.html',
  styleUrl: './select-panel.component.scss'
})
export class SelectPanelComponent {

}
