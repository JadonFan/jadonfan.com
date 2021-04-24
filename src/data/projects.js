export const projects = [
  {
    title: 'Factibly',
    meta: 'Crowd-Sourced Fact Checker',
    description: [
      'We used TypeScript and React on the front-end and Django on the back-end, with Apollo as',
      'the client for our custom GraphQL queries and mutations. We also explored other various',
      'aspects of web development, such as accessibility (WCAG 2.1) and search engine',
      'optimizations (SEO).',
    ].join(' '),
    labels: ['React', 'Redux', 'Apollo Client', 'MDC', 'Jest', 'Enzyme'],
    repoUrl: 'https://github.com/Sapphire-Labs/factibly',
    appUrl: 'www.factibly.com',
  },
  {
    title: 'Budgetter',
    meta: 'Android Budget Tracker',
    description: [
      'I developed a Material-themed Android app with modern Jetpack libaries,',
      "dependency injection and Airbnb's Mavericks framework. With the app, you",
      'can keep track of your individual transactions either by manually filling out',
      'the details of each transaction or by using the custom barcode scanner.',
      'Then, at the end of every week, you can obtain a summary of how much',
      "you've spent relative to your budget for that week.",
    ].join(' '),
    labels: ['Android SDK', 'Mavericks', 'Hilt', 'Room', 'Cloud Firestore'],
    repoUrl: 'https://github.com/JadonFan/Budgeting',
  },
  {
    title: 'MadLad',
    meta: 'First-Person Desktop Shooter',
    description: [
      'This game is not just any of your classic desktop shooter games.',
      'It contains many twists and turns with obstacles to get in your way!',
    ].join(' '),
    labels: ['Pygame', 'Numpy'],
    repoUrl: 'https://github.com/JadonFan/MazeShooter',
  },
  {
    title: 'First Game',
    meta: 'Family-Friendly Casual Games',
    description: [
      'This Android app may seem basic, but it helped me a lot with getting',
      'started in Android development.',
    ].join(' '),
    labels: ['Android SDK'],
    repoUrl: 'https://github.com/JadonFan/Casual-Games',
  },
];
