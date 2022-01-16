interface SolvedProblemSchema {
    [key: string]: {
        name: string;
        platform: PlatformType;
        difficulty: DIFFICULTY[PlatformType.PROGRAMMERS] | DIFFICULTY[PlatformType.LEETCODE] | DIFFICULTY[PlatformType.BOJ];
        language: LANGUAGE
        // topic: 
        // verified?:
        // grit?:
        url?: Array<{name: string, icon: string, link: string}>;
    }
}

type PLATFORM = PlatformType.PROGRAMMERS | PlatformType.LEETCODE | PlatformType.BOJ;


type DIFFICULTY = {
    [PlatformType.PROGRAMMERS]: ProgrammersDifficulty;
    [PlatformType.LEETCODE]: LeetcodeDifficulty;
    [PlatformType.BOJ]: {
        BRONZE: BOJDifficultyType.BRONZE1 | BOJDifficultyType.BRONZE2 | BOJDifficultyType.BRONZE3 | BOJDifficultyType.BRONZE4 | BOJDifficultyType.BRONZE5;
        SILVER: BOJDifficultyType.SILVER1 | BOJDifficultyType.SILVER2 | BOJDifficultyType.SILVER3 | BOJDifficultyType.SILVER4 | BOJDifficultyType.SILVER5;
        GOLD: BOJDifficultyType.GOLD1 | BOJDifficultyType.GOLD2 | BOJDifficultyType.GOLD3 | BOJDifficultyType.GOLD4 | BOJDifficultyType.GOLD5;
    }
}

type ProgrammersDifficulty = ProgrammersDifficultyType.LEVEL1 | ProgrammersDifficultyType.LEVEL2 | ProgrammersDifficultyType.LEVEL3;

enum ProgrammersDifficultyType {
    LEVEL1 = "level1",
    LEVEL2 = "level2",
    LEVEL3 = "level3"
}

type LeetcodeDifficulty = LeetcodeDifficultyType.EASY | LeetcodeDifficultyType.MEDIUM | LeetcodeDifficultyType.HARD;

enum LeetcodeDifficultyType {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

enum BOJDifficultyType {
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
    GOLD5 = "gold5",
}


const TOPIC = {
    DATA_STRUCTURE: {
        ARRAY: "array",
        LINKED_LIST: "linked_list",
        STACK: "stack",
        QUEUE: "queue",
        HASH: "hash",
        STRING: "string",
        TREE: "tree",
        BINARY_TREE: "binary_tree",
        DEQUE: "deque",
        PRIORITY_QUEUE: "priority_queue",
        GRAPH: "graph"
    },
    SORTING: "sorting",
    BRUTEFORCE: "bruteforce",
    DFS: "dfs",
    BFS: "bfs",
    GREEDY: "greedy",
    BINARY_SEARCH: "binary_search",

    IMPLEMENT: "implement",
    MATH: "math",
    RECURSION: "recursion",
    DYNAMIC_PROGRAMMING: "dynamic_programming",
    MEMOIZATION: "memoization",
    TWO_POINTERS: "two_pointers",
    BIT_MANIPULATION: "bit_manipulation",
    DESIGN: "design",
    DVIDE_AND_CONQUER: "divide_and_conquer",
    COUNTING: "counting",
    MATRIX: "matrix",
    SIMULATION: "simulation",
    CUMULATIVE_SUM: "cumulative_sum"
}

type LANGUAGE = LanguageType.JAVASCRIPT | LanguageType.PYTHON;

enum LanguageType {
    JAVASCRIPT = "javascript",
    PYTHON = "python"
}

type GRIT = GritType.OPTIMIZATION | GritType.EDGE_CASE_TEST | GritType.VISUALIZATION | GritType.BEST_PRACTICE | GritType.MOCK_EXAM;

enum GritType {
    OPTIMIZATION = "optimization",
    EDGE_CASE_TEST = "edge_case_test",
    VISUALIZATION = "visualization",
    BEST_PRACTICE = "best_practice",
    MOCK_EXAM = "mock_exam"
}


const ENLIGHTENMENT = {}

enum PlatformType {
    PROGRAMMERS = "programmers",
    LEETCODE = "leetcode",
    BOJ = "boj"
}

const Difficulty = {
    [PlatformType.PROGRAMMERS]: {
        LEVEL1: "level1",
        LEVEL2: "level2",
        LEVEL3: "level3"
    },
    [PlatformType.LEETCODE]: {
        EASY: "easy",
        MEDIUM: "medium",
        HARD: "hard"
    },
    [PlatformType.BOJ]: {
        BRONZE: {
            "1": "bronze_1",
            "2": "bronze_2",
            "3": "bronze_3",
            "4": "bronze_4",
            "5": "bronze_5"
        }, 
        SILVER: {
            "1": "silver_1",
            "2": "silver_2",
            "3": "silver_3",
            "4": "silver_4",
            "5": "silver_5"
        },
        GOLD: {
            "1": "gold_1",
            "2": "gold_2",
            "3": "gold_3",
            "4": "gold_4",
            "5": "gold_5"
        }
    }
}

