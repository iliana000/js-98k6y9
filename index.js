// Import stylesheets
import './style.css';

const input = [
  {
    id: 123,
    content: 'Test content',
    createTimestamp: 123213,
    answers: [
      {
        id: 142,
        rating: 10,
        content: 'Test answer',
      },
      {
        id: 242,
        rating: 2,
        content: 'Test answer 2',
      },
    ],
  },
  {
    id: 1024,
    content: 'Test content',
    createTimestamp: 54343,
    answers: [
      {
        id: 454,
        rating: 10,
        content: 'Test answer 2',
      },
      {
        id: 342,
        rating: 4,
        content: 'Test answer 3',
      },
    ],
  },
  {
    id: 250,
    content: 'Different test content',
    createTimestamp: 543431,
    answers: [
      {
        id: 854,
        rating: 10,
        content: 'Test answer 4',
      },
      {
        id: 346,
        rating: 3,
        content: 'Test answer 5',
      },
    ],
  },
];

const output = [
  {
    id: 123,
    content: 'Test content',
    createTimestamp: 123213,
    answers: [
      {
        id: 142,
        rating: 10,
        content: 'Test answer',
      },
      {
        id: 242,
        rating: 2,
        content: 'Test answer 2',
      },
    ],
  },
  {
    id: 250,
    content: 'Different test content',
    createTimestamp: 543431,
    answers: [
      {
        id: 854,
        rating: 10,
        content: 'Test answer 4',
      },
      {
        id: 346,
        rating: 3,
        content: 'Test answer 5',
      },
    ],
  },
];

const bestAnswerRate = (q) => Math.max(...q.answers.map((a) => a.rating));

// O(n)
const deduplicate = (questions) => {
  const sortedQuestions = input.sort((q1, q2) => {
    if (bestAnswerRate(q1) === bestAnswerRate(q2)) return q2.createTimestamp - q1.createTimestamp
    return bestAnswerRate(q1) - bestAnswerRate(q2);
  });
  let questionsMap = new Map(sortedQuestions.map((q) => [q.content, q]));
  let result = [...questionsMap.values()].sort((q1, q2) => q1.id - q2.id);
  return result;
};

// O(n^2)
// const deduplicate = (questions) => {
//   for (let i = 0; i < questions.length; i++) {
//     for (let j = i + 1; j < questions.length; j++) {
//       if (questions[i].content === questions[j].content) {
//         console.log('compareQuestion.content', questions[j].content);
//         const compareRate =
//           bestAnswerRate(questions[i]) - bestAnswerRate(questions[j]);
//         if (compareRate > 0) questions.splice(j, 1);
//         else if (compareRate < 0) questions.splice(i, 1);
//         else if (questions[i].createTimestamp < questions[j].createTimestamp)
//           questions.splice(j, 1);
//         else questions.splice(i, 1);
//       }
//     }
//   }
//   // IMPLEMENT ME
//   return questions.sort((q1, q2) => q1.id - q2.id);
// };

console.log(deduplicate(input));
