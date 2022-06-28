export const academicStatistics = [
  {
    key: 'cGPA',
    label: 'Cumulative GPA',
    value: '3.93',
    description:
      'Cumulative grade point average on the 4.0 scale (converted from a weighted percentage grade)',
  },
  {
    key: 'internships',
    label: 'Internships',
    value: '6',
    description: `Number of internships completed as part of the UWaterloo co-op program, with each
      internship spanning a period of 4 months`,
  },
  {
    key: 'tdhlCount',
    label: 'Honours',
    value: '3',
    description: "Number of times accepted onto the Team Dean's Honours List",
  },
];

export const academicTerms = [
  {
    term: '4B',
    title: 'At the finish line',
    description: null,
    courses: [
      {
        title: 'ECE457B Fundamentals of Computational Intelligence',
        description: `
        `,
      },
      {
        title: 'ECE495 Autonomous Vehicles',
        description: `
          `,
      },
    ],
  },
  {
    term: '4A',
    title: 'The finale is near',
    description: null,
    courses: [
      {
        title: 'ECE454 Distributed Computing',
        description: `
        `,
      },
      {
        title: 'ECE458 Computer Security',
        description: `
          `,
      },
      {
        title: 'ECE493 Reinforcement Learning and Probabilistic Reasoning',
        description: `
          `,
      },
    ],
  },
  {
    term: '3B',
    title: 'Me and My Gang Going Full Virtual',
    description: null,
    courses: [
      {
        title: 'ECE350 Real-time Operating Systems',
        description: `
          This course covered the fundamentals of operating systems, particularly real-time as you can guess from the
          course title. There was a lot of content to take in, such as memory allocation and management, multi-threading
          and multi-processing, caching and I/O, but no memorization was required as the assessments were open-book.
          Each lab involved the creation of a particular aspect of an operating system written in the C language
          that would run on the ARM-based Keil MCB1700 microprocessor.
        `,
      },
      {
        title: 'ECE356 Database Systems',
        description: `
            This course covered the fundamentals of databases including ER modelling, SQL queries, relational algebra,
            transactions, basic data warehousing and mining, concurrency and recovery. There were four labs done in MySQL,
            with the first one completed individually and the other three completed in groups of three. The final lab combined
            our knowledge of MySQL as well as some basic SciKit-learn APIs to predict whether a particular baseball player
            would be in the MLB Baseball Hall-of-Fame given their play stats. Overall, the breadth of knowledge covered was great,
            but the depth was lacking.
          `,
      },
      {
        title: 'ECE358 Computer Networks',
        description: `
            This course covered the fundamentals of computer networks, particularly of each layer in the OSI model other than
            the application and physical layers. For the longest time, I have been working as a software developer writing APIs
            on the back-end and calling them on the front-end but I didn't have a complete grasp of how these APIs were sent
            over computer networks. This course gave me that valuable knowledge, and I would be lying if I said that I
            didn't enjoy the content!
          `,
      },
    ],
  },
  {
    term: '3A',
    title: 'Crossing Into Uncharted Territories',
    description: null,
    courses: [
      {
        title: 'ECE306 Probability Theory and Statistics',
        description: ``,
      },
      {
        title: 'ECE327 Digital Systems Engineering',
        description: ``,
      },
      {
        title: 'ECE351 Compilers',
        description: `
          This course covered the fundamentals of compiler design and implementation. It started off with a recap
          of finite automata and grammar from ECE208 (discrete mathematics and logic). Then, we learnt how to apply
          those abstract knowledge to create and optimize various aspects of a compiler, including recursive descent
          parsing, compile-time optimizations, register allocation and garbage collection. Through the labs, I slowly
          but gradually applied my newfound knowledge of compilers to build a simple yet capable compiler in Java
          to convert Java code to a subset of the VHDL language to, finally, Assembly. Oh, and I was one (1!)
          percentage point away from achieving a perfect grade.
        `,
      },
      {
        title: 'ECE380 Analog Control Systems',
        description: ``,
      },
    ],
  },
  {
    term: '2B',
    title: 'To 2B or Not 2B',
    description: `
      Time flies by quickly. After the next co-op term, I'll be half way through the ECE program.
      I still have no regret about choosing ECE as both my hardware and software courses so far
      have been exciting and interesting. With most of the foundational courses cleared up, I do
      expect that the courses from here on out will be more practical, so I will be able to
      better see how what I have learnt so far can be applied to real-life situations. As for
      the 2B term itself, the content was not particularly difficult. The labs were time-consuming,
      so the lab rooms in the Engineering buildings felt like a second home to me, especially on
      weekend afternoons!
    `,
    courses: [
      {
        title: 'ECE208 Discrete Mathematics and Logic 2',
        description: ``,
      },
      {
        title: 'ECE224 Embedded Microprocessor Systems',
        description: ``,
      },
      {
        title: 'ECE252 Systems Programming and Concurrency',
        description: ``,
      },
    ],
  },
  {
    term: '2A',
    title: 'Hunger Games: UWaterloo Edition',
    description: `
      It appears that I survived the infamous 2A ECE term. With 6 courses, I essentially spent half of my day
      every weekday of the week on campus in a lecture, tutorial or lab... and that's on top of completing
      assignments, working on side projects, and preparing for co-op interviews. All in all, relaxation was mostly
      a weekend thing. Unfortunately, I only realized the great extent of my procrastination after midterm week,
      which saw my marks dip significantly from first year. Thankfully, I eventually caught up with the content
      after the midterm after promising myself to not leave the problem sets until final exam period.
      As a result, the final exams were able to save my grades.
    `,
    courses: [
      {
        title: 'ECE205 Advanced Calculus I',
        description: ``,
      },
      {
        title: 'ECE222 Digital Computers',
        description: ``,
      },
      {
        title: 'ECE250 Algorithms and Data Structures',
        description: ``,
      },
    ],
  },
  {
    term: '1B',
    title: 'Do You Even ECE?',
    description: `
      The previous study term was more of a general engineering term. On the other hand, with mathematics
      (both discrete and continuous), circuits, digital logic  and E&M courses all bundled into 1B, this term
      has clearly established itself as a more ECE-specific foundational term. I have so many opinions regarding
      each course, but I doubt anyone would want to hear my rants, so I'm going to summarize my opinions.
      I put in the most effort into circuits and felt it was easy  after doing so many problem sets. This effort
      paid off as I scored 100% in that course. Meanwhile, digital logic was difficult even after completing the
      problem sets since it required covered tons of content so quickly and a lot more memorization and out-of-the-box
      critical thinking. However, the course made me approach  problems with a more "hardware" mindset; for example,
      breaking down problems into state machines, with the consideration of transitions and assignments across various
      clock cycles. The difficulty of all of the other courses would somewhere between the two aforementioned courses,
      but they were about equally as useful to me.
    `,
    courses: null,
  },
  {
    term: '1A',
    title: 'The Beginning of a New Age',
    description: null,
    courses: null,
  },
];
