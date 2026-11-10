const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};

const processInput = (
  input: string | number | boolean,
): string | number | boolean => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};

const formatCoordinate = (x: readonly [number, number, string]): string => {
  const [latitude, longitude, locationName] = x;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...array: T[][]): T[] => {
  return array.reduce((acc, curr) => acc.concat(curr), []);
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Access Granted");
      } else {
        reject(new Error("Access Denied: Must be 18 or older"));
      }
    }, 1000);
  });
};
