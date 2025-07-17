import { Student } from "./student";

export class StudentBuilder<T extends Partial<Student>> {
  #student: T;

  private constructor(student: T) {
    this.#student = student;
  }

  static create(): StudentBuilder<{}> {
    return new StudentBuilder({});
  }

  setId(id: string): StudentBuilder<T & { id: string }> {
    return new StudentBuilder({ ...this.#student, id });
  }

  setName(name: string): StudentBuilder<T & { name: string }> {
    return new StudentBuilder({ ...this.#student, name });
  }

  setEmail(email: string): StudentBuilder<T & { email: string }> {
    return new StudentBuilder({ ...this.#student, email });
  }

  setActive(active: boolean): StudentBuilder<T & { active: boolean }> {
    return new StudentBuilder({ ...this.#student, active });
  }

  setDeletedAt(deletedAt: Date): StudentBuilder<T & { deletedAt?: Date }> {
    return new StudentBuilder({ ...this.#student, deletedAt });
  }

  setCreatedAt(createdAt: Date): StudentBuilder<T & { createdAt: Date }> {
    return new StudentBuilder({ ...this.#student, createdAt });
  }

  setUpdatedAt(updatedAt: Date): StudentBuilder<T & { updatedAt: Date }> {
    return new StudentBuilder({ ...this.#student, updatedAt });
  }

  build(this: StudentBuilder<Student>): Student {
    return this.#student;
  }
}