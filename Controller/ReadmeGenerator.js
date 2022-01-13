const fs = require("fs");
const { TOPIC, DIFFICULTY, PLATFORM } = require("../Type/SolvedProblem.type");
const { solvedProblemModel } = require("../Model/SolvedProblem.model");

function generateOverview() {
    return `# Coding Test Practice
 - # Overview
    - [Sort by Coding Test Platform](#sort-by-coding-test-platform)    
      - [Programmers](#programmers)
        - [Level1](#level1)
        - [Level2](#level2)
        - [Level3](#level3)
      - [Leetcode](#leetcode)
        - [Easy](#easy)
        - [Medium](#medium)
        - [Hard](#hard)
      - [BOJ](#boj)
    
    - [Sort by Related Topic](#sort-by-related-topic)
      - [자료구조](#자료구조)
        - [배열](#배열)
        - [연결 리스트](#연결-리스트)
        - [해시](#해시)
        - [스택](#스택)
        - [큐](#큐)
      - [알고리즘](#알고리즘)
        - [정렬](#정렬)
        - [완전 탐색](#완전-탐색)
        - [DFS](#DFS)
        - [BFS](#BFS)
        - [탐욕법](#탐욕법)
        - [이분 탐색](#이분-탐색)
    `

    /**
    <!--
      선택 목록2
    
      - [힙](#힙)
        - [우선 순위 큐](#우선-순위-큐)
      - [그래프](#그래프)
        - [트리](#트리)
        - [트라이](#트라이)
        - [최단 경로](#최단-경로)
        - [최소 신장](#최소-신장)
      - [동적계획법](#동적계획법)
      - [비트 연산](#비트-연산) -->
    
    <!--
    - [Presets](#Presets)
      - [연결 리스트 Preset]
      - [스택 Preset](#스택-preset)
      - [큐 Preset](#큐-preset)
      - [힙 Preset](#힙-preset)
        - [우선 순위 큐 Preset](#우선-순위-큐-preset)
      - [이분 탐색 Preset](#이분-탐색-preset)
      - [그래프 Preset](#그래프-preset)
        - [트리 Preset](#트리-preset) -->
     */
}

function generatePlatformProblems() {
    const difficulties = {
        [DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1]: '',
        [DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2]: '',
        [DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL3]: '',
        [DIFFICULTY[PLATFORM.LEETCODE].EASY]: '',
        [DIFFICULTY[PLATFORM.LEETCODE].MEDIUM]: '',
        [DIFFICULTY[PLATFORM.LEETCODE].HARD]: '',
        /**
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[5]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[4]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[3]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[2]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[1]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[5]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[4]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[3]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[2]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[1]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[5]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[4]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[3]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[2]]}
         ${difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[1]]}
         */
    } 

    Object.keys(difficulties).forEach((diff) => {
        difficulties[diff] = Object.keys(solvedProblemModel).filter((key) => solvedProblemModel[key].difficulty === diff).sort((a, b) => solvedProblemModel[a].name.localeCompare(solvedProblemModel[b].name)).map((key) => {            
            let string = "- #### " + solvedProblemModel[key].name;

            if (solvedProblemModel[key].url && Array.isArray(solvedProblemModel[key].url) && solvedProblemModel[key].url.length > 0) {
                solvedProblemModel[key].url.forEach((u) => string += ("\n" + "             - " + u.icon + " [" + u.name + "]" + "(" + u.link  + ")")); 
            }

            return string;
        }).join("\n         ");
    });

    return `- ## Sort by Coding Test Platform

    - ## Programmers
  
      - ### Level1
        ${difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1]}
      - ### Level2
        ${difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2]}
      - ### Level3
        ${difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL3]}

    - ## Leetcode

      - ### Easy
        ${difficulties[DIFFICULTY[PLATFORM.LEETCODE].EASY]}
      - ### Medium
        ${difficulties[DIFFICULTY[PLATFORM.LEETCODE].MEDIUM]}
      - ### Hard
        ${difficulties[DIFFICULTY[PLATFORM.LEETCODE].HARD]}

    - ## BOJ

      - ### Bronze
      - ### Silver
      - ### Gold
    `
}

function generatorRelatedToTopicProblems() {
    const topics = {
        [TOPIC.DATA_STRUCTURE.ARRAY]: '',
        [TOPIC.DATA_STRUCTURE.LINKED_LIST]: '',
        [TOPIC.DATA_STRUCTURE.HASH]: '',
        [TOPIC.DATA_STRUCTURE.STACK]: '',
        [TOPIC.DATA_STRUCTURE.QUEUE]: '',
        [TOPIC.SORTING]: '',
        [TOPIC.BRUTEFORCE]: '',
        [TOPIC.BFS]: '',
        [TOPIC.DFS]: '',
        [TOPIC.GREEDY]: '',
        [TOPIC.BINARY_SEARCH]: '',
    } 

    Object.keys(topics).forEach((topic) => {
        topics[topic] = Object.keys(solvedProblemModel).filter((key) => solvedProblemModel[key].topic.indexOf(topic) > -1).map((key) => {
            return `- [${solvedProblemModel[key].name}](#${solvedProblemModel[key].name.split(" ").join("-")})\n`
        }).join("        ");
    });

    return `
 - ## Sort by Related Topic

 - ## 자료구조
    - ## 배열
        ${topics[TOPIC.DATA_STRUCTURE.ARRAY]}  
    - ## 연결 리스트
        ${topics[TOPIC.DATA_STRUCTURE.LINKED_LIST]}
    - ## 해시
        ${topics[TOPIC.DATA_STRUCTURE.HASH]}
    - ## 스택
        ${topics[TOPIC.DATA_STRUCTURE.STACK]}
    - ## 큐
        ${topics[TOPIC.DATA_STRUCTURE.QUEUE]}
 - ## 알고리즘
    - ## 정렬
        ${topics[TOPIC.SORTING]}
    - ## 완전 탐색
        ${topics[TOPIC.BRUTEFORCE]}
    - ## DFS
        ${topics[TOPIC.DFS]}
    - ## BFS
        ${topics[TOPIC.BFS]}
    - ## 탐욕법
        ${topics[TOPIC.GREEDY]}
    - ## 이분 탐색
        ${topics[TOPIC.BINARY_SEARCH]}
    `;
}

function generateREADME() {
    const README = generateOverview() + "\n" + generatePlatformProblems() + "\n" + generatorRelatedToTopicProblems();
    fs.writeFileSync('dist/README.md', README);
}
 
module.exports = { generateREADME }