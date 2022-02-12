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
  const topics: CodingTest.TopicsViewModel = {
    [CodingTest.DataStructure.ARRAY]: {num: 0, content: []},
    [CodingTest.DataStructure.LINKED_LIST]: {num: 0, content: []},
    [CodingTest.DataStructure.HASH]: {num: 0, content: []},
    [CodingTest.DataStructure.STACK]: {num: 0, content: []},
    [CodingTest.DataStructure.QUEUE]: {num: 0, content: []},
    [CodingTest.Algorithms.SORTING]: {num: 0, content: []},
    [CodingTest.Algorithms.BRUTEFORCE]: {num: 0, content: []},
    [CodingTest.Algorithms.BFS]: {num: 0, content: []},
    [CodingTest.Algorithms.DFS]: {num: 0, content: []},
    [CodingTest.Algorithms.GREEDY]: {num: 0, content: []},
    [CodingTest.Algorithms.BINARY_SEARCH]: {num: 0, content: []},
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

    /** algorithm */
    const sorting = topics[CodingTest.Algorithms.SORTING].num;
    const bruteforce = topics[CodingTest.Algorithms.BRUTEFORCE].num;
    const dfs_bfs = combineNum([...topics[CodingTest.Algorithms.DFS].content, ...topics[CodingTest.Algorithms.BFS].content]);
    const greedy = topics[CodingTest.Algorithms.GREEDY].num;
    const binarySearch = topics[CodingTest.Algorithms.BINARY_SEARCH].num;

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