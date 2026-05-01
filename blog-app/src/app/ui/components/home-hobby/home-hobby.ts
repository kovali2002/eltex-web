import { Component, input } from '@angular/core';

export interface HobbyItem {
  image: string;
  label: string;
}

@Component({
  selector: 'app-home-hobby',
  standalone: true,
  templateUrl: './home-hobby.html',
  styleUrl: './home-hobby.scss',
})
export class HomeHobby {
  public readonly projects = input.required<ReadonlyArray<HobbyItem>>();
  public readonly stack = input.required<ReadonlyArray<HobbyItem>>();
}
