### Introduction

Access modifiers play an important role in Object-Oriented Programming. They control how class properties and methods can be accessed from different parts of a program. TypeScript mainly provides four modifiers: public, private, protected, and readonly.

### Explaining Access Modifiers with Examples

**1. Public**

The public modifier allows properties and methods to be accessed from anywhere. It is also the default modifier if we do not specify one.

```typescript
class User {
  readonly id: number;
  public name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const employee = new User(1, "Emon", 25);

employee.name = "Emon Khan"; // Works because name is public.
```

**2. Private**

The private modifier restricts access to the class where the property or method is declared. We cannot access it directly from outside the class.

```typescript
class User {
  readonly id: number;
  public name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const employee = new User(1, "Emon", 25);

employee.age = 26; // Error: age is private and can only be accessed inside User.
```

**3. Protected**

The protected modifier allows access within the class where it is declared and its child classes. However, it cannot be accessed directly from outside.

```typescript
class BankAccount {
  protected accountNumber: string;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }
}

class UserAccount extends BankAccount {
  showAccountNumber() {
    console.log(this.accountNumber); // Accessible through inheritance.
  }
}

const account = new UserAccount("123456789");
account.showAccountNumber();
```

**4. Readonly**

The readonly modifier prevents a property from being reassigned after it has been initialized. We can assign its value when declaring the property or inside the constructor.

```typescript
class User {
  readonly id: number;
  public name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const employee = new User(1, "Emon", 25);

console.log(employee.id); // Works because readonly properties can be accessed.
employee.id = 3; // Error: Cannot assign to 'id' because it is read-only.
```

### Conclusion

Access modifiers help control how class members are used and protect data from unwanted changes. Understanding these four modifiers makes it easier to write organized and maintainable TypeScript code.
"""
