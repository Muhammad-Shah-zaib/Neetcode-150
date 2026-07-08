# NeetCode 150 Daily Progress

This repository is dedicated to tracking my daily progress through the [NeetCode 150](https://neetcode.io/roadmap) problem set.
My goal is to solve one question every single day to stay consistent, improve my problem-solving skills, and prepare for coding interviews.

## Solved Problems

<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Problem Name</th>
      <th>Language</th>
      <th>Approach</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4" align="center"><strong>Arrays & Hashing</strong></td>
    </tr>
    <tr>
      <td>1</td>
      <td><a href="./Typescript/1-two-sum.ts">Two Sum</a></td>
      <td>TypeScript</td>
      <td><strong>Hash Map:</strong> Store numbers and indices in a map. For each number, check if the required difference (<code>target - current</code>) is already in the map. O(n) time.</td>
    </tr>
    <tr>
      <td>217</td>
      <td><a href="./Typescript/217-contains-duplicate.ts">Contains Duplicate</a></td>
      <td>TypeScript</td>
      <td><strong>Hash Set:</strong> Use a Set to track seen numbers. Return true if a number is already in the Set. O(n) time.</td>
    </tr>
    <tr>
      <td>242</td>
      <td><a href="./Typescript/242-valid-anagram.ts">Valid Anagram</a></td>
      <td>TypeScript</td>
      <td><strong>Hash Map:</strong> Count character frequencies of the first string in an object. Subtract frequencies using the second string. If all counts are 0, it's an anagram. O(n) time.</td>
    </tr>
  </tbody>
</table>
