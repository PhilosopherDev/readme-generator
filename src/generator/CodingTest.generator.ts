import * as fs from "fs";
import * as CodingTest from "../model/CodingTest.model";
import * as Common from "../model/Common.model";

function makeDifficulties(codingTestData: Array<CodingTest.CodingTestModel>): CodingTest.ViewModel {
  const difficulties: CodingTest.ViewModel = {} 

  for (const key in CodingTest.ProgrammersLevel) {
    difficulties[(CodingTest.ProgrammersLevel as any)[key]] = { num: 0, content: '' };
  }

  for (const key in CodingTest.LeetcodeLevel) {
    difficulties[(CodingTest.LeetcodeLevel as any)[key]] = { num: 0, content: '' };
  }

  for (const key in CodingTest.BOJLevel) {
    difficulties[(CodingTest.BOJLevel as any)[key]] = { num: 0, content: '' };
  }

  return makeDifficultyContent(codingTestData, difficulties);
}

function makeDifficultyContent(codingTestData: Array<CodingTest.CodingTestModel>, difficulties: CodingTest.ViewModel): CodingTest.ViewModel {
  Object.keys(difficulties).forEach((level) => {
    const filteredModel = codingTestData.filter((data) => data.difficulty === level);
    (difficulties as any)[level].num = filteredModel.length;
    (difficulties as any)[level].content = filteredModel.sort((a, b) => a.name.localeCompare(b.name)).map((item) => {            
      let string = makeTitle(item.name);
      if (item.language.length > 0) string += makeLanguageContent(item.language);
      if (item.company) string += makeCompanyContent(item.company);
      if (item.url && Array.isArray(item.url) && item.url.length > 0) {
          item.url.forEach((u) => string += makrUrlContent(u)); 
      }
      string += makeBackToTop();

      return string;
    }).join("\n        ");
  });

  return difficulties;
}

function makeEducationData(codingTestData: Array<CodingTest.CodingTestModel>): CodingTest.ViewModel {
  const educationData: CodingTest.ViewModel = {} 
  
  for (const key in CodingTest.JSAlgorithmProblemSolvingSection) {
    educationData[(CodingTest.JSAlgorithmProblemSolvingSection as any)[key]] = { num: 0, content: '' };
  }

  return makeEducationContent(codingTestData, educationData);
}

