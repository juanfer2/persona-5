import { Subject } from 'rxjs';

export class SubjectMananer<T> {
  private subject = new Subject<T>();

  get getSubject() {
    return this.subject.asObservable();
  }

  set setSubject(value: T) {
    this.subject.next(value);
  }
}

/*
const myRxjsSubject = new SubjectMananer<string>();
myRxjsSubject.setSubject('Hello')
myRxjsSubject.getSubject.subscribe(value => console.log(value))
*/
