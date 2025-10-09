import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
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

    getAssignments(): Observable<Assignment[]> {
      return of(this.assignments);
    }

    addAssignment(assignment: Assignment): Observable<string> {
      this.assignments.push(assignment);
      return of("Assignmenet ajouté");
    }

    updateAssignment(assignment: Assignment): Observable<string> {
      // On n'a besoin de ne RIEN faire ici car l'objet
      // assignment est passé par référence, donc modifié
      // directement dans le tableau this.assignments
      return of("Assignment modifié");

      // PLUS TARD ON DEVRA VRAIMENT APPELER UN WEB SERVICE
      // DISTANT POUR FAIRE LA MODIFICATION !!!
    }

    deleteAssignment(assignment: Assignment): Observable<string> {
      const index = this.assignments.indexOf(assignment);
      this.assignments.splice(index, 1);
      return of("Assignment supprimé");
    }
}
