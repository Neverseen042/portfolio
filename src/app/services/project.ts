import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'School Web Portal',
      description: 'A responsive institutional web platform designed for showcasing academic programs, student announcements, and campus information with a modern UI.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Netlify'],
      link: 'https://school-web042.netlify.app/'
    },
    {
      id: 2,
      title: 'Multi-User Blog & Management System',
      description: 'An interactive web application featuring authentication, user-specific data storage, dynamic blog creation, and real-time content display.',
      technologies: ['JavaScript', 'Firebase Auth', 'Firestore', 'GitHub Pages'],
      link: 'https://postblog-neverseen.netlify.app/'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}