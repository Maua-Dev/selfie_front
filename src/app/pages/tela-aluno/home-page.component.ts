import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { CardStatusService } from 'src/app/services/card-status.service';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { UploadSelfieService } from 'src/app/services/upload-selfie.service';
import { Student } from 'src/entities/student-aluno-domain';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  nome!: string;
  ra!: string;
  email!: string;
  student!: Student;
  statusCamera!: boolean;

  constructor(
    public uploadSelfie: UploadSelfieService,
    public selfieStudent: SelfieStudent,
    public cardStatusService: CardStatusService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getStudent();
    //this.showStatusLastCard()
  }

  status!: string;

  public showStatusLastCard() {
    this.status = 'APPROVED';
    console.log(this.status);
  }

  public getStudent() {
    this.selfieStudent.getStudent().subscribe((response) => {
      this.student = Student.createStudent(response); //recebe o estudante
      this.nome = this.student.getNome();
      this.ra = this.student.getRa();
      this.email = this.student.getEmail();
    });
  }
}
