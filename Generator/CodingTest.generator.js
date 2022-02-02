const fs = require("fs");
const { TOPIC, DIFFICULTY, PLATFORM } = require("../Model/CodingTest.model");
const { codingTestData } = require("../Data/CodingTest.data");


function makeDifficulties() {
  const difficulties = {
    [DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL3]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.LEETCODE].EASY]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.LEETCODE].MEDIUM]: {num: 0, content: ''},
    // [DIFFICULTY[PLATFORM.LEETCODE].HARD]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].BRONZE[5]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].BRONZE[4]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].BRONZE[3]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].BRONZE[2]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].BRONZE[1]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].SILVER[5]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].SILVER[4]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].SILVER[3]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].SILVER[2]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].SILVER[1]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].GOLD[5]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].GOLD[4]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].GOLD[3]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].GOLD[2]]: {num: 0, content: ''},
    [DIFFICULTY[PLATFORM.BOJ].GOLD[1]]: {num: 0, content: ''}
  } 

  Object.keys(difficulties).forEach((diff) => {
    const filteredModel = Object.keys(codingTestData).filter((key) => codingTestData[key].difficulty === diff);
    difficulties[diff].num = filteredModel.length;
    difficulties[diff].content = filteredModel.sort((a, b) => codingTestData[a].name.localeCompare(codingTestData[b].name)).map((key) => {            
        let string = "- #### " + codingTestData[key].name;

        if (codingTestData[key].url && Array.isArray(codingTestData[key].url) && codingTestData[key].url.length > 0) {
            codingTestData[key].url.forEach((u) => string += ("\n" + "             - " + u.icon + " [" + u.name + "]" + "(" + u.link  + ")")); 
        }

        return string;
    }).join("\n        ");
  });

  return difficulties;
}

function makeTopics() {
  const topics = {
    [TOPIC.DATA_STRUCTURE.ARRAY]: {num: 0, content: []},
    [TOPIC.DATA_STRUCTURE.LINKED_LIST]: {num: 0, content: []},
    [TOPIC.DATA_STRUCTURE.HASH]: {num: 0, content: []},
    [TOPIC.DATA_STRUCTURE.STACK]: {num: 0, content: []},
    [TOPIC.DATA_STRUCTURE.QUEUE]: {num: 0, content: []},
    [TOPIC.SORTING]: {num: 0, content: []},
    [TOPIC.BRUTEFORCE]: {num: 0, content: []},
    [TOPIC.BFS]: {num: 0, content: []},
    [TOPIC.DFS]: {num: 0, content: []},
    [TOPIC.GREEDY]: {num: 0, content: []},
    [TOPIC.BINARY_SEARCH]: {num: 0, content: []},
  }   

  Object.keys(topics).forEach((topic) => {
      const filteredModel = Object.keys(codingTestData).filter((key) => codingTestData[key].topic.indexOf(topic) > -1);
      topics[topic].num = filteredModel.length;
      topics[topic].content = filteredModel.map((key) => {
            return { key, sentence: `- [${codingTestData[key].name}](#${codingTestData[key].name.split(" ").join("-")})`}
      });
  });

  return topics;
}


