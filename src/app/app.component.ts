import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormElementsComponent } from '@form-designer/form-elements';
import { FormCanvasComponent } from '@form-designer/form-canvas'

@Component({
  imports: [RouterModule, FormElementsComponent, FormCanvasComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
