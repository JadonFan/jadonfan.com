export const workExperiences = [
  {
    key: 'wish',
    imgSrc: 'images/wish.jpg',
    jobTitle: 'Full Stack Android Developer (Intern)',
    companyName: 'Wish',
    location: 'San Francisco (Remote from Toronto)',
    dateRange: 'January 2021 – April 2021',
    evaluationRating: 'Outstanding',
    highlights: [
      `
        Implemented various features — such as checkout offer extensions for eligible users,
        VAT information for UK users and product bundles — on the Wish app that would convince users
        to complete their purchases quicker with more items in their cart
      `,
      'Monitored the impact of my features through A/B experiments and Treasure Data logs',
      'Worked with Kotlin and Java on the front-end, and Python and MongoDB on the back-end',
      `
        Contributed on my own initiative to the success of other people on the team through extensive
        code reviews, knowledge transfer sessions with a new hire, numerous contributions to the company-wide
        wiki and improvements to our custom Android linter
      `,
    ],
    techs: ['Kotlin', 'Java', 'Python', 'MongoDB', 'Treasure Data'],
  },
  {
    key: 'fundthrough',
    imgSrc: 'images/fundthrough.jpg',
    jobTitle: 'Full Stack Web Developer (Intern)',
    companyName: 'FundThrough',
    location: 'Toronto (Remote from Toronto)',
    dateRange: 'May 2020 – August 2020',
    evaluationRating: 'Outstanding',
    highlights: [
      `
        Enhanced, using React, Redux and SCSS, the user interface of an online invoice funding platform
        along with the corresponding Jest/Enzyme tests
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
    jobTitle: 'Full Stack Android Developer (Intern)',
    companyName: 'YuJa',
    location: 'Toronto',
    dateRange: 'September 2019 – December 2019',
    evaluationRating: 'Excellent',
    highlights: [
      `
        Implemented features – including a media file downloader, background media playback
        service, various media playback settings and in-app video and audio recorders – for an
        Android (Java) app in an MVVM pattern
      `,
      `
        Worked extensively with various material design components in order to better standardize
        the user interface across the app
      `,
      'Implemented RPCs for the app using Java Servlets, JDBC and Amazon S3',
      'Increased app rating by 0.7 stars, decreased average render time by 6% and decreased crash frequency by 4%',
      'Migrated many of the old or deprecated libraries to newer Jetpack libraries such as Room',
    ],
    techs: ['Java', 'PostgreSQL', 'AWS'],
  },
  {
    key: 'telushealth',
    imgSrc: 'images/telus.jpg',
    jobTitle: 'Software Developer in Test (Intern)',
    companyName: 'TELUS Health',
    location: 'Cambridge ON',
    dateRange: 'January 2019 – April 2019',
    evaluationRating: 'Excellent',
    highlights: [
      'Wrote automated RMI and REST API tests in Java for a medical software',
      'Configured tests in JMeter and Jenkins with test data in PostgreSQL',
      'Increased test coverage by 40% and identified 35 performance issues',
      'Refactored major parts of the codebase in order to maintain structural consistency',
      'Worked with the engineering teams to determine the source of some identified issues',
    ],
    techs: ['Java', 'JMeter', 'Jenkins'],
  },
];
