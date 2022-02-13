import * as fs from "fs";
import * as CodingTest from "../model/CodingTest.model";

function makeDifficulties(codingTestData: Array<CodingTest.CodingTestModel>): CodingTest.DifficultiesViewModel {
  const difficulties: CodingTest.DifficultiesViewModel = {
    [CodingTest.ProgrammersLevel.LEVEL1]: {num: 0, content: ''},
    [CodingTest.ProgrammersLevel.LEVEL2]: {num: 0, content: ''},
    [CodingTest.ProgrammersLevel.LEVEL3]: {num: 0, content: ''},
    [CodingTest.LeetcodeLevel.EASY]: {num: 0, content: ''},
    [CodingTest.LeetcodeLevel.MEDIUM]: {num: 0, content: ''},
    // [CodingTest.LeetcodeLevel.HARD]: {num: 0, content: ''},
    [CodingTest.BOJLevel.BRONZE5]: {num: 0, content: ''},
    [CodingTest.BOJLevel.BRONZE4]: {num: 0, content: ''},
    [CodingTest.BOJLevel.BRONZE3]: {num: 0, content: ''},
    [CodingTest.BOJLevel.BRONZE2]: {num: 0, content: ''},
    [CodingTest.BOJLevel.BRONZE1]: {num: 0, content: ''},
    [CodingTest.BOJLevel.SILVER5]: {num: 0, content: ''},
    [CodingTest.BOJLevel.SILVER4]: {num: 0, content: ''},
    [CodingTest.BOJLevel.SILVER3]: {num: 0, content: ''},
    [CodingTest.BOJLevel.SILVER2]: {num: 0, content: ''},
    [CodingTest.BOJLevel.SILVER1]: {num: 0, content: ''},
    [CodingTest.BOJLevel.GOLD5]: {num: 0, content: ''},
    [CodingTest.BOJLevel.GOLD4]: {num: 0, content: ''},
    [CodingTest.BOJLevel.GOLD3]: {num: 0, content: ''},
    [CodingTest.BOJLevel.GOLD2]: {num: 0, content: ''},
    [CodingTest.BOJLevel.GOLD1]: {num: 0, content: ''}
  } 

  Object.keys(difficulties).forEach((level) => {
    const filteredModel = codingTestData.filter((data) => data.difficulty === level);
    (difficulties as any)[level].num = filteredModel.length;
    (difficulties as any)[level].content = filteredModel.sort((a, b) => a.name.localeCompare(b.name)).map((item) => {            
        let string = "- #### " + item.name;
        if (item.company) string += `\n             - :bulb: ${item.company} 기출`;
        if (item.url && Array.isArray(item.url) && item.url.length > 0) {
            item.url.forEach((u) => string += ("\n" + "             - " + u.icon + " [" + u.name + "]" + "(" + u.link  + ")")); 
        }

        return string;
    }).join("\n        ");
  });

  return difficulties;
}

function makeTopics(codingTestData: Array<CodingTest.CodingTestModel>): CodingTest.TopicsViewModel {
  const topics: CodingTest.TopicsViewModel = {};

  for (const key in CodingTest.DataStructure) {
    topics[(CodingTest.DataStructure as any)[key]] = { num: 0, content: [] };
  }

  for (const key in CodingTest.Algorithms) {
    topics[(CodingTest.Algorithms as any)[key]] = { num: 0, content: [] };
  }

  Object.keys(topics).forEach((topic) => {
      const filteredModel = codingTestData.filter((item) => (item.topic as any).indexOf(topic) > -1);
      (topics as any)[topic].num = filteredModel.length;
      (topics as any)[topic].content = filteredModel.map((item) => {
            return { key: item.cote_id, sentence: `- [${item.name}](#${item.name.split(" ").join("-")})`}
      });
  });

  return topics;
}


