import { Contact } from './contact-model';

export class Student{
    public rollNo: string;
    public name: string;
    public subjectList: string[] = [];
    public contactList: Contact[] = [];
}