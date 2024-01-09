class Course {
  name: string
  knowledge: string = "Programming"

  constructor(name:string) {
    this.name = name
  }

  getKnowledge() {
    return this.knowledge
  }
}

class Student {
  name: string

  constructor(name: string) {
    this.name = name
  }

  remember(knowledge: string) {
    console.log(knowledge)
  }
}

class Professor {
  student: Student

  constructor(student: Student) {
    this.student = student
  }

  teach(course: Course) {
    return this.student.remember(course.getKnowledge())
  }
}

// Professor and Course dependence
// Professor and Student association
