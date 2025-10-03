import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-assignment-detail',
  imports: [MatCardModule, MatCheckboxModule, DatePipe, MatButton],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css'
})
export class AssignmentDetail {

  @Input()
  assignmentTransmis?: Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();


  onAssignmentRendu() {
    if(this.assignmentTransmis) {
      this.assignmentTransmis.rendu = 
               !this.assignmentTransmis.rendu;
    }
  }

  onDeleteAssignment() {
    // On va envoyer un événement au composant père pour qu'il supprime
    // l'assignment
    this.deleteAssignment.emit(this.assignmentTransmis);

    // Si on veut que le panneau de détails disparaisse de l'affichage
    // il faut remettre à null ou undefined this.assignmentTransmis
    this.assignmentTransmis = undefined;
    }
}
