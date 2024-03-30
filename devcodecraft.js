// simple_task_assignment_system.js

class Task {
    constructor(title, description, assignedTo) {
        this.title = title;
        this.description = description;
        this.assignedTo = assignedTo;
        this.status = 'Pending';
    }

    markAsCompleted() {
        this.status = 'Completed';
    }
}

class TaskAssignmentSystem {
    constructor() {
        this.tasks = [];
    }

    assignTask(task) {
        this.tasks.push(task);
    }

    viewTasks() {
        console.log('Tasks:');
        this.tasks.forEach(task => console.log(`${task.title} - Assigned to: ${task.assignedTo}, Status: ${task.status}`));
    }
}

// Example usage
const taskAssignmentSystem = new TaskAssignmentSystem();
const task1 = new Task('Design Landing Page', 'Design a landing page for the website', 'Alice');
const task2 = new Task('Write Blog Post', 'Write a blog post about the new product features', 'Bob');
task1.markAsCompleted();
taskAssignmentSystem.assignTask(task1);
taskAssignmentSystem.assignTask(task2);
taskAssignmentSystem.viewTasks();
