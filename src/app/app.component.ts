import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormElementsComponent } from '@form-designer/form-elements';

@Component({
  imports: [RouterModule, FormElementsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
