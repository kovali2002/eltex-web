import { Component, input } from '@angular/core';

export interface WorkItem {
  icon: string;
  period: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home-work',
  standalone: true,
  templateUrl: './home-work.html',
  styleUrl: './home-work.scss',
})
export class HomeWork {
  public readonly workItems = input.required<ReadonlyArray<WorkItem>>();
}
