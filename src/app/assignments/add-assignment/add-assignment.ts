import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, 
    MatDatepickerModule, FormsModule],
  templateUrl: './add-assignment.html',
  styleUrl: './add-assignment.css'
})
export class AddAssignment {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

 // Pour le formulaire, une variable par champ
  nomAssignment = "";
  dateDeRendu!: Date;

  onAjouterAssignment(event:any) {      
      // On crée un nouvel assignment
      const nouvelAssignment: Assignment = new Assignment();
      nouvelAssignment.nom = this.nomAssignment;
      nouvelAssignment.dateDeRendu = this.dateDeRendu;
      nouvelAssignment.rendu = false; // Par défaut, il n'est pas rendu
    
      // On l'ajoute à la liste
      this.nouvelAssignment.emit(nouvelAssignment);

    }
}
