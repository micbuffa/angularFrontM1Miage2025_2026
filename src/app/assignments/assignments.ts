import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { MatListModule } from '@angular/material/list';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AssignmentDetail } from './assignment-detail/assignment-detail';



import { DatePipe } from '@angular/common';
import { Rendu } from "../shared/rendu";
import { NonRendu } from "../shared/nonRendu";

import { Assignment } from './assignment.model';
import { AddAssignment } from "./add-assignment/add-assignment";
import { AssignmentsService } from '../shared/assignments.service';

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

  constructor(private assignmentsService: AssignmentsService) { }

  assignments: Assignment[] = [];

  ngOnInit() {
    console.log("ngOnInit appelé avant l'affichage du composant");
    console.log("Appel du service pour récupérer les données");

    this.assignmentsService.getAssignments()
      .subscribe(assignments => {
        // Les données asynchrones sont arrivées, on les affecte
        // à la propriété assignments du composant
        this.assignments = assignments;
        console.log("Données reçues");
      });
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

    // on demande au service de l'ajouter
    this.assignmentsService.addAssignment(nouvelAssignment)
      .subscribe(message => {
        console.log("Assignment ajouté avec succès");

        // On fait ça dans le subscribe car on doit être sûr que
        // l'ajout est fait côté service avant de mettre à jour
        // la liste côté composant
        // On cache le formulaire
        this.formVisible = false;

      });
  }

  onDeleteAssignment(assignmentToDelete: Assignment) {
    // On va supprimer l'assignment reçu du tableau des assignments
    this.assignmentsService.deleteAssignment(assignmentToDelete)
      .subscribe(message => {
        console.log("Assignment supprimé avec succès");
      });
  }
}
