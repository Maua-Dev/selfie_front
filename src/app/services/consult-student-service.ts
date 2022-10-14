import { Student } from "src/entities/student";

export class ConsultStudentService {

    private studentsList : Student[] = [];

    private AddStudentsInList(student : Student) : void {
        this.studentsList.push(student);
    }

    constructor(){}

    public FetchStudent(student : Student){
        this.AddStudentsInList(student)
    }

    public GetStudentsList(student : Student){
        return this.AddStudentsInList(student)
    }

    //verificar essa porra
    public FetchStudentList() : Student[]{
        return [new Student("Davi","14/10/2022","Aprovado",""), new Student("Davi","14/10/2022","Reprovado","Está com boné")]
    }

    //verificar essa porra
    public GetServiceStatus(student : Student) : string {
        return student.GetStatus();
    }
}