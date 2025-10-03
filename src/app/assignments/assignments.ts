import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { MatListModule } from '@angular/material/list';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AssignmentDetail } from './assignment-detail/assignment-detail';



import { DatePipe } from '@angular/common';
import { Rendu } from "../shared/rendu";
import { NonRendu } from "../shared/nonRendu";

import { Assignment } from './assignment.model';
import { AddAssignment } from "./add-assignment/add-assignment";

@Component({
  selector: 'app-assignments',
  imports: [MatDividerModule, DatePipe, Rendu, NonRendu,
    MatButtonModule, AssignmentDetail, MatListModule, AddAssignment],
  providers: [provideNativeDateAdapter()],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})
export class Assignments implements OnInit {
  boutonActive = false;
  formVisible = false;

  // Pour la sélection
  assignmentSelectionne?: Assignment;

  constructor() { }

  assignments:Assignment[] = [
    {
      nom: 'Devoir Angular de Buffa',
      dateDeRendu: new Date('2025-09-10'),
      rendu: true
    },
    {
      nom: 'Devoir Java de Mallet',
      dateDeRendu: new Date('2025-09-15'),
      rendu: false
    },
    {
      nom: 'Devoir Réseaux de Durand',
      dateDeRendu: new Date('2026-01-20'),
      rendu: false
    }
  ];
  
ngOnInit() {
  console.log("ngOnInit appelé");
  // Activer le bouton après 3 secondes
  setTimeout(() => {
    this.boutonActive = true;
  }, 3000);
}

  getColor(assignment: any) {
    if (assignment.rendu) {
      return 'green';
    } else {
      return 'red';
    }
  }

  
  assignmentClique(assignment: Assignment) {
    console.log("Assignment cliqué : " + assignment.nom);
    this.assignmentSelectionne = assignment
  }

  onAddAssignmentBtnClick() {
    console.log("onAddAssignmentBtnClick");
    this.formVisible = true;
  }

  onNouvelAssignment(nouvelAssignment: Assignment) {
    this.assignments.push(nouvelAssignment);
    this.formVisible = false;
  }

  onDeleteAssignment(assignmentToDelete:Assignment) {
    // On va supprimer l'assignment reçu du tableau des assignments
    
    // index de l'assignment à supprimer dans le tableau des assignments
    // il existe forcément puisque c'est un assignment qu'on a sélectionné
    // à la souris dans la liste affichée...
    let pos = this.assignments.indexOf(assignmentToDelete);
    // En JS/TS, pour supprimer un élément d'un tableau oh utilise
    // la méthode splice(index, nbElementsASupprimer)
    this.assignments.splice(pos, 1);
  }
}
