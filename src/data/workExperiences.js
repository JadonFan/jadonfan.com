export const workExperiences = [
  {
    key: 'microsoft',
    imgSrc: 'images/microsoft.jpg',
    jobTitle: 'Software Engineer',
    companyName: 'Microsoft',
    location: 'Redmond',
    dateRange: 'August 2022 – Present',
    highlights: [],
    techs: [],
  },
  {
    key: 'wish2',
    imgSrc: 'images/wish.jpg',
    jobTitle: 'Software Engineering Intern',
    companyName: 'Wish',
    location: 'San Francisco (Remote from Toronto)',
    dateRange: 'September 2021 – December 2021',
    performance: 'Outstanding',
    highlights: [
      `
        Implemented various Android (Kotlin) and server-side (Python) features for the Wish Clips MVP, and worked with
        PMs and data scientists to collect user metrics and iterate on the features following the launch of the MVP
      `,
      `
        Utilized Apache Airflow and Apache Hive to automate the compilation of daily user reports into HTML emails
        for the content moderation team
      `,
      `
        Wrote and reviewed design documents for migration of legacy code to an MVI architecture with Jetpack components
      `,
    ],
    techs: ['Kotlin', 'Java', 'Python', 'Tornado', 'MongoDB', 'Treasure Data'],
  },
  {
    key: 'wish',
    imgSrc: 'images/wish.jpg',
    jobTitle: 'Software Engineering Intern',
    companyName: 'Wish',
    location: 'San Francisco (Remote from Toronto)',
    dateRange: 'January 2021 – April 2021',
    performance: 'Outstanding',
    highlights: [
      `
        Implemented various features — such as checkout offer extensions for eligible users,
        VAT information, and product bundles — on the Wish app that would convince users
        to complete their purchases quicker with more items in their cart
      `,
      'Monitored the impact of my features through A/B tests and through impression/click logging in Treasure Data',
      'Worked with Kotlin and Java on the front-end, and Python and MongoDB on the back-end',
      `
        Contributed on my own initiative to the success of other people on the team through extensive
        code reviews, knowledge transfer sessions with a new hire, numerous contributions to the engineering
        wiki, and improvements to our custom Android linter
      `,
    ],
    techs: ['Kotlin', 'Java', 'Python', 'Tornado', 'MongoDB', 'Treasure Data'],
  },
  {
    key: 'fundthrough',
    imgSrc: 'images/fundthrough.jpg',
    jobTitle: 'Software Engineering Intern',
    companyName: 'FundThrough',
    location: 'Toronto (Remote from Toronto)',
    dateRange: 'May 2020 – August 2020',
    performance: 'Outstanding',
    highlights: [
      `
        Utilized React and Redux — and implemented the corresponding Jest/Enzyme tests — to enhance an online
        invoice funding platform so that it is more personalized for each user based on their needs and
        financial history
      `,
      'Implemented various APIs and Rake tasks in Ruby on Rails along with the corresponding RSpec tests',
      `
        Launched a new funding flow along with the relevant logging events to make the funding process
        more smooth between clients and the customer success team
      `,
      `
        Created custom search filters from scratch on the admin panel so that the CS team can find past
        invoices quickly and conveniently
      `,
      'Created OpenAPI definitions for the REST APIs, and uploaded and tested them on Amazon API Gateway',
    ],
    techs: [
      'React',
      'Redux',
      'SCSS',
      'Ruby on Rails',
      'Rake',
      'PostgreSQL',
      'AWS',
    ],
  },
  {
    key: 'yuja',
    imgSrc: 'images/yuja.jpg',
    jobTitle: 'Software Engineering Intern',
    companyName: 'YuJa',
    location: 'Toronto',
    dateRange: 'September 2019 – December 2019',
    performance: 'Excellent',
    highlights: [
      `
        Implemented features – including a media file downloader for offline
        playback, background playback service, various media settings, and
        video and audio recording capabilities – for an Android (Java) app
        in a MVVM pattern
      `,
      `
        Worked extensively with various Material Design components in order to
        standardize the user interface across the app
      `,
      'Implemented RPCs for the app using Java Servlets, JDBC and Amazon S3',
      `
        Increased app rating by 0.7 stars, decreased average render time by 6% and decreased
        crash frequency by 4% based on metrics from the Firebase console
      `,
      'Migrated many of the old or deprecated libraries to newer libraries such as from SQLite to Room',
    ],
    techs: ['Java', 'PostgreSQL', 'AWS'],
  },
  {
    key: 'telushealth',
    imgSrc: 'images/telus.jpg',
    jobTitle: 'Software Developer in Test Intern',
    companyName: 'TELUS Health',
    location: 'Cambridge ON',
    dateRange: 'January 2019 – April 2019',
    performance: 'Excellent',
    highlights: [
      'Wrote automated RMI and REST API tests in Java for a medical software',
      'Configured tests in JMeter and Jenkins with test data in PostgreSQL',
      'Increased test coverage by 40% and identified 35 performance issues',
      'Refactored major parts of the codebase in order to maintain structural consistency',
      'Worked with the engineering team to determine the source of some identified issues',
    ],
    techs: ['Java', 'JMeter', 'Jenkins'],
  },
];
