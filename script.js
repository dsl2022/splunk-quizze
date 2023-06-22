const questions = [
    {
      question: "What are the different user roles in Splunk?",
      choices: [
        "Administrator, Moderator, User",
        "User, Power User, Admin",
        "Reader, Writer, Editor",
        "Viewer, Contributor, Manager"
      ],
      answer: 1
    },
    {
      question: "What does Splunk use as buckets?",
      choices: [
        "Indexes",
        "Folders",
        "Files",
        "Databases"
      ],
      answer: 0
    },
    {
      question: "Which of the following is a distributable streaming command in Splunk?",
      choices: [
        "stats",
        "top",
        "eval",
        "transaction"
      ],
      answer: 2
    },
    {
      question: "What is the purpose of the search bar and timeline in Splunk?",
      choices: [
        "To manage user roles and permissions",
        "To visualize search results",
        "To filter search queries",
        "To set the time range for the search"
      ],
      answer: 3
    },
    {
      question: "Name three basic search operators in Splunk.",
      choices: [
        "index, source, fields",
        "eval, where, spath",
        "field expression, boolean, wildcard",
        "top, stats, transaction"
      ],
      answer: 2
    },
    {
      question: "What is the significance of the Field sidebar in Splunk?",
      choices: [
        "It displays the search log",
        "It shows the execution cost of the search",
        "It provides options for selecting and analyzing fields in search results",
        "It displays the search timeline"
      ],
      answer: 2
    },
    {
      question: "How can you filter fields in a Splunk search?",
      choices: [
        "Using the 'filter' command",
        "Using the 'search' command",
        "Using the 'fields' command",
        "Using the 'filterby' command"
      ],
      answer: 2
    },
    {
      question: "How can you retrieve specific fields from a search result in Splunk?",
      choices: [
        "Using the 'select' command",
        "Using the 'filter' command",
        "Using the 'lookup' command",
        "Using the 'fields' command with a plus sign (+)"
      ],
      answer: 3
    },
    {
      question: "What is the syntax to add a search command in Splunk?",
      choices: [
        "(command)",
        "|command",
        "[command]",
        "{command}"
      ],
      answer: 1
    },
    {
      question: "How can you rename a field in Splunk search results?",
      choices: [
        "Using the 'alter' command",
        "Using the 'replace' command",
        "Using the 'rename' command",
        "Using the 'modify' command"
      ],
      answer: 2
    },
    {
      question: "How can you order Splunk search results to display the last 20 events?",
      choices: [
        "Using the 'tail' command",
        "Using the 'bottom' command",
        "Using the 'last' command",
        "Using the 'limit' command"
      ],
      answer: 0
    },
    {
      question: "How can you order Splunk search results to display the first 20 events?",
      choices: [
        "Using the 'head' command",
        "Using the 'top' command",
        "Using the 'first' command",
        "Using the 'limit' command"
      ],
      answer: 0
    },
    {
      question: "How do you make a search case sensitive in Splunk?",
      choices: [
        "By using the 'CASE' function with the 'search' command",
        "By using the 'upper' function with the 'search' command",
        "By using the 'lower' function with the 'search' command",
        "By using the 'exact' function with the 'search' command"
      ],
      answer: 0
    },
    {
      question: "How can you use regex to find uppercase strings in Splunk?",
      choices: [
        "|regex '^[A-Z]+$'",
        "|regex '^[a-z]+$'",
        "|regex '(?=^[A-Z]+$)'",
        "|regex '(?=^[a-z]+$)'"
      ],
      answer: 0
    },
    {
      question: "How can you use regex to find lowercase strings in Splunk?",
      choices: [
        "|regex '^[A-Z]+$'",
        "|regex '^[a-z]+$'",
        "|regex '(?=^[A-Z]+$)'",
        "|regex '(?=^[a-z]+$)'"
      ],
      answer: 1
    },
    {
      question: "How can you access the job inspector in Splunk?",
      choices: [
        "By clicking on the 'Search Log' link",
        "By using the 'Job Inspector' button",
        "By using the 'Search Tools' menu",
        "By using the provided URL pattern"
      ],
      answer: 3
    },
    {
      question: "What are the two components of the job inspector in Splunk?",
      choices: [
        "Search Log and Execution Cost",
        "Execution Cost and Search Job Property",
        "Search Job Property and Search Log",
        "Execution Time and Search Bar"
      ],
      answer: 1
    },
    {
      question: "How can you optimize an inefficient search in Splunk?",
      choices: [
        "By reducing the time range",
        "By adding more fields to the search",
        "By increasing the number of search commands",
        "By using more wildcard characters in the search string"
      ],
      answer: 0
    },
    {
      question: "What are some best practices for minimizing inefficient searches in Splunk?",
      choices: [
        "Include only the necessary fields",
        "Use exclusion instead of inclusion",
        "Use wildcards in the front or middle of the search string",
        "Search across all indexes"
      ],
      answer: 0
    },
    {
      question: "How can you analyze the disk usage of a search in Splunk?",
      choices: [
        "By checking the Execution Cost in the job inspector",
        "By examining the scanCount/second in the job inspector",
        "By reviewing the OptimizeSearch section in the job inspector",
        "By analyzing the Search Job Property in the job inspector"
      ],
      answer: 3
    },
    {
    question: "Which command is used to find the top 3 values for the 'Beds' field in the 'airbnb' index?",
    choices: [
      "top",
      "rare",
      "contingency",
      "stats"
    ],
    answer: 0
  },
  {
    question: "Which command is used to calculate the minimum price by neighborhood in the 'airbnb' index?",
    choices: [
      "stats min(Price) by Neighbourhood",
      "stats max(Price) by Neighbourhood",
      "stats count by Neighbourhood",
      "chart count as types by 'Property Type'"
    ],
    answer: 0
  },
  {
    question: "Which command is used to create a line chart showing the average response time per page over time?",
    choices: [
      "timechart span=1h avg(response_time) by page",
      "chart title='Average Response Time by Page' xlabel='Time' ylabel='Response Time (ms)' format='line'",
      "index=airbnb | chart count as types by 'Property Type'",
      "index=sales sourcetype='access_combined_wcookie' | timechart span=1h count as refererCount by referer"
    ],
    answer: 0
  },
  {
    question: "Which command is used to find the maximum price by neighborhood in the 'airbnb' index?",
    choices: [
      "stats min(Price) by Neighbourhood",
      "stats max(Price) by Neighbourhood",
      "stats count by Neighbourhood",
      "chart count as types by 'Property Type'"
    ],
    answer: 1
  },
  {
    question: "Which command is used to create a chart showing the count of events by 'Property Type' in the 'airbnb' index?",
    choices: [
      "top limit=3 Beds",
      "rare",
      "contingency Neighbourhood 'Property Type'",
      "chart count as types by 'Property Type'"
    ],
    answer: 3
  },
  {
    question: "Which command is used to calculate the count of events by 'Neighbourhood' in the 'airbnb' index?",
    choices: [
      "stats min(Price) by Neighbourhood",
      "stats max(Price) by Neighbourhood",
      "stats count by Neighbourhood",
      "chart count as types by 'Property Type'"
    ],
    answer: 2
  },
//   {
//     question: "Which command is used to create a line chart with formatted axes and title?",
//     choices: [
//       "timechart span=1h avg(response_time) by page",
//       "chart title='Average Response Time by Page' xlabel='Time' ylabel='Response Time (ms)' format='line'",
//       "index=airbnb | chart count as types by 'Property Type'",
//       "index=sales sourcetype='access_combined_wcookie' | timechart span=1h count as refererCount by referer"
//     ],
//     answer: 1
//   },
  {
    question: "Which command is used to create a chart showing the count of events by 'referer' over time?",
    choices: [
      "timechart span=1h count as refererCount by referer",
      "top limit=3 Beds",
      "contingency Neighbourhood 'Property Type'",
      "stats max(Price) by Neighbourhood"
    ],
    answer: 0
  },
  {
    question: "Which command is used to find the top 3 least common values for the 'Beds' field in the 'airbnb' index?",
    choices: [
      "top limit=3 Beds",
      "rare",
      "contingency Neighbourhood 'Property Type'",
      "stats min(Price) by Neighbourhood"
    ],
    answer: 1
  },
  {
    question: "Which command is used to calculate the contingency between 'Neighbourhood' and 'Property Type' in the 'airbnb' index?",
    choices: [
      "top limit=3 Beds",
      "rare",
      "contingency Neighbourhood 'Property Type'",
      "stats min(Price) by Neighbourhood"
    ],
    answer: 2
  },
  ];
  
  
  const quizContainer = document.getElementById("question-container");
  const submitButton = document.getElementById("submit-btn");
  
  function createQuiz() {
    for (let i = 0; i < questions.length; i++) {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
  
      const questionText = document.createElement("p");
      questionText.textContent = questions[i].question;
      questionDiv.appendChild(questionText);
  
      const choices = questions[i].choices;
      for (let j = 0; j < choices.length; j++) {
        const choiceLabel = document.createElement("label");
        const choiceRadio = document.createElement("input");
        choiceRadio.type = "radio";
        choiceRadio.name = "question" + i;
        choiceRadio.value = j;
        choiceLabel.textContent = choices[j];
        choiceLabel.appendChild(choiceRadio);
        questionDiv.appendChild(choiceLabel);
      }
  
      quizContainer.appendChild(questionDiv);
    }
  }
  
  function calculateScore() {
    let score = 0;
  
    for (let i = 0; i < questions.length; i++) {
      const selectedOption = document.querySelector(
        `input[name="question${i}"]:checked`
      );
  
      if (selectedOption && selectedOption.value == questions[i].answer) {
        score++;
      }
    }
  
    return score;
  }
  
  submitButton.addEventListener("click", function () {
    const score = calculateScore();
    alert("Your score: " + score + "/" + questions.length);
  });
  
  createQuiz();
  