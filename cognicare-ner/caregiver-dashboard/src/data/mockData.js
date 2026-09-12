export const patients = [
  {
    id: 1,
    name: "Ramesh Kumar",
    age: 72,
    lastActivity: "Today, 10:30 AM",
    accuracy: 82,
    sessions: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Anita Devi",
    age: 68,
    lastActivity: "Yesterday, 5:15 PM",
    accuracy: 74,
    sessions: 9,
    status: "Needs attention",
  },
  {
    id: 3,
    name: "Mohan Das",
    age: 75,
    lastActivity: "Today, 9:00 AM",
    accuracy: 89,
    sessions: 15,
    status: "Active",
  },
]

export const alerts = [
  {
    id: 1,
    type: "performance",
    title: "Performance pattern noticed",
    message:
      "Accuracy has been lower than the patient's recent average.",
    patient: "Anita Devi",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "reminder",
    title: "Scheduled activity missed",
    message:
      "The morning cognitive activity has not been completed.",
    patient: "Anita Devi",
    time: "4 hours ago",
  },
]

export const reminders = [
  {
    id: 1,
    patient: "Ramesh Kumar",
    activity: "Memory Match",
    time: "10:00 AM",
    status: "Completed",
  },
  {
    id: 2,
    patient: "Anita Devi",
    activity: "Daily Routine Recall",
    time: "11:00 AM",
    status: "Missed",
  },
  {
    id: 3,
    patient: "Mohan Das",
    activity: "Pattern Recognition",
    time: "4:00 PM",
    status: "Pending",
  },
]

export const cognitiveDomains = [
  {
    domain: "Memory",
    score: 82,
  },
  {
    domain: "Attention",
    score: 76,
  },
  {
    domain: "Executive Function",
    score: 71,
  },
  {
    domain: "Language",
    score: 85,
  },
]

export const linkingRequests = [
  {
    id: 1,
    patientName: "Ramesh Kumar",
    patientCode: "CGN-1024",
    status: "Pending",
  },
]

export const caregiver = {
  name: "Caregiver",
  email: "caregiver@example.com",
}