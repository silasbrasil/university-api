import { StudentBuilder } from "./student.builder";

describe("Student Entity Builder", () => {
  it("should create a student with all properties set", () => {
    const student = StudentBuilder.create()
      .setId("123")
      .setName("John Doe")
      .setEmail("test@gmail.com")
      .setActive(true)
      .setCreatedAt(new Date("2023-01-01"))
      .setUpdatedAt(new Date("2023-01-02"))
      .build();

    expect(student).toEqual({
      id: "123",
      name: "John Doe",
      email: "test@gmail.com",
      active: true,
      createdAt: new Date("2023-01-01"),
      updatedAt: new Date("2023-01-02"),
    });
  });
});