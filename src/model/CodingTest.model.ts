import { URLType } from "./Common.model";

export interface CodingTestModel {
    cote_id: string;
    name: string;
    number?: number;
    company?: Company;
    platform: Platform;
    difficulty?: DifficultyType;
    lecture?: Lecture;
    language: Array<Language>;
    topic: Array<Topic>;
    url: Array<URLType>;
}

export type Platform = CodingTestPlatform | EducationPlatform;

export type Topic = DataStructure | Algorithms;

export type DifficultyType = ProgrammersLevel | LeetcodeLevel | BOJLevel;

export type Lecture = InflearnLecture | UdemyLecture;

export type ViewModel = { [key: string]: { num: number, content: string } }

export type TopicsViewModel = { [key: string]: { num: number, content: Array<TopicsViewModelContent> } }

export type TopicsViewModelContent = { key: string, sentence: string };

export enum Company {
    KAKAO = "kakao"
}

export enum CodingTestPlatform {
    PROGRAMMERS = "programmers",
    LEETCODE = "leetcode",
    BOJ = "boj"
}

export enum EducationPlatform {
    INFLEARN = "inflearn",
    UDEMY = "udemy"
}

export enum InflearnLecture {
    JAVASCRIPT_ALGORITHM_PROBLEM_SOLVING = "javascript_algorithm_problem_solving",
}

export enum UdemyLecture {

}

export enum Language {
    JAVASCRIPT = "javascript",
    PYTHON = "python"
}

export enum ProgrammersLevel {
    LEVEL5 = "level5",
    LEVEL4 = "level4",
    LEVEL3 = "level3",
    LEVEL2 = "level2",
    LEVEL1 = "level1",
}

export enum LeetcodeLevel {
    HARD = "hard",
    MEDIUM = "medium",
    EASY = "easy",
}

export enum BOJLevel {
    RUBY1 = "ruby1",
    RUBY2 = "ruby2",
    RUBY3 = "ruby3",
    RUBY4 = "ruby4",
    RUBY5 = "ruby5",
    DIAMOND1 = "diamond1",
    DIAMOND2 = "diamond2",
    DIAMOND3 = "diamond3",
    DIAMOND4 = "diamond4",
    DIAMOND5 = "diamond5",
    PLATINUM1 = "platinum1",
    PLATINUM2 = "platinum2",
    PLATINUM3 = "platinum3",
    PLATINUM4 = "platinum4",
    PLATINUM5 = "platinum5",
    GOLD1 = "gold1",
    GOLD2 = "gold2",
    GOLD3 = "gold3",
    GOLD4 = "gold4",
    GOLD5 = "gold5",
    SILVER1 = "silver1",
    SILVER2 = "silver2",
    SILVER3 = "silver3",
    SILVER4 = "silver4",
    SILVER5 = "silver5",
    BRONZE1 = "bronze1",
    BRONZE2 = "bronze2",
    BRONZE3 = "bronze3",
    BRONZE4 = "bronze4",
    BRONZE5 = "bronze5",
}

export enum DataStructure {
    ARRAY = "array",
    LINKED_LIST = "linked_list",
    STACK = "stack",
    QUEUE = "queue",
    HASH = "hash",
    STRING = "string",
    TREE = "tree",
    BINARY_TREE = "binary_tree",
    DEQUE = "deque",
    PRIORITY_QUEUE = "priority_queue",
    GRAPH = "graph",
    HEAP = "heap"
}

export enum Algorithms {
    SORTING = "sorting",
    BRUTEFORCE = "bruteforce",
    DFS = "DFS",
    BFS = "BFS",
    GREEDY = "greedy",
    BINARY_SEARCH = "binary_search",
    IMPLEMENTATION = "implementation",
    MATH = "math",
    RECURSION = "recursion",
    DYNAMIC_PROGRAMMING = "dynamic_programming",
    MEMOIZATION = "memoization",
    TWO_POINTERS = "two_pointers",
    BIT_MANIPULATION = "bit_manipulation",
    DESIGN = "design",
    DVIDE_AND_CONQUER = "divide_and_conquer",
    COUNTING = "counting",
    MATRIX = "matrix",
    SIMULATION = "simulation",
    CUMULATIVE_SUM = "cumulative_sum"
}