function makeEducationContent(codingTestData: Array<CodingTest.CodingTestModel>, educationData: CodingTest.ViewModel): CodingTest.ViewModel {
  Object.keys(educationData).forEach((section) => {
    const filteredModel = codingTestData.filter((data) => data.section && data.section === section);
    (educationData as any)[section].num = filteredModel.length;
    (educationData as any)[section].content = filteredModel.sort((a, b) => a.name.localeCompare(b.name)).map((item) => {            
        let string = makeTitle(item.name);
        if (item.language.length > 0) string += makeLanguageContent(item.language);
        if (item.url && Array.isArray(item.url) && item.url.length > 0) {
            item.url.forEach((u) => string += makrUrlContent(u)); 
        }
        string += makeBackToTop();
        return string;
    }).join("\n        ");
  });

  return educationData;
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

function makeBackToTop(topic: boolean = false) {
  let space = "             ";
  if (topic) space = "         ";
  return `\n\n\n${space}**[⬆ Back to Top](#overview)**`;
}


function generateOverview(codingTestDataLength: number, difficulties: CodingTest.ViewModel, education: CodingTest.ViewModel, topics: CodingTest.TopicsViewModel) {
    const [programmersTotal, programmersContent] = generateOverviewIndex(difficulties, CodingTest.ProgrammersLevel);
    const [bojTotal, bojContent] = generateOverviewIndex(difficulties, CodingTest.BOJLevel);
    const [leetcodeTotal, leetcodeContent] = generateOverviewIndex(difficulties, CodingTest.LeetcodeLevel);
    const [JSAlgorithmPSTotal, JSAlgorithmPSContent] = generateOverviewIndex(education, CodingTest.JSAlgorithmProblemSolvingSection, true);
    const [dataStructureTotal, dataStructureContent] = generateOverviewIndex(topics, CodingTest.DataStructure, true);
    const [algorithmTotal, algorithmContent] = generateOverviewIndex(topics, CodingTest.Algorithms, true);

    return `# Coding Test Practice (${codingTestDataLength})
 - # Overview
    - [Coding Test Platform (${programmersTotal + leetcodeTotal + bojTotal})](#coding-test-platform-${programmersTotal + leetcodeTotal + bojTotal})    
      - [Programmers (${programmersTotal})](#programmers-${programmersTotal})
        ${programmersContent}
      - [BOJ (${bojTotal})](#boj-${bojTotal})
        ${bojContent}
      - [Leetcode (${leetcodeTotal})](#leetcode-${leetcodeTotal})
        ${leetcodeContent}

    - [Education Platform (${JSAlgorithmPSTotal})](#education-platform-${JSAlgorithmPSTotal})
      - [Javascript algorithm problem solving (${JSAlgorithmPSTotal})](#javascript-algorithm-problem-solving-${JSAlgorithmPSTotal})
        - ${Common.URLIcon.LECTURE} [Lecture](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/dashboard)
        ${JSAlgorithmPSContent}

    - [Related Topic](#related-topic)
      - [Data Structure](#data-structure)
        ${dataStructureContent}
      - [Algorithm](#algorithm)
        ${algorithmContent}
    `
}

function generateCodingTestPlatformProblems(difficulties: CodingTest.ViewModel) {
    const [programmersTotal, programmersContent] = generateModelContent(difficulties, CodingTest.ProgrammersLevel);
    const [bojTotal, bojContent] = generateModelContent(difficulties, CodingTest.BOJLevel);
    const [leetcodeTotal, leetcodeContent] = generateModelContent(difficulties, CodingTest.LeetcodeLevel);

    return `- ## Coding Test Platform (${programmersTotal + bojTotal + leetcodeTotal})

    - ## Programmers (${programmersTotal})
      ${programmersContent}

    - ## BOJ (${bojTotal})
      ${bojContent}
    
    - ## Leetcode (${leetcodeTotal})
      ${leetcodeContent}
    `
}

function generateEducationPlatformProblems(education: CodingTest.ViewModel) {
    const [JSAlgorithmPSTotal, JSAlgorithmPSContent] = generateModelContent(education, CodingTest.JSAlgorithmProblemSolvingSection);
  
    return `- ## Education Platform (${JSAlgorithmPSTotal})

    - ## Javascript algorithm problem solving (${JSAlgorithmPSTotal})
      ${JSAlgorithmPSContent}
    `
}

function generatorRelatedToTopicProblems(topics: CodingTest.TopicsViewModel) {
  const dataStructureContent = generateTopicContent(topics, CodingTest.DataStructure);
  const algorithmContent = generateTopicContent(topics, CodingTest.Algorithms);
  
    return `
 - ## Related Topic

    - ## Data Structure
      ${dataStructureContent}
        
    - ## Algorithm
      ${algorithmContent}
    `;
}

function makeTitle(title: string): string {
  return "- #### " + title;
}

function makeLanguageContent(language: Array<string>): string {
  return `\n             - :gem: ${language.sort().map(capitalizeFirstLetter).join(", ")}`;
}

function makeCompanyContent(company: string): string {
  return `\n             - :bulb: ${capitalizeFirstLetter(company)} 기출`;
}

function makrUrlContent(urlData: any): string {
  return ("\n" + "             - " + urlData.icon + " [" + urlData.name + "]" + "(" + urlData.link + ")");
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateOverviewIndex(model: CodingTest.ViewModel | CodingTest.TopicsViewModel, type: any, sortByNum: boolean = false): [total: number, content: string] {
  const stringArr = [];
  let total = 0;

  for (const key in type as any) {
    const num = model[(type as any)[key]].num;
    const title: string = type[key];
    const name = capitalizeFirstLetter(title).replace(/_/g, " ");
    const refName = title.toLowerCase().split("_").join("-");
    
    total += num;
    const str = `- [${name} (${num})](#${refName}-${num})`;
    if (num > 0) stringArr.push({ num, str });
  }

  if (sortByNum) stringArr.sort((a, b) => b.num - a.num);
  return [total, stringArr.map(item => item.str).join("\n        ")];
}

function generateModelContent(model: CodingTest.ViewModel, type: any, sortByNum: boolean = false): [total: number, content: string] {
  const stringArr = [];
  let total = 0;

  for (const key in type as any) {
    const num = model[(type as any)[key]].num;
    const content  = model[(type as any)[key]].content;
    const title = type[key];
    const name = capitalizeFirstLetter(title).replace(/_/g, " ");
    
    total += num;
    const str = `- ## ${name} (${num})\n        ${content}`;
    
    if (num > 0) stringArr.push({ num, str });
  }

  if (sortByNum) stringArr.sort((a, b) => b.num - a.num);
  return [total, stringArr.map(item => item.str).join("\n\n      ")];
}

function generateTopicContent(topic: CodingTest.TopicsViewModel, type: any): string {
  const stringArr = [];

  for (const key in type as any) {
    const num = topic[(type as any)[key]].num;
    const content  = topic[(type as any)[key]].content;
    const title = type[key];
    const name = capitalizeFirstLetter(title).replace(/_/g, " ");
    
    let str = `- ## ${name} (${num})\n        ${combineSentence(content)}`;
    str += makeBackToTop(true);
    
    if (num > 0) stringArr.push({ num, str });
  }

  return stringArr.sort((a, b) => b.num - a.num).map(item => item.str).join("\n\n      ");
}

function combineSentence(content: Array<any>) {
  const keyHash = content.reduce((obj, val) => {
    if (!obj[val.key]) obj[val.key] = val.sentence;
    return obj;
  }, {});

  return Object.keys(keyHash).sort((a, b) => keyHash[a].localeCompare(keyHash[b])).map((key) => {
    return keyHash[key]
  }).join("\n        ");
}

export function generateCodingTestReadme(codingTestData: Array<CodingTest.CodingTestModel>) {
    const edu = makeEducationData(codingTestData);  
    const difficulties = makeDifficulties(codingTestData);
    const topics = makeTopics(codingTestData);
    const README = generateOverview(codingTestData.length, difficulties, edu, topics) + "\n" + generateCodingTestPlatformProblems(difficulties) + "\n" + generateEducationPlatformProblems(edu) + "\n" + generatorRelatedToTopicProblems(topics);
    fs.writeFileSync('./README.md', README);
}