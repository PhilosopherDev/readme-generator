import { TILModel, Category } from '../model/TIL.model';
import { URLIcon, URLName } from '../model/Common.model';
import { SideProjectId, SideProjectName } from '../model/SideProject.model';
import { CloneCodingId, CloneCodingName } from '../model/CloneCoding.model';
import { ChallengeId, ChallengeName } from '../model/Challenge.model';

export const codingTestData: Array<TILModel> = [
    {
        til_id: "_qd98i3i",
        name: "Lexical scope 예제",
        description: "정적 스코프 = 함수 선언할 때 스코프 생성",
        date: "2021-12-17",
        category: Category.FOUNDATIONAL_KNOWLEDGE,
        url: [{
            name: URLName.CODE,
            icon: URLIcon.CODE,
            link: "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/Playground/JS/LexicalScope.js"
        }]
    },
    {
        til_id: "_i0gqrmb",
        name: "Scope chain 과 prototype chain 을 확인하는 예제",
        date: "2021-12-17",
        category: Category.FOUNDATIONAL_KNOWLEDGE,
        url: [{
            name: URLName.CODE,
            icon: URLIcon.CODE,
            link: "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/Playground/JS/scopeChain_prototypeChainCheck.js"
        }]
    },
    {
        til_id: "_osari8f",
        name: "Component repeat by array map, array fill",
        date: "2021-12-17",
        category: Category.FOUNDATIONAL_KNOWLEDGE,
        url: [{
            name: URLName.COMMIT,
            icon: URLIcon.COMMIT,
            link: "https://github.com/PhilosopherProgrammer/output-training/commit/4fcdd608cd801e97ec712ec12144ed3a0530a432"
        }]
    },
    {
        "til_id": "_sztx6jc",
        "name": "array built-in function 의 parameter 로 넘긴 함수의 사용 형태 확인",
        "date": "2021-12-20",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/Playground/JS/anonymousFuncTest.js"
            }
        ]
    },
    {
        "til_id": "_82f09es",
        "name": "lexical scope",
        "description": "outer Function 안에 예제 넣고 설명 추가",
        "date": "2021-12-20",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.COMMIT,
                "icon": URLIcon.COMMIT,
                "link": "https://github.com/PhilosopherProgrammer/output-training/commit/d97806892df8ab75f424e6bc00fcd6c6fa81fc9b"
            }
        ]
    },
    {
        "til_id": "_0p1wlzr",
        "name": "scope 확인 이후 closure 확인 및 이해 함수의 안의 함수 nested 하게 확인",
        "date": "2021-12-20",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/Playground/JS/closure_test2.js"
            }
        ]
    },
    {
        "til_id": "_m5ftkcb",
        "name": "closure 를 활용한 module pattern 예제로 확인",
        "date": "2021-12-20",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/Playground/JS/moduleTest1.js"
            }
        ]
    },
    {
        "til_id": "_ew7pscv",
        "name": "const, let 호이스팅 확인",
        "description": "TDZ 검색",
        "date": "2021-12-20",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/Playground/JS/hoisting_let_const.js"
            }
        ]
    },
    {
        "til_id": "_ihmb8xw",
        "name": "bind test",
        "date": "2021-12-21",
        "description": "bind 해서 돌려받은 함수에 또 bind 하는 방식으로 context 변경 불가. bind clone 함수를 통해 이해",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/Playground/ES5/bindTestES5.js"
            }
        ]
    },
    {
        "til_id": "_1bfz4lq",
        "name": "Rxjs",
        "description": "observable, observer, subscribe, subscription.unsubscribe() 예제로 확인",
        "date": "2021-12-22",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/Playground/Rxjs/rxjsTest.js"
            }
        ]
    },
    {
        "til_id": "_b0h0hle",
        "name": "lodash",
        "description": "lodash 가 어떤식으로 구현됐는지 소스 받아서 확인",
        "date": "2021-12-22",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/Playground/Lodash/lodashTest.js"
            }
        ]
    },
    {
        "til_id": "_cptmmw2",
        "name": "typescript",
        "description": "tsc 사용법 확인. ES5, ES2015 등으로 변경해서 코드 확인. decorator 어떻게 구현했는지 확인",
        "date": "2021-12-23",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/tree/main/misc/Playground/typescript/decorator"
            }
        ]
    },
    {
        "til_id": "_wz5hw5w",
        "name": "백준",
        "description": "node.js 로 문제풀기 위해 fs.readFileSync 활용법 1000번 문제로 확인",
        "date": "2021-12-23",
        "category": Category.CODING_TEST,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/ProblemSolving/Algorithm/BOJ/1000.js"
            }
        ]
    },
    {
        "til_id": "_3bs77ze",
        "name": "javascript Queue 자료구조 best practice 검색 및 추가",
        "date": "2021-12-23",
        "category": Category.CODING_TEST,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/ProblemSolving/DataStructure/BestPractice/Stack_Queue/Queue.js"
            }
        ]
    },
    {
        "til_id": "_2prpwdr",
        "name": "typescript",
        "description": "static method 어떤식으로 구현됐는지 확인",
        "date": "2021-12-24",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/Playground/typescript/Person.js"
            }
        ]
    },
    {
        "til_id": "_yuilyb5",
        "name": CloneCodingName.SWAYING_BOX_HANGING_FROM_A_STRING,
        "date": "2021-12-28",
        "category": Category.CLONE_CODING,
        "foreign_key": CloneCodingId.SWAYING_BOX_HANGING_FROM_A_STRING,
        "url": [
            {
                "name": URLName.LIVE_SITE,
                "icon": URLIcon.LIVE_SITE,
                "link": "https://philosopherprogrammer.github.io/swaying-box-hanging-from-a-string/"
            },
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/swaying-box-hanging-from-a-string"
            }
        ]
    },
    {
        "til_id": "_5vqagai",
        "name": "프린터",
        "description": "배열의 shift() 사용하지 않고 Linked-list 기반 Queue 사용",
        "date": "2021-12-29",
        "category": Category.CODING_TEST,
        "foreign_key": "_der0deq",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/49"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%ED%94%84%EB%A6%B0%ED%84%B0"
            }
        ]
    },
    {
        "til_id": "_1got6li",
        "name": "다리를 지나는 트럭",
        "description": "배열의 shift() 사용하지 않고 Linked-list 기반 Queue 사용",
        "date": "2021-12-29",
        "category": Category.CODING_TEST,
        "foreign_key": "_0zrm6wp",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/50"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EB%8B%A4%EB%A6%AC%EB%A5%BC%EC%A7%80%EB%82%98%EB%8A%94%ED%8A%B8%EB%9F%AD"
            }
        ]
    },
    {
        "til_id": "_ywbjkk6",
        "name": "로또의 최고 순위와 최저 순위",
        "date": "2022-01-01",
        "category": Category.CODING_TEST,
        "foreign_key": "_lu2j0t7",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/44"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%A1%9C%EB%98%90%EC%9D%98%EC%B5%9C%EA%B3%A0%EC%88%9C%EC%9C%84%EC%99%80%EC%B5%9C%EC%A0%80%EC%88%9C%EC%9C%84"
            }
        ]
    },
    {
        "til_id": "_vsw9jg2",
        "name": "숫자 문자열과 영단어",
        "date": "2022-01-02",
        "category": Category.CODING_TEST,
        "foreign_key": "_iikzzl4",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/45"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%88%AB%EC%9E%90%EB%AC%B8%EC%9E%90%EC%97%B4%EA%B3%BC%EC%98%81%EB%8B%A8%EC%96%B4"
            }
        ]
    },
    {
        "til_id": "_z9flcbc",
        "name": "카펫",
        "date": "2022-01-03",
        "category": Category.CODING_TEST,
        "foreign_key": "_gm0hstg",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/46"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%B9%B4%ED%8E%AB"
            }
        ]
    },
    {
        "til_id": "_g6zbfzn",
        "name": "MyStack linked list 로 직접 작성",
        "date": "2022-01-03",
        "category": Category.CODING_TEST,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/ProblemSolving/DataStructure/Selfmade/My_Stack_Queue/MyStack.js"
            }
        ]
    },
    {
        "til_id": "_n5xgm3i",
        "name": "모의고사",
        "description": "모델 추가될 경우를 신경써서 코딩",
        "date": "2022-01-03",
        "category": Category.CODING_TEST,
        "foreign_key": "_d9srm2b",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/47"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC"
            }
        ]
    },
    {
        "til_id": "_o85mcod",
        "name": "MyQueue linked list 로 직접 작성",
        "date": "2022-01-03",
        "category": Category.CODING_TEST,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/ProblemSolving/DataStructure/Selfmade/My_Stack_Queue/MyQueue.js"
            }
        ]
    },
    {
        "til_id": "_uc2d2su",
        "name": "소수 찾기",
        "description": "순열, 조합, 소수 찾기(제곱근)",
        "date": "2022-01-03",
        "category": Category.CODING_TEST,
        "foreign_key": "_06r1ho3",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/48"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%86%8C%EC%88%98%EC%B0%BE%EA%B8%B0"
            }
        ]
    },
    {
        "til_id": "_p7w31p4",
        "name": "순열과 조합 best practice 검색해서 저장",
        "date": "2022-01-03",
        "category": Category.CODING_TEST,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/tree/main/misc/ProblemSolving/DataStructure/BestPractice/Permutation_Combination"
            }
        ]
    },
    {
        "til_id": "_h7lawco",
        "name": "없는 숫자 더하기",
        "date": "2022-01-04",
        "category": Category.CODING_TEST,
        "foreign_key": "_5tvrf7k",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/52"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%97%86%EB%8A%94%EC%88%AB%EC%9E%90%EB%8D%94%ED%95%98%EA%B8%B0"
            }
        ]
    },
    {
        "til_id": "_q6p3219",
        "name": "String localeCompare best practice",
        "date": "2022-01-04",
        "category": Category.CODING_TEST,
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/output-training/blob/main/misc/ProblemSolving/DataStructure/BestPractice/Sort/localeCompare.js"
            }
        ]
    },
    {
        "til_id": "_mtvvg6x",
        "name": "베스트 앨범",
        "date": "2022-01-04",
        "category": Category.CODING_TEST,
        "foreign_key": "_4h3th2h",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/51"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level3/%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%95%A8%EB%B2%94"
            }
        ]
    },
    {
        "til_id": "_0dcbq25",
        "name": "가장 큰 수",
        "description": "엣지 케이스 확인하는 습관 들이기 위해 테스트 코드 추가",
        "date": "2022-01-04",
        "category": Category.CODING_TEST,
        "foreign_key": "_vbfjyvl",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/53"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EA%B0%80%EC%9E%A5%20%ED%81%B0%20%EC%88%98"
            }
        ]
    },
    {
        "til_id": "_c90782d",
        "name": "H-Index",
        "date": "2022-01-04",
        "category": Category.CODING_TEST,
        "foreign_key": "_s9zhz6b",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/54"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/H-Index"
            }
        ]
    },
    {
        "til_id": "_wf789qo",
        "name": "실패율",
        "date": "2022-01-05",
        "category": Category.CODING_TEST,
        "foreign_key": "_t2qsumx",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/55"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%8B%A4%ED%8C%A8%EC%9C%A8"
            }
        ]
    },
    {
        "til_id": "_fsw8x7k",
        "name": "Contains Duplicate",
        "date": "2022-01-05",
        "category": Category.CODING_TEST,
        "foreign_key": "_p5m41w7",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/56"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/217"
            }
        ]
    },
    {
        "til_id": "_f1jwllz",
        "name": "Maximum SubArray",
        "date": "2022-01-05",
        "category": Category.CODING_TEST,
        "foreign_key": "_9bj4hop",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/57"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/53"
            }
        ]
    },
    {
        "til_id": "_3005vvy",
        "name": "Merge Sorted Array",
        "date": "2022-01-06",
        "category": Category.CODING_TEST,
        "foreign_key": "_nfea6ul",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/58"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/88"
            }
        ]
    },
    {
        "til_id": "_bt0iafm",
        "name": "두 개 뽑아서 더하기",
        "date": "2022-01-06",
        "category": Category.CODING_TEST,
        "foreign_key": "_t02ndka",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/59"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%91%90%EA%B0%9C%EB%BD%91%EC%95%84%EC%84%9C%EB%8D%94%ED%95%98%EA%B8%B0"
            }
        ]
    },
    {
        "til_id": "_6cla0sl",
        "name": "2016년",
        "date": "2022-01-06",
        "category": Category.CODING_TEST,
        "foreign_key": "_qqifjyj",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/67"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/2016%EB%85%84"
            }
        ]
    },
    {
        "til_id": "_2cbtr27",
        "name": "문자열 내림차순으로 배치하기",
        "date": "2022-01-06",
        "category": Category.CODING_TEST,
        "foreign_key": "_xx00z8i",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/68"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%AC%B8%EC%9E%90%EC%97%B4%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0"
            }
        ]
    },
    {
        "til_id": "_6fctsjg",
        "name": "큰 수 만들기",
        "date": "2022-01-07",
        "category": Category.CODING_TEST,
        "foreign_key": "_j2kmc5j",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/69"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%ED%81%B0%EC%88%98%EB%A7%8C%EB%93%A4%EA%B8%B0"
            }
        ]
    },
    {
        "til_id": "_w7c5lsv",
        "name": "구명보트",
        "date": "2022-01-07",
        "category": Category.CODING_TEST,
        "foreign_key": "_mexl2gj",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/70"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8"
            }
        ]
    },
    {
        "til_id": "_z6zimol",
        "name": "Intersection of Two Arrays II",
        "date": "2022-01-07",
        "category": Category.CODING_TEST,
        "foreign_key": "_bjg1eor",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/71"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/350"
            }
        ]
    },
    {
        "til_id": "_ia869sk",
        "name": "Best Time to Buy and Sell Stock",
        "date": "2022-01-07",
        "category": Category.CODING_TEST,
        "foreign_key": "_brav39k",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/72"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/121"
            }
        ]
    },
    {
        "til_id": "_u54jamy",
        "name": "같은 숫자는 싫어",
        "date": "2022-01-08",
        "category": Category.CODING_TEST,
        "foreign_key": "_iyyh7m0",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/77"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EA%B0%99%EC%9D%80%EC%88%AB%EC%9E%90%EB%8A%94%EC%8B%AB%EC%96%B4"
            }
        ]
    },
    {
        "til_id": "_uu8fz16",
        "name": "최소 직사각형",
        "date": "2022-01-08",
        "category": Category.CODING_TEST,
        "foreign_key": "_wzupg4s",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/80"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%B5%9C%EC%86%8C%EC%A7%81%EC%82%AC%EA%B0%81%ED%98%95"
            }
        ]
    },
    {
        "til_id": "_i4k96hk",
        "name": "나누어 떨어지는 숫자 배열",
        "date": "2022-01-08",
        "category": Category.CODING_TEST,
        "foreign_key": "_53izypg",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/78"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%82%98%EB%88%84%EC%96%B4%EB%96%A8%EC%96%B4%EC%A7%80%EB%8A%94%EC%88%AB%EC%9E%90%EB%B0%B0%EC%97%B4"
            }
        ]
    },
    {
        "til_id": "_9leg3vf",
        "name": "두 정수 사이의 합",
        "date": "2022-01-08",
        "category": Category.CODING_TEST,
        "foreign_key": "_41bjb67",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/76"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%91%90%EC%A0%95%EC%88%98%EC%82%AC%EC%9D%B4%EC%9D%98%ED%95%A9"
            }
        ]
    },
    {
        "til_id": "_j8he2xs",
        "name": "약수의 개수와 덧셈",
        "date": "2022-01-08",
        "category": Category.CODING_TEST,
        "foreign_key": "_wmeggre",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/79"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%95%BD%EC%88%98%EC%9D%98%EA%B0%9C%EC%88%98%EC%99%80%EB%8D%A7%EC%85%88"
            }
        ]
    },
    {
        "til_id": "_jbrfgwa",
        "name": "Reshape the Matrix",
        "date": "2022-01-09",
        "category": Category.CODING_TEST,
        "foreign_key": "_9js8ek2",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/81"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/566"
            }
        ]
    },
    {
        "til_id": "_fh9rgsf",
        "name": "First Unique Character in a String",
        "date": "2022-01-10",
        "category": Category.CODING_TEST,
        "foreign_key": "_ae3gy8c",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/82"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/387"
            }
        ]
    },
    {
        "til_id": "_z5fo59y",
        "name": "Ransom Note",
        "date": "2022-01-10",
        "category": Category.CODING_TEST,
        "foreign_key": "_35npo4q",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/83"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/383"
            }
        ]
    },
    {
        "til_id": "_uk9wrjl",
        "name": "Valid Anagram",
        "date": "2022-01-10",
        "category": Category.CODING_TEST,
        "foreign_key": "_ipqsu0d",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/84"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/242"
            }
        ]
    },
    {
        "til_id": "_hwgtie7",
        "name": "Valid Sudoku",
        "date": "2022-01-10",
        "category": Category.CODING_TEST,
        "foreign_key": "_labx0go",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/85"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/2_Medium/36"
            }
        ]
    },
    {
        "til_id": "_e37ijwv",
        "name": "위장",
        "date": "2022-01-10",
        "category": Category.CODING_TEST,
        "foreign_key": "_0viyqfp",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/86"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%9C%84%EC%9E%A5"
            }
        ]
    },
    {
        "til_id": "_1b8n2dv",
        "name": "Linked List Cycle",
        "date": "2022-01-11",
        "category": Category.CODING_TEST,
        "foreign_key": "_jh6x11b",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/87"
            },
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/141"
            }
        ]
    },
    {
        "til_id": "_mvyhd4s",
        "name": "helper function",
        "description": "makeSinglyLinkedListFromArray",
        "date": "2022-01-11",
        "category": Category.CODING_TEST,
        "url": [
            {
                "name": URLName.COMMIT,
                "icon": URLIcon.COMMIT,
                "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/commit/d566f309ef36767c0b887a6b55fa966b72392c89"
            }
        ]
    },
    {
        "til_id": "_n8vpaxp",
        "name": SideProjectName.README_GENERATOR,
        "description": "기획 및 제작 시작",
        "date": "2022-01-12",
        "category": Category.SIDE_PROJECT,
        "foreign_key": SideProjectId.README_GENERATOR,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/readme-generator"
            }
        ]
    },
    {
        "til_id": "_1cnn4tk",
        "name": SideProjectName.README_GENERATOR,
        "description": "github 생성 및 코드 이동, url 모델 구조 변경",
        "date": "2022-01-13",
        "category": Category.SIDE_PROJECT,
        "foreign_key": SideProjectId.README_GENERATOR,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/readme-generator"
            }
        ]
    },
    {
        "til_id": "_ajdkq4z",
        "name": "체육복",
        "description": "python 풀이",
        "date": "2022-01-13",
        "category": Category.CODING_TEST,
        "foreign_key": "_dfxs57t",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%B2%B4%EC%9C%A1%EB%B3%B5"
            }
        ]
    },
    {
        "til_id": "_ttp7z66",
        "name": "K번째수",
        "description": "python 풀이",
        "date": "2022-01-13",
        "category": Category.CODING_TEST,
        "foreign_key": "_xh4fvdm",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/K%EB%B2%88%EC%A7%B8%EC%88%98"
            }
        ]
    },
    {
        "til_id": "_85mixh4",
        "name": SideProjectName.README_GENERATOR,
        "description": "BOJ model 추가, type 추가, boj generating logic 추가, platform 난이도로 정렬된 문제 개수 보여주는 로직 추가, topic 으로 정렬된 문제 개수 보여주는 로직 추가",
        "date": "2022-01-14",
        "category": Category.SIDE_PROJECT,
        "foreign_key": SideProjectId.README_GENERATOR,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/readme-generator"
            }
        ]
    },
    {
        "til_id": "_ap6350c",
        "name": "AWS",
        "description": "S3 정적 웹사이트 - Route 53 - 도메인 간 연결",
        "date": "2022-01-15",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.LECTURE,
                "icon": URLIcon.LECTURE,
                "link": "https://www.udemy.com/course/aws-serverless-a-complete-introduction/"
            }
        ]
    },
    {
        "til_id": "_0lngxsf",
        "name": "셀프 넘버",
        "date": "2022-01-15",
        "category": Category.CODING_TEST,
        "foreign_key": "_bcz365r",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/5/4673"
            }
        ]
    },
    {
        "til_id": "_4i8o8ev",
        "name": SideProjectName.README_GENERATOR,
        "description": "ReadmeGen_1.0.0 and typescript",
        "date": "2022-01-16",
        "category": Category.SIDE_PROJECT,
        "foreign_key": SideProjectId.README_GENERATOR,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/readme-generator"
            }
        ]
    },
    {
        "til_id": "_qvhfbj1",
        "name": "수 찾기",
        "description": "Set, Hash 풀이",
        "date": "2022-01-16",
        "category": Category.CODING_TEST,
        "foreign_key": "_pag9dc2",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/1920"
            }
        ]
    },
    {
        "til_id": "_xz91y4j",
        "name": "수 찾기",
        "description": "Binary search 풀이 추가",
        "date": "2022-01-17",
        "category": Category.CODING_TEST,
        "foreign_key": "_pag9dc2",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/1920"
            }
        ]
    },
    {
        "til_id": "_ngjvac2",
        "name": "제로",
        "date": "2022-01-17",
        "category": Category.CODING_TEST,
        "foreign_key": "_coi5mln",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/10773"
            }
        ]
    },
    {
        "til_id": "_17g1yqw",
        "name": "수 찾기",
        "description": "블로그 작성",
        "date": "2022-01-18",
        "category": Category.CODING_TEST,
        "foreign_key": "_pag9dc2",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/90"
            }
        ]
    },
    {
        "til_id": "_hgc9t4h",
        "name": "제로",
        "description": "블로그 작성",
        "date": "2022-01-18",
        "category": Category.CODING_TEST,
        "foreign_key": "_coi5mln",
        "url": [
            {
                "name": URLName.BLOG,
                "icon": URLIcon.BLOG,
                "link": "https://philosopherprogrammer.com/89"
            }
        ]
    },
    {
        "til_id": "_essz1eq",
        "name": "AWS",
        "description": "API gateway, dynamodb study",
        "date": "2022-01-18",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.LECTURE,
                "icon": URLIcon.LECTURE,
                "link": "https://www.udemy.com/course/aws-serverless-a-complete-introduction/"
            }
        ]
    },
    {
        "til_id": "_xaktlab",
        "name": "단어 뒤집기",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_jn0c1zs",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/1/9093"
            }
        ]
    },
    {
        "til_id": "_5ary6sa",
        "name": "일곱 난쟁이",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_p5tp2df",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/2309"
            }
        ]
    },
    {
        "til_id": "_sd9q0q2",
        "name": "문자열 반복",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_v81921t",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/2675"
            }
        ]
    },
    {
        "til_id": "_m7wzy76",
        "name": "백설 공주와 일곱 난쟁이",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_phrpp6h",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/3040"
            }
        ]
    },
    {
        "til_id": "_ey01gk3",
        "name": "유레카 이론",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_l6d8c6k",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/10448"
            }
        ]
    },
    {
        "til_id": "_f3gib9t",
        "name": "알파벳 개수",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_bc4lpd1",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/10808"
            }
        ]
    },
    {
        "til_id": "_a1f45hy",
        "name": "알파벳 찾기",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_rjz3bk5",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/10809"
            }
        ]
    },
    {
        "til_id": "_r23ouvw",
        "name": "빠른 A+B",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_dmbas93",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/15552"
            }
        ]
    },
    {
        "til_id": "_42xx3yh",
        "name": "A-B",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_893t5j2",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/5/1001"
            }
        ]
    },
    {
        "til_id": "_fc40z43",
        "name": "Hello World",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_wy3mob4",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/5/2557"
            }
        ]
    },
    {
        "til_id": "_hmac5z1",
        "name": "R2",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_y3kx8p5",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/5/3046"
            }
        ]
    },
    {
        "til_id": "_v6ctc9a",
        "name": "오늘 날짜",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_kzpd5rh",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/5/10699"
            }
        ]
    },
    {
        "til_id": "_n6r2s88",
        "name": "We love kriii",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_1a68hh8",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/5/10718"
            }
        ]
    },
    {
        "til_id": "_j5wfu3y",
        "name": "덱",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_8ns6653",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/10866"
            }
        ]
    },
    {
        "til_id": "_oz1qvya",
        "name": "요세푸스 문제 0",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_hetqhyr",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/11866"
            }
        ]
    },
    {
        "til_id": "_exalfzd",
        "name": "요세푸스 문제",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_yhqvbt7",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/5/1158"
            }
        ]
    },
    {
        "til_id": "_wid479z",
        "name": "회사에 있는 사람",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_6uz2dc1",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/5/7785"
            }
        ]
    },
    {
        "til_id": "_0cujajd",
        "name": "큐",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_0tsqetw",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/10845"
            }
        ]
    },
    {
        "til_id": "_dr072er",
        "name": "스택",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_yvj2atm",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/10828"
            }
        ]
    },
    {
        "til_id": "_hx8gkw7",
        "name": "괄호",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_mzqrpw4",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/9012"
            }
        ]
    },
    {
        "til_id": "_jdnwpp3",
        "name": "카드2",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_2n034jy",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/2164"
            }
        ]
    },
    {
        "til_id": "_3gqvbxh",
        "name": "베스트셀러",
        "date": "2022-01-19",
        "category": Category.CODING_TEST,
        "foreign_key": "_3pte8xb",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/1302"
            }
        ]
    },
    {
        "til_id": "_gu8jc16",
        "name": "단어 뒤집기 2",
        "date": "2022-01-20",
        "category": Category.CODING_TEST,
        "foreign_key": "_unb693k",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/3/17413"
            }
        ]
    },
    {
        "til_id": "_92zfll4",
        "name": "구간 합 구하기 4",
        "date": "2022-01-20",
        "category": Category.CODING_TEST,
        "foreign_key": "_g5nyz9f",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/3/11659"
            }
        ]
    },
    {
        "til_id": "_omy1e4o",
        "name": "체육복",
        "description": "javascript 풀이",
        "date": "2022-01-20",
        "category": Category.CODING_TEST,
        "foreign_key": "_dfxs57t",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%B2%B4%EC%9C%A1%EB%B3%B5"
            }
        ]
    },
    {
        "til_id": "_khfwfrk",
        "name": "K번째수",
        "description": "javascript 풀이",
        "date": "2022-01-20",
        "category": Category.CODING_TEST,
        "foreign_key": "_xh4fvdm",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/K%EB%B2%88%EC%A7%B8%EC%88%98"
            }
        ]
    },
    {
        "til_id": "_avza9bs",
        "name": CloneCodingName.HOTEL_BT,
        "description": "navbar 추가",
        "date": "2022-01-20",
        "category": Category.CLONE_CODING,
        "foreign_key": CloneCodingId.HOTEL_BT,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/hotel-BT"
            }
        ]
    },
    {
        "til_id": "_cajoe43",
        "name": CloneCodingName.HOTEL_BT,
        "description": "showcase 추가",
        "date": "2022-01-21",
        "category": Category.CLONE_CODING,
        "foreign_key": CloneCodingId.HOTEL_BT,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/hotel-BT"
            }
        ]
    },
    {
        "til_id": "_cm0mi3s",
        "name": ChallengeName.NFT_PREVIEW_CARD_COMPONENT,
        "description": "overall layout",
        "date": "2022-01-21",
        "category": Category.CHALLENGE,
        "foreign_key": ChallengeId.NFT_PREVIEW_CARD_COMPONENT,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/NFT-preview-card-component"
            }
        ]
    },
    {
        "til_id": "_7s9zqg5",
        "name": "AWS",
        "description": "API gateway - Lambda function 연결",
        "date": "2022-01-21",
        "category": Category.FOUNDATIONAL_KNOWLEDGE,
        "url": [
            {
                "name": URLName.LECTURE,
                "icon": URLIcon.LECTURE,
                "link": "https://www.udemy.com/course/aws-serverless-a-complete-introduction/"
            }
        ]
    },
    {
        "til_id": "_419s1bv",
        "name": ChallengeName.NFT_PREVIEW_CARD_COMPONENT,
        "description": "responsive layout, hover, cursor, font-size etc",
        "date": "2022-01-22",
        "category": Category.CHALLENGE,
        "foreign_key": ChallengeId.NFT_PREVIEW_CARD_COMPONENT,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/NFT-preview-card-component"
            },
            {
                "name": URLName.LIVE_SITE,
                "icon": URLIcon.LIVE_SITE,
                "link": "https://philosopherprogrammer.github.io/NFT-preview-card-component/"
            }
        ]
    },
    {
        "til_id": "_srr9rz1",
        "name": ChallengeName.NFT_PREVIEW_CARD_COMPONENT,
        "description": "Image hover 적용 및 정리",
        "date": "2022-01-23",
        "category": Category.CHALLENGE,
        "foreign_key": ChallengeId.NFT_PREVIEW_CARD_COMPONENT,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/NFT-preview-card-component"
            },
            {
                "name": URLName.LIVE_SITE,
                "icon": URLIcon.LIVE_SITE,
                "link": "https://philosopherprogrammer.github.io/NFT-preview-card-component/"
            },
            {
                "name": URLName.SOLUTION,
                "icon": URLIcon.SOLUTION,
                "link": "https://www.frontendmentor.io/solutions/nft-preview-card-component-9Vy2c_qQd"
            }
        ]
    },
    {
        "til_id": "_dzvovjx",
        "name": ChallengeName.NFT_PREVIEW_CARD_COMPONENT,
        "description": "Accessibility 조정",
        "date": "2022-01-24",
        "category": Category.CHALLENGE,
        "foreign_key": ChallengeId.NFT_PREVIEW_CARD_COMPONENT,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/NFT-preview-card-component"
            },
            {
                "name": URLName.LIVE_SITE,
                "icon": URLIcon.LIVE_SITE,
                "link": "https://philosopherprogrammer.github.io/NFT-preview-card-component/"
            },
            {
                "name": URLName.SOLUTION,
                "icon": URLIcon.SOLUTION,
                "link": "https://www.frontendmentor.io/solutions/nft-preview-card-component-9Vy2c_qQd"
            }
        ]
    },
    {
        "til_id": "_sktnxtn",
        "name": ChallengeName.TIME_TRACKING_DASHBOARD,
        "description": "initialize",
        "date": "2022-01-25",
        "category": Category.CHALLENGE,
        "foreign_key": ChallengeId.TIME_TRACKING_DASHBOARD,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/time-tracking-dashboard"
            }
        ]
    },
    {
        "til_id": "_mmr2col",
        "name": ChallengeName.TIME_TRACKING_DASHBOARD,
        "description": "template component, webpack setting(webpack-dev-server, style-loader, css-loader, file-loader), Overall layout",
        "date": "2022-01-26",
        "category": Category.CHALLENGE,
        "foreign_key": ChallengeId.TIME_TRACKING_DASHBOARD,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/time-tracking-dashboard"
            }
        ]
    },
    {
        "til_id": "_vf0qsau",
        "name": SideProjectName.README_GENERATOR,
        "description": "Coding Test Practice Readme Difficulty 내림차순으로 변경, DFS/BFS 결합",
        "date": "2022-01-27",
        "category": Category.SIDE_PROJECT,
        "foreign_key": SideProjectId.README_GENERATOR,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/readme-generator"
            }
        ]
    },
    {
        "til_id": "_su9y7u0",
        "name": ChallengeName.TIME_TRACKING_DASHBOARD,
        "description": "bem modifier, mouse cursor range",
        "date": "2022-01-27",
        "category": Category.CHALLENGE,
        "foreign_key": ChallengeId.TIME_TRACKING_DASHBOARD,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/time-tracking-dashboard"
            }
        ]
    },
    {
        "til_id": "_19j6rzr",
        "name": CloneCodingName.HOTEL_BT,
        "description": "home info, features footer",
        "date": "2022-01-27",
        "category": Category.CLONE_CODING,
        "foreign_key": CloneCodingId.HOTEL_BT,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/hotel-BT"
            }
        ]
    },
    {
        "til_id": "_i7wztpl",
        "name": SideProjectName.BYUNMIN_CHOI,
        "description": "startbootstrap 포트폴리오 디자인 확인",
        "date": "2022-01-27",
        "category": Category.SIDE_PROJECT,
        "foreign_key": SideProjectId.BYUNMIN_CHOI,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/byungmin-choi"
            }
        ]
    },
    {
        "til_id": "_vva1ale",
        "name": SideProjectName.SENTENCE_SHAKER,
        "description": "init, style, basic feature",
        "date": "2022-01-28",
        "category": Category.SIDE_PROJECT,
        "foreign_key": SideProjectId.SENTENCE_SHAKER,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/sentence-shaker"
            }
        ]
    },
    {
        "til_id": "_tbvc4wh",
        "name": ChallengeName.TIME_TRACKING_DASHBOARD,
        "description": "card html layout, create element and add, css",
        "date": "2022-01-28",
        "category": Category.CHALLENGE,
        "foreign_key": ChallengeId.TIME_TRACKING_DASHBOARD,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/time-tracking-dashboard"
            }
        ]
    },
    {
        "til_id": "_9ityteg",
        "name": CloneCodingName.SWAYING_BOX_HANGING_FROM_A_STRING,
        "description": "attribution, favicon, title 추가",
        "date": "2022-01-29",
        "category": Category.CLONE_CODING,
        "foreign_key": CloneCodingId.SWAYING_BOX_HANGING_FROM_A_STRING,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/swaying-box-hanging-from-a-string"
            },
            {
                "name": URLName.LIVE_SITE,
                "icon": URLIcon.LIVE_SITE,
                "link": "https://philosopherprogrammer.github.io/swaying-box-hanging-from-a-string/"
            }
        ]
    },
    {
        "til_id": "_x1neu9r",
        "name": ChallengeName.NFT_PREVIEW_CARD_COMPONENT,
        "description": "favicon 생성, 추가, font-weight 조정",
        "date": "2022-01-29",
        "category": Category.CHALLENGE,
        "foreign_key": ChallengeId.NFT_PREVIEW_CARD_COMPONENT,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/NFT-preview-card-component"
            },
            {
                "name": URLName.LIVE_SITE,
                "icon": URLIcon.LIVE_SITE,
                "link": "https://philosopherprogrammer.github.io/NFT-preview-card-component/"
            },
            {
                "name": URLName.SOLUTION,
                "icon": URLIcon.SOLUTION,
                "link": "https://www.frontendmentor.io/solutions/nft-preview-card-component-9Vy2c_qQd"
            }
        ]
    },
    {
        "til_id": "_e8tr67j",
        "name": ChallengeName.TIME_TRACKING_DASHBOARD,
        "description": "favicon 추가, css 적용 방식 변경, mobile to desktop",
        "date": "2022-01-30",
        "category": Category.CHALLENGE,
        "foreign_key": ChallengeId.TIME_TRACKING_DASHBOARD,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/time-tracking-dashboard"
            }
        ]
    },
    {
        "til_id": "_6vgcddt",
        "name": "다트 게임",
        "date": "2022-02-02",
        "category": Category.CODING_TEST,
        "foreign_key": "_qloepyo",
        "url": [
            {
                "name": URLName.CODE,
                "icon": URLIcon.CODE,
                "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%8B%A4%ED%8A%B8%EA%B2%8C%EC%9E%84"
            }
        ]
    },
    {
        "til_id": "_p089i88",
        "name": SideProjectName.README_GENERATOR,
        "description": "typescript 로 프로젝트 전체 변환 후 merge",
        "date": "2022-02-02",
        "category": Category.SIDE_PROJECT,
        "foreign_key": SideProjectId.README_GENERATOR,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/readme-generator"
            }
        ]
    },
    {
        "til_id": "_7rolzg2",
        "name": "Programmers 스킬업 스킬체크 레벨1 획득",
        "date": "2022-02-02",
        "category": Category.CODING_TEST,
        "url": [
            {
                "name": URLName.CERTIFICATION,
                "icon": URLIcon.CERTIFICATION,
                "link": "https://programmers.co.kr/skill_checks"
            }
        ]
    },
    {
        "til_id": "_6u3i4bs",
        "name": SideProjectName.README_GENERATOR,
        "description": "TIL data 정리, type 조정",
        "date": "2022-02-03",
        "category": Category.SIDE_PROJECT,
        "foreign_key": SideProjectId.README_GENERATOR,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/readme-generator"
            }
        ]
    },
    {
        "til_id": "_9yrvhns",
        "name": SideProjectName.README_GENERATOR,
        "description": "TIL data 추가, type 정리, typo 처리",
        "date": "2022-02-03",
        "category": Category.SIDE_PROJECT,
        "foreign_key": SideProjectId.README_GENERATOR,
        "url": [
            {
                "name": URLName.GITHUB,
                "icon": URLIcon.GITHUB,
                "link": "https://github.com/PhilosopherProgrammer/readme-generator"
            }
        ]
    },
]

/**
    {
        "til_id": "",
        "name": "",
        "date": "",
        "category": "",
        "url": [
            {
                "name": "",
                "icon": "",
                "link": ""
            }
        ]
    },
 */