function generateOverview(difficulties, topics) {
    /** difficulty */
    const level1 = difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1].num;
    const level2 = difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2].num
    const level3 = difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL3].num
    const easy = difficulties[DIFFICULTY[PLATFORM.LEETCODE].EASY].num;
    const medium = difficulties[DIFFICULTY[PLATFORM.LEETCODE].MEDIUM].num;
    const bronze = difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[5]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[4]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[3]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[2]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[1]].num;
    const silver = difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[5]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[4]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[3]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[2]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[1]].num
    const gold = difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[5]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[4]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[3]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[2]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[1]].num;

    /** platform */
    const programmers = level1 + level2 + level3;
    const leetcode = easy + medium;
    const boj = bronze + silver + gold;

    /** data structure */
    const array = topics[TOPIC.DATA_STRUCTURE.ARRAY].num;
    const linkedList = topics[TOPIC.DATA_STRUCTURE.LINKED_LIST].num;
    const hash = topics[TOPIC.DATA_STRUCTURE.HASH].num;
    const stack = topics[TOPIC.DATA_STRUCTURE.STACK].num;
    const queue = topics[TOPIC.DATA_STRUCTURE.QUEUE].num;

    /** algorithm */
    const sorting = topics[TOPIC.SORTING].num;
    const bruteforce = topics[TOPIC.BRUTEFORCE].num;
    const dfs_bfs = combineNum([...topics[TOPIC.DFS].content, ...topics[TOPIC.BFS].content]);
    const greedy = topics[TOPIC.GREEDY].num;
    const binarySearch = topics[TOPIC.BINARY_SEARCH].num;

    return `# Coding Test Practice (${programmers + leetcode + boj})
 - # Overview
    - [Sort by Coding Test Platform](#sort-by-coding-test-platform)    
      - [Programmers (${programmers})](#programmers-${programmers})
        - [Level3 (${level3})](#level3-${level3})
        - [Level2 (${level2})](#level2-${level2})
        - [Level1 (${level1})](#level1-${level1})
      - [BOJ (${boj})](#boj-${boj})
        - [Gold (${gold})](#gold-${gold})
        - [Silver (${silver})](#silver-${silver})
        - [Bronze (${bronze})](#bronze-${bronze})  
      - [Leetcode (${leetcode})](#leetcode-${leetcode})
        - [Medium (${medium})](#medium-${medium})  
        - [Easy (${easy})](#easy-${easy})
    
    - [Sort by Related Topic](#sort-by-related-topic)
      - [자료구조](#자료구조)
        - [배열 (${array})](#배열-${array})
        - [연결 리스트 (${linkedList})](#연결-리스트-${linkedList})
        - [해시 (${hash})](#해시-${hash})
        - [스택 (${stack})](#스택-${stack})
        - [큐 (${queue})](#큐-${queue})
      - [알고리즘](#알고리즘)
        - [정렬 (${sorting})](#정렬-${sorting})
        - [완전 탐색 (${bruteforce})](#완전-탐색-${bruteforce})
        - [DFS/BFS (${dfs_bfs})](#dfsbfs-${dfs_bfs})
        - [탐욕법 (${greedy})](#탐욕법-${greedy})
        - [이분 탐색 (${binarySearch})](#이분-탐색-${binarySearch})
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

function generatePlatformProblems(difficulties) {
    const bronze = difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[5]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[4]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[3]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[2]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[1]].num;
    const silver = difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[5]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[4]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[3]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[2]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[1]].num;
    const gold = difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[5]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[4]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[3]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[2]].num + difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[1]].num;

    return `- ## Sort by Coding Test Platform

    - ## Programmers (${difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1].num + difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2].num + difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL3].num})
  
      - ### Level3 (${difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL3].num})
        ${difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL3].content}
      - ### Level2 (${difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2].num})
        ${difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL2].content}
      - ### Level1 (${difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1].num})
        ${difficulties[DIFFICULTY[PLATFORM.PROGRAMMERS].LEVEL1].content}

    - ## BOJ (${bronze + silver + gold})

      - ### Gold (${gold})
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[5]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[4]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[3]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[2]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].GOLD[1]].content}
      - ### Silver (${silver})
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[5]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[4]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[3]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[2]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].SILVER[1]].content}
      - ### Bronze (${bronze})
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[5]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[4]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[3]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[2]].content}
        ${difficulties[DIFFICULTY[PLATFORM.BOJ].BRONZE[1]].content}
    
    - ## Leetcode (${difficulties[DIFFICULTY[PLATFORM.LEETCODE].EASY].num + difficulties[DIFFICULTY[PLATFORM.LEETCODE].MEDIUM].num})

      - ### Medium (${difficulties[DIFFICULTY[PLATFORM.LEETCODE].MEDIUM].num})
        ${difficulties[DIFFICULTY[PLATFORM.LEETCODE].MEDIUM].content}
      - ### Easy (${difficulties[DIFFICULTY[PLATFORM.LEETCODE].EASY].num})
        ${difficulties[DIFFICULTY[PLATFORM.LEETCODE].EASY].content}
    `
}

function generatorRelatedToTopicProblems(topics) {
  
    return `
 - ## Sort by Related Topic

 - ## 자료구조
    - ## 배열 (${topics[TOPIC.DATA_STRUCTURE.ARRAY].num})
        ${combineSentence(topics[TOPIC.DATA_STRUCTURE.ARRAY].content)}  
    - ## 연결 리스트 (${topics[TOPIC.DATA_STRUCTURE.LINKED_LIST].num})
        ${combineSentence(topics[TOPIC.DATA_STRUCTURE.LINKED_LIST].content)}
    - ## 해시 (${topics[TOPIC.DATA_STRUCTURE.HASH].num})
        ${combineSentence(topics[TOPIC.DATA_STRUCTURE.HASH].content)}
    - ## 스택 (${topics[TOPIC.DATA_STRUCTURE.STACK].num})
        ${combineSentence(topics[TOPIC.DATA_STRUCTURE.STACK].content)}
    - ## 큐 (${topics[TOPIC.DATA_STRUCTURE.QUEUE].num})
        ${combineSentence(topics[TOPIC.DATA_STRUCTURE.QUEUE].content)}
 - ## 알고리즘
    - ## 정렬 (${topics[TOPIC.SORTING].num})
        ${combineSentence(topics[TOPIC.SORTING].content)}
    - ## 완전 탐색 (${topics[TOPIC.BRUTEFORCE].num})
        ${combineSentence(topics[TOPIC.BRUTEFORCE].content)}
    - ## DFS/BFS (${combineNum([...topics[TOPIC.DFS].content, ...topics[TOPIC.BFS].content])})
        ${combineSentence([...topics[TOPIC.DFS].content, ...topics[TOPIC.BFS].content])}
    - ## 탐욕법 (${topics[TOPIC.GREEDY].num})
        ${combineSentence(topics[TOPIC.GREEDY].content)}
    - ## 이분 탐색 (${topics[TOPIC.BINARY_SEARCH].num})
        ${combineSentence(topics[TOPIC.BINARY_SEARCH].content)}
    `;
}

function combineSentence(content) {
  const keyHash = content.reduce((obj, val) => {
    if (!obj[val.key]) obj[val.key] = val.sentence;
    return obj;
  }, {});

  return Object.keys(keyHash).map((key) => {
    return keyHash[key]
  }).join("\n        ");
}

function combineNum(content) {
  const set = new Set([]);
  content.forEach((val) => {
    if (!set.has(val.key)) set.add(val.key);
  });

  return set.size;
}

function generateREADME() {
    const difficulties = makeDifficulties();
    const topics = makeTopics();
    const README = generateOverview(difficulties, topics) + "\n" + generatePlatformProblems(difficulties) + "\n" + generatorRelatedToTopicProblems(topics);
    fs.writeFileSync('dist/README.md', README);
}
 
module.exports = { generateREADME }