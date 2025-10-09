import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { AssignmentsService } from '../../shared/assignments.service';
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

  constructor(private assignmentsService: AssignmentsService) { }

  onAssignmentRendu() {
    if(this.assignmentTransmis) {
      this.assignmentTransmis.rendu = 
               !this.assignmentTransmis.rendu;

      // On va utiliser le service pour faire la modification
      this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => {
        // L'assignment a été modifié côté service
        console.log(message);
      });

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
