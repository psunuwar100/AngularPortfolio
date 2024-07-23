import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects = [
    {
      title: 'We-Share App',
      description: 'We-Share App is mobile based application where you can find all the notes and questions of every semesters.',
      githubLink: '',
      tags: 'Flutter, Firebase'
    },
    {
      title: 'Space Invader',
      description: 'Space Invaders is a classic 2D shooter arcade game where players control a laser cannon and shoot the enemies.',
      githubLink: '',
      tags: 'Java'
    },
    {
      title: 'Brick Buster',
      description: 'Brick Buster is a type of classic arcade game where players use a paddle to destroy bricks by bouncing a ball.',
      githubLink: '',
      tags: 'Java'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
