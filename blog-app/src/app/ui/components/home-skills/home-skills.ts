import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home-skills',
  standalone: true,
  templateUrl: './home-skills.html',
  styleUrl: './home-skills.scss',
})
export class HomeSkills {
  public readonly skills = input.required<ReadonlyArray<string>>();
}
