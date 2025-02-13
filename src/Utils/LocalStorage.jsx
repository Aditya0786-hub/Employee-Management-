const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Monthly Report",
        description: "Compile and summarize the monthly sales data.",
        date: "2025-01-10",
        category: "Reports",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend the Q1 strategy meeting.",
        date: "2025-01-12",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Sales Forecast",
        description: "Review and update the quarterly sales forecast.",
        date: "2025-01-14",
        category: "Planning",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Audit Expense Reports",
        description: "Verify the accuracy of employee expense reports.",
        date: "2025-01-15",
        category: "Finance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Client Database",
        description: "Ensure all client information is up-to-date.",
        date: "2025-01-15",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Prepare Presentation",
        description: "Create slides for the upcoming client pitch.",
        date: "2025-01-18",
        category: "Presentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Review Marketing Strategy",
        description: "Analyze the current marketing strategy and suggest improvements.",
        date: "2025-01-17",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Conduct Training Session",
        description: "Host a training session for new hires.",
        date: "2025-01-20",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Draft Client Proposal",
        description: "Create a proposal for a prospective client.",
        date: "2025-01-19",
        category: "Proposals",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      new: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Diya",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Organize Files",
        description: "Sort and label the files in the shared drive.",
        date: "2025-01-09",
        category: "Admin",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Review Contracts",
        description: "Read and analyze vendor contracts for compliance.",
        date: "2025-01-16",
        category: "Legal",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Plan Team Outing",
        description: "Organize the team-building outing for this quarter.",
        date: "2025-01-18",
        category: "Events",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Onboarding Documents",
        description: "Revise onboarding documents for new employees.",
        date: "2025-01-19",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Ananya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Social Media Update",
        description: "Post new updates on all company social media platforms.",
        date: "2025-01-11",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Schedule Interviews",
        description: "Coordinate interview schedules for new hires.",
        date: "2025-01-20",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Draft Press Release",
        description: "Write a draft for the new product launch announcement.",
        date: "2025-01-14",
        category: "PR",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Evaluate Campaign Effectiveness",
        description: "Analyze the recent email marketing campaign.",
        date: "2025-01-18",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory Check",
        description: "Audit the inventory in the main warehouse.",
        date: "2025-01-14",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Customer Feedback Analysis",
        description: "Analyze feedback from the recent customer survey.",
        date: "2025-01-13",
        category: "Analysis",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Inspect Equipment",
        description: "Conduct a routine inspection of all equipment.",
        date: "2025-01-12",
        category: "Maintenance",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Warehouse Layout",
        description: "Optimize the warehouse layout for better efficiency.",
        date: "2025-01-19",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Safety Training Session",
        description: "Organize a safety training session for the warehouse team.",
        date: "2025-01-18",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      new: 1,
      completed: 2,
      failed: 1
    }
  }
];



const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123"
};

  
  export const setlocalStorage = () => {
        localStorage.setItem('employees', JSON.stringify(employees))//set the local storage and convert it into string
        localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getlocalstorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))//get the local storage and convert it into stirng
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}

  }
