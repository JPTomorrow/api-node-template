interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const store: Task[] = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
  },
  {
    id: 2,
    title: "Learn Redux",
    completed: false,
  },
  {
    id: 3,
    title: "Learn React Router",
    completed: false,
  },
  {
    id: 4,
    title: "Cooking Lunch",
    completed: true,
  },
];

export { store };
