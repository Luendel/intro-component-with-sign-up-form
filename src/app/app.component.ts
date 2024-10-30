import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponentModule } from './components/intro/intro.component.module';
import { TryFreButtonComponentModule } from "./components/try-free-button/try-free-button.component.module";
import { FormComponentModuule } from './components/form/form.component.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroComponentModule, TryFreButtonComponentModule, FormComponentModuule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intro-component-with-sign-up-form';
}
