# test-question-filtering
# Software Engineer Recruitment Task

## Problem
Our application allows the submition of questions, which can be answered by other users. It can happen that the same question is submitted multiple times, but we want to keep only a single instance of each question.

Your task is to filter out duplicate questions from an input list, and output a list of distinct questions ordered by their id (ascending). Uniqueness of questions is based on an exact match of the content property (case-sensitive, same whitespace, etc). If the question content matches, the question should be chosen based on the following rules:

* The question with the highest rated answer has priority.
* If both have the same answer rating, the older (createTimestamp) question has priority.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-98k6y9?devToolsHeight=33&file=index.js)
