export interface CodingTestModel {
    cote_id: string;
    name: string;
    number?: number;
    platform: Platform;
    difficulty: DifficultyType;
    language: Array<Language>;
    topic: Array<Topic>;
    url: Array<URLType>
}

export type URLType = {
    name: string;
    icon: Icon;
    link: string;
}

export type Topic = DataStructure | Algorithms;

export type DifficultyType = ProgrammersLevel | LeetcodeLevel | BOJLevel;

export type DifficultiesViewModel = { [key: string]: { num: number, content: string } }

export type TopicsViewModel = { [key: string]: { num: number, content: Array<TopicsViewModelContent> } }

export type TopicsViewModelContent = { key: string, sentence: string };

export enum Platform {
    PROGRAMMERS = "programmers",
    LEETCODE = "leetcode",
    BOJ = "boj"
}

export enum Language {
    JAVASCRIPT = "javascript",
    PYTHON = "python"
}

export enum ProgrammersLevel {
    LEVEL1 = "level1",
    LEVEL2 = "level2",
    LEVEL3 = "level3"
}

export enum LeetcodeLevel {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export enum BOJLevel {
    BRONZE1 = "bronze1",
    BRONZE2 = "bronze2",
    BRONZE3 = "bronze3",
    BRONZE4 = "bronze4",
    BRONZE5 = "bronze5",
    SILVER1 = "silver1",
    SILVER2 = "silver2",
    SILVER3 = "silver3",
    SILVER4 = "silver4",
    SILVER5 = "silver5",
    GOLD1 = "gold1",
    GOLD2 = "gold2",
    GOLD3 = "gold3",
    GOLD4 = "gold4",
    GOLD5 = "gold5"
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
    GRAPH = "graph"
}

export enum Algorithms {
    SORTING = "sorting",
    BRUTEFORCE = "bruteforce",
    DFS = "dfs",
    BFS = "bfs",
    GREEDY = "greedy",
    BINARY_SEARCH = "binary_search",
    IMPLEMENT = "implement",
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

export enum Icon {
    GITHUB = ":file_cabinet:",
    CODE = ":computer:",
    SOLUTION = ":crystal_ball:",
    LIVE_SITE = ":globe_with_meridians:",
    COMMIT = ":dart:",
    BLOG = ":pencil2:"
}