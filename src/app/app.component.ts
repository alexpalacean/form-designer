import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormElementsComponent } from '@form-designer/form-elements';
import { FormCanvasComponent } from '@form-designer/form-canvas'
import { FormPropertiesComponent } from '@form-designer/form-properties';

@Component({
  imports: [RouterModule, FormElementsComponent, FormCanvasComponent, FormPropertiesComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
