import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { CardsComponent } from './cards/cards.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent,AboutMeComponent,SkillsComponent,CardsComponent,ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
