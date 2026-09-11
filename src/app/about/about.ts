import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  skills: string[] = [
    'Angular & TypeScript',
    'php & MySQL',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'bootstrap & Tailwind CSS',
    'Git & GitHub',
    'REST APIs',
    'Responsive UI Design'
  ];
}