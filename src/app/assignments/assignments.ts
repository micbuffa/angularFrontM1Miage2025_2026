import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AssignmentDetail } from './assignment-detail/assignment-detail';


import { FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { Rendu } from "../shared/rendu";
import { NonRendu } from "../shared/nonRendu";

import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  imports: [MatDividerModule, DatePipe, Rendu, NonRendu,
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,
    MatDatepickerModule, AssignmentDetail
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})
export class Assignments implements OnInit {
  boutonActive = false;

  // Pour le formulaire, une variable par champ
  nomAssignment = "";
  dateDeRendu!: Date;


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

  onAjouterAssignment(event:any) {
    console.log("Ajout NOM = " + this.nomAssignment + " date = " + this.dateDeRendu);
    
    // On crée un nouvel assignment
    const nouvelAssignment: Assignment = new Assignment();
    nouvelAssignment.nom = this.nomAssignment;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false; // Par défaut, il n'est pas rendu

    console.log(nouvelAssignment);

    // On l'ajoute à la liste
    this.assignments.push(nouvelAssignment);

  }
}