function generateOverview(difficulties: CodingTest.DifficultiesViewModel, topics: CodingTest.TopicsViewModel) {
    /** difficulty */
    const level1 = difficulties[CodingTest.ProgrammersLevel.LEVEL1].num;
    const level2 = difficulties[CodingTest.ProgrammersLevel.LEVEL2].num
    const level3 = difficulties[CodingTest.ProgrammersLevel.LEVEL3].num
    const easy = difficulties[CodingTest.LeetcodeLevel.EASY].num;
    const medium = difficulties[CodingTest.LeetcodeLevel.MEDIUM].num;
    const bronze = difficulties[CodingTest.BOJLevel.BRONZE5].num + difficulties[CodingTest.BOJLevel.BRONZE4].num + difficulties[CodingTest.BOJLevel.BRONZE3].num + difficulties[CodingTest.BOJLevel.BRONZE2].num + difficulties[CodingTest.BOJLevel.BRONZE1].num;
    const silver = difficulties[CodingTest.BOJLevel.SILVER5].num + difficulties[CodingTest.BOJLevel.SILVER4].num + difficulties[CodingTest.BOJLevel.SILVER3].num + difficulties[CodingTest.BOJLevel.SILVER2].num + difficulties[CodingTest.BOJLevel.SILVER1].num
    const gold = difficulties[CodingTest.BOJLevel.GOLD5].num + difficulties[CodingTest.BOJLevel.GOLD4].num + difficulties[CodingTest.BOJLevel.GOLD3].num + difficulties[CodingTest.BOJLevel.GOLD2].num + difficulties[CodingTest.BOJLevel.GOLD1].num;

    /** platform */
    const programmers = level1 + level2 + level3;
    const leetcode = easy + medium;
    const boj = bronze + silver + gold;

    /** data structure */
    const array = topics[CodingTest.DataStructure.ARRAY].num;
    const linkedList = topics[CodingTest.DataStructure.LINKED_LIST].num;
    const hash = topics[CodingTest.DataStructure.HASH].num;
    const stack = topics[CodingTest.DataStructure.STACK].num;
    const queue = topics[CodingTest.DataStructure.QUEUE].num;

    const string = topics[CodingTest.DataStructure.STRING].num;
    const tree = topics[CodingTest.DataStructure.TREE].num;
    const binary_tree = topics[CodingTest.DataStructure.BINARY_TREE].num;
    const deque = topics[CodingTest.DataStructure.DEQUE].num;
    const priority_queue = topics[CodingTest.DataStructure.PRIORITY_QUEUE].num;
    const graph = topics[CodingTest.DataStructure.GRAPH].num;
  

    /** algorithm */
    const sorting = topics[CodingTest.Algorithms.SORTING].num;
    const bruteforce = topics[CodingTest.Algorithms.BRUTEFORCE].num;
    const dfs_bfs = combineNum([...topics[CodingTest.Algorithms.DFS].content, ...topics[CodingTest.Algorithms.BFS].content]);
    const greedy = topics[CodingTest.Algorithms.GREEDY].num;
    const binarySearch = topics[CodingTest.Algorithms.BINARY_SEARCH].num;
    
    const implement = topics[CodingTest.Algorithms.IMPLEMENT].num;
    const math = topics[CodingTest.Algorithms.MATH].num;
    const recursion = topics[CodingTest.Algorithms.RECURSION].num;
    const dynamic_programming = topics[CodingTest.Algorithms.DYNAMIC_PROGRAMMING].num;
    const memoization = topics[CodingTest.Algorithms.MEMOIZATION].num;
    const two_pointers = topics[CodingTest.Algorithms.TWO_POINTERS].num;
    const bit_manipulation = topics[CodingTest.Algorithms.BIT_MANIPULATION].num;
    const design = topics[CodingTest.Algorithms.DESIGN].num;
    const divide_and_conquer = topics[CodingTest.Algorithms.DVIDE_AND_CONQUER].num;
    const counting = topics[CodingTest.Algorithms.COUNTING].num;
    const matrix = topics[CodingTest.Algorithms.MATRIX].num;
    const simulation = topics[CodingTest.Algorithms.SIMULATION].num;
    const cumulative_sum = topics[CodingTest.Algorithms.CUMULATIVE_SUM].num;

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
        - [문자열 (${string})](#문자열-${string})
        - [트리 (${tree})](#트리-${tree})
        - [이진 트리 (${binary_tree})](#이진-트리-${binary_tree})
        - [덱 (${deque})](#덱-${deque})
        - [우선순위 큐 (${priority_queue})](#우선순위-큐-${priority_queue})
        - [그래프 (${graph})](#그래프-${graph})
      - [알고리즘](#알고리즘)
        - [정렬 (${sorting})](#정렬-${sorting})
        - [완전 탐색 (${bruteforce})](#완전-탐색-${bruteforce})
        - [DFS/BFS (${dfs_bfs})](#dfsbfs-${dfs_bfs})
        - [탐욕법 (${greedy})](#탐욕법-${greedy})
        - [이분 탐색 (${binarySearch})](#이분-탐색-${binarySearch})
        - [구현 (${implement})](#구현-${implement})        
        - [수학 (${math})](#수학-${math})        
        - [재귀 (${recursion})](#재귀-${recursion})        
        - [동적계획법 (${dynamic_programming})](#동적계획법-${dynamic_programming})        
        - [메모이제이션 (${memoization})](#메모이제이션-${memoization})        
        - [Two Pointers (${two_pointers})](#two-pointers-${two_pointers})        
        - [비트 연산 (${bit_manipulation})](#비트-연산-${bit_manipulation})        
        - [디자인 (${design})](#디자인-${design})        
        - [분할 정복 (${divide_and_conquer})](#분할-정복-${divide_and_conquer})        
        - [카운팅 (${counting})](#카운팅-${counting})        
        - [Matrix (${matrix})](#matrix-${matrix})        
        - [시뮬레이션 (${simulation})](#시뮬레이션-${simulation})        
        - [누적 합 (${cumulative_sum})](#누적-합-${cumulative_sum})        
    `
}

function generatePlatformProblems(difficulties: CodingTest.DifficultiesViewModel) {
    const bronze = difficulties[CodingTest.BOJLevel.BRONZE5].num + difficulties[CodingTest.BOJLevel.BRONZE4].num + difficulties[CodingTest.BOJLevel.BRONZE3].num + difficulties[CodingTest.BOJLevel.BRONZE2].num + difficulties[CodingTest.BOJLevel.BRONZE1].num;
    const silver = difficulties[CodingTest.BOJLevel.SILVER5].num + difficulties[CodingTest.BOJLevel.SILVER4].num + difficulties[CodingTest.BOJLevel.SILVER3].num + difficulties[CodingTest.BOJLevel.SILVER2].num + difficulties[CodingTest.BOJLevel.SILVER1].num;
    const gold = difficulties[CodingTest.BOJLevel.GOLD5].num + difficulties[CodingTest.BOJLevel.GOLD4].num + difficulties[CodingTest.BOJLevel.GOLD3].num + difficulties[CodingTest.BOJLevel.GOLD2].num + difficulties[CodingTest.BOJLevel.GOLD1].num;

    return `- ## Sort by Coding Test Platform

    - ## Programmers (${difficulties[CodingTest.ProgrammersLevel.LEVEL1].num + difficulties[CodingTest.ProgrammersLevel.LEVEL2].num + difficulties[CodingTest.ProgrammersLevel.LEVEL3].num})
  
      - ### Level3 (${difficulties[CodingTest.ProgrammersLevel.LEVEL3].num})
        ${difficulties[CodingTest.ProgrammersLevel.LEVEL3].content}
      - ### Level2 (${difficulties[CodingTest.ProgrammersLevel.LEVEL2].num})
        ${difficulties[CodingTest.ProgrammersLevel.LEVEL2].content}
      - ### Level1 (${difficulties[CodingTest.ProgrammersLevel.LEVEL1].num})
        ${difficulties[CodingTest.ProgrammersLevel.LEVEL1].content}

    - ## BOJ (${bronze + silver + gold})

      - ### Gold (${gold})
        ${difficulties[CodingTest.BOJLevel.GOLD5].content}
        ${difficulties[CodingTest.BOJLevel.GOLD4].content}
        ${difficulties[CodingTest.BOJLevel.GOLD3].content}
        ${difficulties[CodingTest.BOJLevel.GOLD2].content}
        ${difficulties[CodingTest.BOJLevel.GOLD1].content}
      - ### Silver (${silver})
        ${difficulties[CodingTest.BOJLevel.SILVER5].content}
        ${difficulties[CodingTest.BOJLevel.SILVER4].content}
        ${difficulties[CodingTest.BOJLevel.SILVER3].content}
        ${difficulties[CodingTest.BOJLevel.SILVER2].content}
        ${difficulties[CodingTest.BOJLevel.SILVER1].content}
      - ### Bronze (${bronze})
        ${difficulties[CodingTest.BOJLevel.BRONZE5].content}
        ${difficulties[CodingTest.BOJLevel.BRONZE4].content}
        ${difficulties[CodingTest.BOJLevel.BRONZE3].content}
        ${difficulties[CodingTest.BOJLevel.BRONZE2].content}
        ${difficulties[CodingTest.BOJLevel.BRONZE1].content}
    
    - ## Leetcode (${difficulties[CodingTest.LeetcodeLevel.EASY].num + difficulties[CodingTest.LeetcodeLevel.MEDIUM].num})

      - ### Medium (${difficulties[CodingTest.LeetcodeLevel.MEDIUM].num})
        ${difficulties[CodingTest.LeetcodeLevel.MEDIUM].content}
      - ### Easy (${difficulties[CodingTest.LeetcodeLevel.EASY].num})
        ${difficulties[CodingTest.LeetcodeLevel.EASY].content}
    `
}

function generatorRelatedToTopicProblems(topics: CodingTest.TopicsViewModel) {
  
    return `
 - ## Sort by Related Topic

 - ## 자료구조
    - ## 배열 (${topics[CodingTest.DataStructure.ARRAY].num})
        ${combineSentence(topics[CodingTest.DataStructure.ARRAY].content)}  
    - ## 연결 리스트 (${topics[CodingTest.DataStructure.LINKED_LIST].num})
        ${combineSentence(topics[CodingTest.DataStructure.LINKED_LIST].content)}
    - ## 해시 (${topics[CodingTest.DataStructure.HASH].num})
        ${combineSentence(topics[CodingTest.DataStructure.HASH].content)}
    - ## 스택 (${topics[CodingTest.DataStructure.STACK].num})
        ${combineSentence(topics[CodingTest.DataStructure.STACK].content)}
    - ## 큐 (${topics[CodingTest.DataStructure.QUEUE].num})
        ${combineSentence(topics[CodingTest.DataStructure.QUEUE].content)}
    - ## 문자열 (${topics[CodingTest.DataStructure.STRING].num})
        ${combineSentence(topics[CodingTest.DataStructure.STRING].content)}
    - ## 트리 (${topics[CodingTest.DataStructure.TREE].num})
        ${combineSentence(topics[CodingTest.DataStructure.TREE].content)}
    - ## 이진 트리 (${topics[CodingTest.DataStructure.BINARY_TREE].num})
        ${combineSentence(topics[CodingTest.DataStructure.BINARY_TREE].content)}
    - ## 덱 (${topics[CodingTest.DataStructure.DEQUE].num})
        ${combineSentence(topics[CodingTest.DataStructure.DEQUE].content)}
    - ## 우선순위 큐 (${topics[CodingTest.DataStructure.PRIORITY_QUEUE].num})
        ${combineSentence(topics[CodingTest.DataStructure.PRIORITY_QUEUE].content)}
    - ## 그래프 (${topics[CodingTest.DataStructure.GRAPH].num})
        ${combineSentence(topics[CodingTest.DataStructure.GRAPH].content)}
 - ## 알고리즘
    - ## 정렬 (${topics[CodingTest.Algorithms.SORTING].num})
        ${combineSentence(topics[CodingTest.Algorithms.SORTING].content)}
    - ## 완전 탐색 (${topics[CodingTest.Algorithms.BRUTEFORCE].num})
        ${combineSentence(topics[CodingTest.Algorithms.BRUTEFORCE].content)}
    - ## DFS/BFS (${combineNum([...topics[CodingTest.Algorithms.DFS].content, ...topics[CodingTest.Algorithms.BFS].content])})
        ${combineSentence([...topics[CodingTest.Algorithms.DFS].content, ...topics[CodingTest.Algorithms.BFS].content])}
    - ## 탐욕법 (${topics[CodingTest.Algorithms.GREEDY].num})
        ${combineSentence(topics[CodingTest.Algorithms.GREEDY].content)}
    - ## 이분 탐색 (${topics[CodingTest.Algorithms.BINARY_SEARCH].num})
        ${combineSentence(topics[CodingTest.Algorithms.BINARY_SEARCH].content)}
    - ## 구현 (${topics[CodingTest.Algorithms.IMPLEMENT].num})
        ${combineSentence(topics[CodingTest.Algorithms.IMPLEMENT].content)}
    - ## 수학 (${topics[CodingTest.Algorithms.MATH].num})
        ${combineSentence(topics[CodingTest.Algorithms.MATH].content)}
    - ## 재귀 (${topics[CodingTest.Algorithms.RECURSION].num})
        ${combineSentence(topics[CodingTest.Algorithms.RECURSION].content)}
    - ## 동적계획법 (${topics[CodingTest.Algorithms.DYNAMIC_PROGRAMMING].num})
        ${combineSentence(topics[CodingTest.Algorithms.DYNAMIC_PROGRAMMING].content)}
    - ## 메모이제이션 (${topics[CodingTest.Algorithms.MEMOIZATION].num})
        ${combineSentence(topics[CodingTest.Algorithms.MEMOIZATION].content)}
    - ## Two Pointers (${topics[CodingTest.Algorithms.TWO_POINTERS].num})
        ${combineSentence(topics[CodingTest.Algorithms.TWO_POINTERS].content)}
    - ## 비트 연산 (${topics[CodingTest.Algorithms.BIT_MANIPULATION].num})
        ${combineSentence(topics[CodingTest.Algorithms.BIT_MANIPULATION].content)}
    - ## 디자인 (${topics[CodingTest.Algorithms.DESIGN].num})
        ${combineSentence(topics[CodingTest.Algorithms.DESIGN].content)}
    - ## 분할 정복 (${topics[CodingTest.Algorithms.DVIDE_AND_CONQUER].num})
        ${combineSentence(topics[CodingTest.Algorithms.DVIDE_AND_CONQUER].content)}
    - ## 카운팅 (${topics[CodingTest.Algorithms.COUNTING].num})
        ${combineSentence(topics[CodingTest.Algorithms.COUNTING].content)}
    - ## Matrix (${topics[CodingTest.Algorithms.MATRIX].num})
        ${combineSentence(topics[CodingTest.Algorithms.MATRIX].content)}
    - ## 시뮬레이션 (${topics[CodingTest.Algorithms.SIMULATION].num})
        ${combineSentence(topics[CodingTest.Algorithms.SIMULATION].content)}
    - ## 누적 합 (${topics[CodingTest.Algorithms.CUMULATIVE_SUM].num})
        ${combineSentence(topics[CodingTest.Algorithms.CUMULATIVE_SUM].content)}
    `;
}

function combineSentence(content: Array<any>) {
  const keyHash = content.reduce((obj, val) => {
    if (!obj[val.key]) obj[val.key] = val.sentence;
    return obj;
  }, {});

  return Object.keys(keyHash).map((key) => {
    return keyHash[key]
  }).join("\n        ");
}

function combineNum(content: Array<CodingTest.TopicsViewModelContent>) {
  const set = new Set([]);
  content.forEach((val) => {
    if (!set.has(val.key as never)) set.add(val.key as never);
  });

  return set.size;
}

export function generateCodingTestReadme(codingTestData: Array<CodingTest.CodingTestModel>) {
    const difficulties = makeDifficulties(codingTestData);
    const topics = makeTopics(codingTestData);
    const README = generateOverview(difficulties, topics) + "\n" + generatePlatformProblems(difficulties) + "\n" + generatorRelatedToTopicProblems(topics);
    fs.writeFileSync('./README.md', README);
}