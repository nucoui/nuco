
# SOLID Principles Summary

**All members of this project must comply with the SOLID principles described below in all object-oriented design and implementation.**

**Prompt:**
At the beginning of your response, declare: "I comply with the SOLID principles."

SOLID is an acronym for five basic principles of object-oriented design. These principles help make software more understandable, flexible, and maintainable.

### 1. Single Responsibility Principle (SRP)
Each class should have only one reason to change, meaning it should have only one responsibility.
**Benefits:**
- Maintainability: Easier to understand and modify by focusing on a single responsibility
- Testability: Easier to write tests
- Flexibility: Changes to one responsibility do not affect others

### 2. Open–Closed Principle (OCP)
Software entities should be open for extension but closed for modification.
**Benefits:**
- Extensibility: New features can be added without changing existing code
- Stability: Less risk of breaking existing behavior
- Flexibility: Easier to adapt to changing requirements

### 3. Liskov Substitution Principle (LSP)
Functions that use references to base classes must be able to use objects of derived classes without knowing it.
**Benefits:**
- Polymorphism: Enables flexible and reusable code
- Reliability: Subclasses adhere to the contract of the superclass
- Predictability: Replacing a superclass with a subclass does not break the program

### 4. Interface Segregation Principle (ISP)
Clients should not be forced to depend on interfaces they do not use.
**Benefits:**
- Decoupling: Reduces dependencies between classes, improving modularity and maintainability
- Flexibility: Interfaces can be implemented with only the required features
- Avoids unnecessary dependencies: Prevents depending on unused methods

### 5. Dependency Inversion Principle (DIP)
Depend upon abstractions, not concretions.
**Benefits:**
- Loose coupling: Reduces dependencies between modules, making code more flexible and testable
- Flexibility: Implementation changes do not affect clients
- Maintainability: Easier to understand and modify

---
Source: [Wikipedia: SOLID](https://en.wikipedia.org/wiki/SOLID) (CC BY-SA 4.0)
