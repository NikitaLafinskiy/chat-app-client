export const mockMessages = [
  {
    id: 1,
    from: {
      id: 2,
      username: "mockUsername2",
      isActivated: true,
      activationLink: "http:?",
    },
    conversation: "mockID2",
    body: "How is your day",
  },
  {
    id: 2,
    from: {
      id: 2,
      username: "mockUsername1",
      isActivated: true,
      activationLink: "http:?",
    },
    conversation: "mockID2",
    body: "Im fine hows yours",
  },
  {
    id: 3,
    from: {
      id: 2,
      username: "mockUsername2",
      isActivated: true,
      activationLink: "http:?",
    },
    conversation: "mockID2",
    body: "Also good, how do you like the weather",
  },
  {
    id: 4,
    from: {
      id: 2,
      username: "mockUsername1",
      isActivated: true,
      activationLink: "http:?",
    },
    conversation: "mockID2",
    body: "Weather is beautiful today",
  },
];

export const mockConversationsArray = [
  { id: "mockID1", isPrivate: true, name: "mockUsername1" },
  { id: "mockID2", isPrivate: true, name: "mockUsername2" },
  { id: "mockID3", isPrivate: true, name: "mockUsername3" },
];
