import { Component, input } from '@angular/core';

export interface EducationItem {
  period: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home-education',
  standalone: true,
  templateUrl: './home-education.html',
  styleUrl: './home-education.scss',
})
export class HomeEducation {
  public readonly educationItems = input.required<ReadonlyArray<EducationItem>>();
}
