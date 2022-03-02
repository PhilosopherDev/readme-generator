import {
  Algorithms,
  BOJLevel,
  Company,
  CodingTestModel,
  CodingTestPlatform,
  DataStructure,
  EducationPlatform,
  InflearnLecture,
  Language,
  LeetcodeLevel,
  ProgrammersLevel,
} from '../model/CodingTest.model';
import { URLName, URLIcon } from '../model/Common.model';

export const codingTestData: Array<CodingTestModel> = [
  {
    "cote_id": "_0viyqfp",
    "name": "위장",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.HASH
    ],
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
    "cote_id": "_71tjp1e",
    "name": "문자열 압축",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "company": Company.KAKAO,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STRING
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/40"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EB%AC%B8%EC%9E%90%EC%97%B4%EC%95%95%EC%B6%95"
      }
    ]
  },
  {
    "cote_id": "_1r9n3cy",
    "name": "오픈채팅방",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "company": Company.KAKAO,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.HASH
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/41"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%98%A4%ED%94%88%EC%B1%84%ED%8C%85%EB%B0%A9"
      }
    ]
  },
  {
    "cote_id": "_g14do6z",
    "name": "124 나라의 숫자",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/39"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/124%EB%82%98%EB%9D%BC%EC%9D%98%EC%88%AB%EC%9E%90"
      }
    ]
  },
  {
    "cote_id": "_9dcthrp",
    "name": "기능개발",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STACK,
      DataStructure.QUEUE
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/15"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EA%B8%B0%EB%8A%A5%EA%B0%9C%EB%B0%9C"
      }
    ]
  },
  {
    "cote_id": "_1r5knqx",
    "name": "타겟 넘버",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.BFS
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/38"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%ED%83%80%EA%B2%9F%EB%84%98%EB%B2%84"
      }
    ]
  },
  {
    "cote_id": "_0ru5rxa",
    "name": "짝지어 제거하기",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STACK
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/37"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%A7%9D%EC%A7%80%EC%96%B4%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0"
      }
    ]
  },
  {
    "cote_id": "_der0deq",
    "name": "프린터",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.QUEUE
    ],
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
    "cote_id": "_vbfjyvl",
    "name": "가장 큰 수",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.SORTING
    ],
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
    "cote_id": "_06r1ho3",
    "name": "소수 찾기",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.BRUTEFORCE
    ],
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
    "cote_id": "_0zrm6wp",
    "name": "다리를 지나는 트럭",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.QUEUE
    ],
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
    "cote_id": "_s9zhz6b",
    "name": "H-Index",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.SORTING
    ],
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
    "cote_id": "_gm0hstg",
    "name": "카펫",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.BRUTEFORCE
    ],
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
    "cote_id": "_j2kmc5j",
    "name": "큰 수 만들기",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.GREEDY
    ],
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
    "cote_id": "_mexl2gj",
    "name": "구명보트",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL2,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.GREEDY
    ],
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
    "cote_id": "_lu2j0t7",
    "name": "로또의 최고 순위와 최저 순위",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
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
    "cote_id": "_iikzzl4",
    "name": "숫자 문자열과 영단어",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "company": Company.KAKAO,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STRING,
      DataStructure.ARRAY
    ],
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
    "cote_id": "_5tvrf7k",
    "name": "없는 숫자 더하기",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
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
    "cote_id": "_a7nh88e",
    "name": "음양 더하기",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/8"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%9D%8C%EC%96%91%EB%8D%94%ED%95%98%EA%B8%B0"
      }
    ]
  },
  {
    "cote_id": "_3h01sl3",
    "name": "완주하지 못한 선수",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.HASH,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/7"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80%EB%AA%BB%ED%95%9C%EC%84%A0%EC%88%98"
      }
    ]
  },
  {
    "cote_id": "_xh4fvdm",
    "name": "K번째수",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.PYTHON,
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.SORTING
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/K%EB%B2%88%EC%A7%B8%EC%88%98"
      }
    ]
  },
  {
    "cote_id": "_d9srm2b",
    "name": "모의고사",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.BRUTEFORCE
    ],
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
    "cote_id": "_dfxs57t",
    "name": "체육복",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.PYTHON,
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.GREEDY
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%B2%B4%EC%9C%A1%EB%B3%B5"
      }
    ]
  },
  {
    "cote_id": "_xjhphb0",
    "name": "폰켓몬",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/9"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%ED%8F%B0%EC%BC%93%EB%AA%AC"
      }
    ]
  },
  {
    "cote_id": "_t2qsumx",
    "name": "실패율",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "company": Company.KAKAO,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
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
    "cote_id": "_wmeggre",
    "name": "약수의 개수와 덧셈",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
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
    "cote_id": "_t02ndka",
    "name": "두 개 뽑아서 더하기",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.BRUTEFORCE
    ],
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
    "cote_id": "_qqifjyj",
    "name": "2016년",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
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
    "cote_id": "_wzupg4s",
    "name": "최소 직사각형",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.SORTING
    ],
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
    "cote_id": "_7j0lshd",
    "name": "나머지가 1이 되는 수 찾기",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/75"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%82%98%EB%A8%B8%EC%A7%80%EA%B0%801%EC%9D%B4%EB%90%98%EB%8A%94%EC%88%98%EC%B0%BE%EA%B8%B0"
      }
    ]
  },
  {
    "cote_id": "_5zux91w",
    "name": "부족한 금액 계산하기",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/43"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%B6%80%EC%A1%B1%ED%95%9C%EA%B8%88%EC%95%A1%EA%B3%84%EC%82%B0%ED%95%98%EA%B8%B0"
      }
    ]
  },
  {
    "cote_id": "_o9t7srk",
    "name": "가운데 글자 가져오기",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STRING,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/74"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EA%B0%80%EC%9A%B4%EB%8D%B0%EA%B8%80%EC%9E%90%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0"
      }
    ]
  },
  {
    "cote_id": "_iyyh7m0",
    "name": "같은 숫자는 싫어",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
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
    "cote_id": "_53izypg",
    "name": "나누어 떨어지는 숫자 배열",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY
    ],
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
    "cote_id": "_41bjb67",
    "name": "두 정수 사이의 합",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
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
    "cote_id": "_xx00z8i",
    "name": "문자열 내림차순으로 배치하기",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.SORTING
    ],
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
    "cote_id": "_kyutoog",
    "name": "서울에서 김서방 찾기",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/73"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%84%9C%EC%9A%B8%EC%97%90%EC%84%9C%EA%B9%80%EC%84%9C%EB%B0%A9%EC%B0%BE%EA%B8%B0"
      }
    ]
  },
  {
    "cote_id": "_4h3th2h",
    "name": "베스트 앨범",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL3,
    "language": [
      Language.JAVASCRIPT,
      Language.PYTHON,
    ],
    "topic": [
      DataStructure.HASH,
    ],
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
    "cote_id": "_pll9wr4",
    "name": "Two Sum",
    "number": 1,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY,
      DataStructure.HASH,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/17"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/1"
      }
    ]
  },
  {
    "cote_id": "_g8srr4o",
    "name": "Palindrome Number",
    "number": 9,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.MATH,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/20"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/9"
      }
    ]
  },
  {
    "cote_id": "_56dhoek",
    "name": "Longest Common Prefix",
    "number": 14,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STRING,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/22"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/14"
      }
    ]
  },
  {
    "cote_id": "_w8iyalr",
    "name": "Valid Parentheses",
    "number": 20,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STRING,
      DataStructure.STACK
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/14"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/20"
      }
    ]
  },
  {
    "cote_id": "_2m67d4h",
    "name": "Merge Two Sorted Lists",
    "number": 21,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/28"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/21"
      }
    ]
  },
  {
    "cote_id": "_9bj4hop",
    "name": "Maximum Subarray",
    "number": 53,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.LINKED_LIST,
      Algorithms.RECURSION,
    ],
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
    "cote_id": "_ptf5gts",
    "name": "Climbing Stairs",
    "number": 70,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.MATH,
      Algorithms.DYNAMIC_PROGRAMMING,
      Algorithms.MEMOIZATION,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/30"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/70"
      }
    ]
  },
  {
    "cote_id": "_nfea6ul",
    "name": "Merge Sorted Array",
    "number": 88,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.TWO_POINTERS,
      DataStructure.ARRAY,
      Algorithms.SORTING
    ],
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
    "cote_id": "_1v40272",
    "name": "Binary Tree Inorder Traversal",
    "number": 94,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STACK,
      DataStructure.TREE,
      Algorithms.DFS
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/24"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/94"
      }
    ]
  },
  {
    "cote_id": "_35jmctp",
    "name": "Pascals Triangle",
    "number": 118,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY,
      Algorithms.DYNAMIC_PROGRAMMING,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/36"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/118"
      }
    ]
  },
  {
    "cote_id": "_brav39k",
    "name": "Best Time to Buy and Sell Stock",
    "number": 121,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY,
      Algorithms.DYNAMIC_PROGRAMMING,
    ],
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
    "cote_id": "_u5avgy7",
    "name": "Single Number",
    "number": 136,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY,
      Algorithms.BIT_MANIPULATION,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/32"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/136"
      }
    ]
  },
  {
    "cote_id": "_jh6x11b",
    "name": "Linked List Cycle",
    "number": 141,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.HASH,
      DataStructure.LINKED_LIST,
      Algorithms.TWO_POINTERS,
    ],
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
    "cote_id": "_x40oyse",
    "name": "Binary Tree Preorder Traversal",
    "number": 144,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STACK,
      DataStructure.TREE,
      Algorithms.DFS
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/23"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/144"
      }
    ]
  },
  {
    "cote_id": "_1dchodw",
    "name": "Binary Tree Postorder Traversal",
    "number": 145,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STACK,
      DataStructure.TREE,
      Algorithms.DFS
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/25"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/145"
      }
    ]
  },
  {
    "cote_id": "_ssa1qfl",
    "name": "Min Stack",
    "number": 155,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STACK,
      Algorithms.DESIGN
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/16"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/155"
      }
    ]
  },
  {
    "cote_id": "_5wdiax0",
    "name": "Majority Element",
    "number": 169,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY,
      DataStructure.HASH,
      Algorithms.SORTING,
      Algorithms.COUNTING,
      Algorithms.DVIDE_AND_CONQUER,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/29"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/169"
      }
    ]
  },
  {
    "cote_id": "_j9tdd3m",
    "name": "Happy Number",
    "number": 202,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.HASH,
      Algorithms.MATH,
      Algorithms.TWO_POINTERS,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/34"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/1_Easy/202"
      }
    ]
  },
  {
    "cote_id": "_p5m41w7",
    "name": "Contains Duplicate",
    "number": 217,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY,
      DataStructure.HASH,
      Algorithms.SORTING
    ],
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
    "cote_id": "_ipqsu0d",
    "name": "Valid Anagram",
    "number": 242,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.HASH,
      DataStructure.STRING,
      Algorithms.SORTING
    ],
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
    "cote_id": "_bjg1eor",
    "name": "Intersection of Two Arrays II",
    "number": 350,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY,
      DataStructure.HASH,
      Algorithms.TWO_POINTERS,
      Algorithms.BINARY_SEARCH,
      Algorithms.SORTING
    ],
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
    "cote_id": "_35npo4q",
    "name": "Ransom Note",
    "number": 383,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.HASH,
      DataStructure.STRING,
      Algorithms.COUNTING,
    ],
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
    "cote_id": "_ae3gy8c",
    "name": "First Unique Character in a String",
    "number": 387,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.HASH,
      DataStructure.STRING,
      DataStructure.QUEUE,
      Algorithms.COUNTING,
    ],
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
    "cote_id": "_9js8ek2",
    "name": "Reshape the Matrix",
    "number": 566,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.EASY,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY,
      Algorithms.MATRIX,
      Algorithms.SIMULATION,
    ],
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
    "cote_id": "_djo7pdb",
    "name": "Add Two Numbers",
    "number": 2,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.MEDIUM,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.LINKED_LIST,
      Algorithms.MATH,
      Algorithms.RECURSION,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/18"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/2_Medium/2"
      }
    ]
  },
  {
    "cote_id": "_e0zag9b",
    "name": "Reverse Integer",
    "number": 7,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.MEDIUM,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.MATH,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/19"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/2_Medium/7"
      }
    ]
  },
  {
    "cote_id": "_7uwsxnt",
    "name": "Container with Most Water",
    "number": 11,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.MEDIUM,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY,
      Algorithms.TWO_POINTERS,
      Algorithms.GREEDY
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/21"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/2_Medium/11"
      }
    ]
  },
  {
    "cote_id": "_labx0go",
    "name": "Valid Sudoku",
    "number": 36,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.MEDIUM,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY,
      DataStructure.HASH,
      Algorithms.MATRIX,
    ],
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
    "cote_id": "_orkq2f6",
    "name": "Binary Tree Level Order Traversal",
    "number": 102,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.MEDIUM,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.TREE,
      Algorithms.BFS,
      DataStructure.BINARY_TREE,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/26"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/2_Medium/102"
      }
    ]
  },
  {
    "cote_id": "_7h5ye5q",
    "name": "Binary Tree Level Order Traversal II",
    "number": 107,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.MEDIUM,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.TREE,
      Algorithms.BFS,
      DataStructure.BINARY_TREE,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/27"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/2_Medium/107"
      }
    ]
  },
  {
    "cote_id": "_enejm8t",
    "name": "Maximum Length of Repeated Subarray",
    "number": 718,
    "platform": CodingTestPlatform.LEETCODE,
    "difficulty": LeetcodeLevel.MEDIUM,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.ARRAY,
      Algorithms.BINARY_SEARCH,
      Algorithms.DYNAMIC_PROGRAMMING,
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/35"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/CodingTestPractice/tree/main/CodingTestPlatform/LeetCode/2_Medium/718"
      }
    ]
  },
  {
    "cote_id": "_q2k6jhc",
    "name": "A+B",
    "number": 1000,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE5,
    "language": [
      Language.PYTHON,
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION,
      Algorithms.MATH,
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/5/1000"
      }
    ]
  },
  {
    "cote_id": "_893t5j2",
    "name": "A-B",
    "number": 1001,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE5,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.MATH,
      Algorithms.IMPLEMENTATION
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/5/1001"
      }
    ]
  },
  {
    "cote_id": "_wy3mob4",
    "name": "Hello World",
    "number": 2557,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE5,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/5/2557"
      }
    ]
  },
  {
    "cote_id": "_y3kx8p5",
    "name": "R2",
    "number": 3046,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE5,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.MATH,
      Algorithms.IMPLEMENTATION
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/5/3046"
      }
    ]
  },
  {
    "cote_id": "_kzpd5rh",
    "name": "오늘 날짜",
    "number": 10699,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE5,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/5/10699"
      }
    ]
  },
  {
    "cote_id": "_1a68hh8",
    "name": "We love kriii",
    "number": 10718,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE5,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/5/10718"
      }
    ]
  },
  {
    "cote_id": "_p5tp2df",
    "name": "일곱 난쟁이",
    "number": 2309,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE2,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.BRUTEFORCE,
      Algorithms.SORTING
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/2309"
      }
    ]
  },
  {
    "cote_id": "_v81921t",
    "name": "문자열 반복",
    "number": 2675,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE2,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STRING,
      Algorithms.IMPLEMENTATION
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/2675"
      }
    ]
  },
  {
    "cote_id": "_phrpp6h",
    "name": "백설 공주와 일곱 난쟁이",
    "number": 3040,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE2,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.BRUTEFORCE
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/3040"
      }
    ]
  },
  {
    "cote_id": "_l6d8c6k",
    "name": "유레카 이론",
    "number": 10448,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE2,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.BRUTEFORCE,
      Algorithms.MATH,
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/10448"
      }
    ]
  },
  {
    "cote_id": "_bc4lpd1",
    "name": "알파벳 개수",
    "number": 10808,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE2,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION,
      DataStructure.STRING,
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/10808"
      }
    ]
  },
  {
    "cote_id": "_rjz3bk5",
    "name": "알파벳 찾기",
    "number": 10809,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE2,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STRING,
      Algorithms.IMPLEMENTATION
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/10809"
      }
    ]
  },
  {
    "cote_id": "_dmbas93",
    "name": "빠른 A+B",
    "number": 15552,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE2,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.MATH,
      Algorithms.IMPLEMENTATION
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/2/15552"
      }
    ]
  },
  {
    "cote_id": "_jn0c1zs",
    "name": "단어 뒤집기",
    "number": 9093,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.BRONZE1,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/1_Bronze/1/9093"
      }
    ]
  },
  {
    "cote_id": "_yhqvbt7",
    "name": "요세푸스 문제",
    "number": 1158,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER5,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.QUEUE
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/5/1158"
      }
    ]
  },
  {
    "cote_id": "_6uz2dc1",
    "name": "회사에 있는 사람",
    "number": 7785,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER5,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.HASH,
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/5/7785"
      }
    ]
  },
  {
    "cote_id": "_3pte8xb",
    "name": "베스트셀러",
    "number": 1302,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER4,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STRING,
      Algorithms.SORTING,
      DataStructure.HASH,
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/1302"
      }
    ]
  },
  {
    "cote_id": "_2n034jy",
    "name": "카드2",
    "number": 2164,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER4,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.QUEUE
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/2164"
      }
    ]
  },
  {
    "cote_id": "_mzqrpw4",
    "name": "괄호",
    "number": 9012,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER4,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STRING,
      DataStructure.STACK
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/9012"
      }
    ]
  },
  {
    "cote_id": "_yvj2atm",
    "name": "스택",
    "number": 10828,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER4,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STACK
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/10828"
      }
    ]
  },
  {
    "cote_id": "_0tsqetw",
    "name": "큐",
    "number": 10845,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER4,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.QUEUE
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/10845"
      }
    ]
  },
  {
    "cote_id": "_8ns6653",
    "name": "덱",
    "number": 10866,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER4,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.DEQUE,
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/10866"
      }
    ]
  },
  {
    "cote_id": "_hetqhyr",
    "name": "요세푸스 문제 0",
    "number": 11866,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER4,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION,
      DataStructure.QUEUE
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/11866"
      }
    ]
  },
  {
    "cote_id": "_626bdbe",
    "name": "에디터",
    "number": 1406,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER3,
    "language": [
      Language.PYTHON,
    ],
    "topic": [
      DataStructure.LINKED_LIST,
      DataStructure.STACK
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/3/1406"
      }
    ]
  },
  {
    "cote_id": "_feqb35y",
    "name": "수리공 항승",
    "number": 1449,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER3,
    "language": [
      Language.PYTHON,
    ],
    "topic": [
      Algorithms.GREEDY,
      Algorithms.SORTING
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/3/1449"
      }
    ]
  },
  {
    "cote_id": "_lhpyfky",
    "name": "스택 수열",
    "number": 1874,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER3,
    "language": [
      Language.PYTHON,
    ],
    "topic": [
      DataStructure.STACK
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/3/1874"
      }
    ]
  },
  {
    "cote_id": "_ljn3u9v",
    "name": "사탕 게임",
    "number": 3085,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER3,
    "language": [
      Language.PYTHON,
    ],
    "topic": [
      Algorithms.IMPLEMENTATION,
      Algorithms.BRUTEFORCE
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/3/3085"
      }
    ]
  },
  {
    "cote_id": "_g5nyz9f",
    "name": "구간 합 구하기 4",
    "number": 11659,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER3,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.CUMULATIVE_SUM
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/3/11659"
      }
    ]
  },
  {
    "cote_id": "_unb693k",
    "name": "단어 뒤집기 2",
    "number": 17413,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER3,
    "language": [
      Language.PYTHON, Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION,
      DataStructure.STRING,
      DataStructure.STACK
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/3/17413"
      }
    ]
  },
  {
    "cote_id": "_m5w5w45",
    "name": "회의실 배정",
    "number": 1931,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER2,
    "language": [
      Language.PYTHON,
    ],
    "topic": [
      Algorithms.GREEDY,
      Algorithms.SORTING
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/2/1931"
      }
    ]
  },
  {
    "cote_id": "_hwsguil",
    "name": "최대 힙",
    "number": 11279,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER2,
    "language": [
      Language.PYTHON,
    ],
    "topic": [
      DataStructure.PRIORITY_QUEUE,
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/2/11279"
      }
    ]
  },
  {
    "cote_id": "_o74yxhc",
    "name": "연결 요소의 개수",
    "number": 11724,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER2,
    "language": [
      Language.PYTHON,
    ],
    "topic": [
      DataStructure.GRAPH,
      Algorithms.BFS,
      Algorithms.DFS
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/2/11724"
      }
    ]
  },
  {
    "cote_id": "_i6kfia3",
    "name": "최소 힙",
    "number": 1927,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER1,
    "language": [
      Language.PYTHON,
    ],
    "topic": [
      DataStructure.PRIORITY_QUEUE,
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/1/1927"
      }
    ]
  },
  {
    "cote_id": "_5bs0hgp",
    "name": "미로 탐색",
    "number": 2178,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER1,
    "language": [
      Language.PYTHON,
    ],
    "topic": [
      DataStructure.GRAPH,
      Algorithms.BFS,
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/1/2178"
      }
    ]
  },
  {
    "cote_id": "_rfz7ibx",
    "name": "절대값 힙",
    "number": 11286,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER1,
    "language": [
      Language.PYTHON,
    ],
    "topic": [
      DataStructure.PRIORITY_QUEUE,
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/1/11286"
      }
    ]
  },
  {
    "cote_id": "_ozilgei",
    "name": "오큰수",
    "number": 17298,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.GOLD4,
    "language": [
      Language.PYTHON,
    ],
    "topic": [
      DataStructure.STACK
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/3_Gold/4/17298"
      }
    ]
  },
  {
    "cote_id": "_bcz365r",
    "name": "셀프 넘버",
    "number": 4673,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER5,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.MATH,
      Algorithms.IMPLEMENTATION,
      Algorithms.BRUTEFORCE
    ],
    "url": [
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/5/4673"
      }
    ]
  },
  {
    "cote_id": "_pag9dc2",
    "name": "수 찾기",
    "number": 1920,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER4,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.BINARY_SEARCH
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/90"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/1920"
      }
    ]
  },
  {
    "cote_id": "_coi5mln",
    "name": "제로",
    "number": 10773,
    "platform": CodingTestPlatform.BOJ,
    "difficulty": BOJLevel.SILVER4,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      Algorithms.IMPLEMENTATION,
      DataStructure.STACK
    ],
    "url": [
      {
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.com/89"
      },
      {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/BOJ/2_Silver/4/10773"
      }
    ]
  },
  {
    "cote_id": "_qloepyo",
    "name": "다트 게임",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "company": Company.KAKAO,
    "language": [
      Language.JAVASCRIPT
    ],
    "topic": [
      DataStructure.STRING,
    ],
    "url": [
      {
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.com/93"
      }, {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%8B%A4%ED%8A%B8%EA%B2%8C%EC%9E%84"
      }
    ]
  },
  { 
      "cote_id": "_zmgvocc",
      "name": "신고 결과 받기",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL1,        
      "company": Company.KAKAO,
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.IMPLEMENTATION],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.com/92"
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%8B%A0%EA%B3%A0%EA%B2%B0%EA%B3%BC%EB%B0%9B%EA%B8%B0"    
      }]
    },
    { 
      "cote_id": "_9repycu",
      "name": "비밀 지도",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL1,        
      "company": Company.KAKAO,
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.BIT_MANIPULATION],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.com/94"
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%B9%84%EB%B0%80%EC%A7%80%EB%8F%84"    
      }]
    },
    { 
      "cote_id": "_8hw51mj",
      "name": "메뉴 리뉴얼",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL2,        
      "company": Company.KAKAO,
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.BRUTEFORCE],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.com/95"
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level2/%EB%A9%94%EB%89%B4%EB%A6%AC%EB%89%B4%EC%96%BC"    
      }]
    },
    { 
      "cote_id": "_l5p7e84",
      "name": "방금그곡",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL2,        
      "company": Company.KAKAO,
      "language": [Language.JAVASCRIPT],
      "topic": [DataStructure.STRING, Algorithms.IMPLEMENTATION],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.tistory.com/96"
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level2/%EB%B0%A9%EA%B8%88%EA%B7%B8%EA%B3%A1"    
      }]
    },
    { 
      "cote_id": "_n6owklo",
      "name": "재귀 함수",
      "platform": EducationPlatform.INFLEARN,
      "lecture": InflearnLecture.JAVASCRIPT_ALGORITHM_PROBLEM_SOLVING,
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.RECURSION],
      "url": [{
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/EducationPlatform/Inflearn/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98_%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/8_%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98_%EC%99%84%EC%A0%84%ED%83%90%EC%83%89_DFS/%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98"    
      }]
    },
    { 
      "cote_id": "_3bgpj0w",
      "name": "문자열을 정수로 바꾸기",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL1,        
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.IMPLEMENTATION],
      "url": [{
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84%EC%A0%95%EC%88%98%EB%A1%9C%EB%B0%94%EA%BE%B8%EA%B8%B0"    
      }]
    },
    { 
      "cote_id": "_noishoh",
      "name": "더 맵게",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL2,        
      "language": [Language.PYTHON],
      "topic": [DataStructure.HEAP],
      "url": [{
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level2/%EB%8D%94%EB%A7%B5%EA%B2%8C"    
      }]
    },
    { 
      "cote_id": "_r7jfam5",
      "name": "전화번호 목록",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL2,        
      "language": [Language.PYTHON],
      "topic": [DataStructure.HASH],
      "url": [{
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8%EB%AA%A9%EB%A1%9D"    
      }]
    },
    { 
      "cote_id": "_oe17hrv",
      "name": "주식가격",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL2,        
      "language": [Language.PYTHON],
      "topic": [DataStructure.QUEUE],
      "url": [{
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%A3%BC%EC%8B%9D%EA%B0%80%EA%B2%A9"    
      }]
    },
    { 
      "cote_id": "_6fps9cx",
      "name": "이진수 출력",
      "platform": EducationPlatform.INFLEARN,
      "lecture": InflearnLecture.JAVASCRIPT_ALGORITHM_PROBLEM_SOLVING,
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.RECURSION, Algorithms.DFS],
      "url": [{
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/EducationPlatform/Inflearn/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98_%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/8_%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98_%EC%99%84%EC%A0%84%ED%83%90%EC%83%89_DFS/%EC%9D%B4%EC%A7%84%EC%88%98%EC%B6%9C%EB%A0%A5"    
      }]
    },
  {
      "cote_id": "_gxx3emk",
      "name": "크레인 인형뽑기 게임",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL1,
      "company": Company.KAKAO,
      "language": [Language.JAVASCRIPT],
      "topic": [DataStructure.STACK],
      "url": [{
        "name": URLName.BLOG,
        "icon": URLIcon.BLOG,
        "link": "https://philosopherprogrammer.tistory.com/97"
      }, {
        "name": URLName.CODE,
        "icon": URLIcon.CODE,
        "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%ED%81%AC%EB%A0%88%EC%9D%B8%EC%9D%B8%ED%98%95%EB%BD%91%EA%B8%B0%EA%B2%8C%EC%9E%84"
    }]
  },
  { 
      "cote_id": "_qh7nz7f",
      "name": "키패드 누르기",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL1,        
      "company": Company.KAKAO,
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.BFS, DataStructure.GRAPH],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.com/98"
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%ED%82%A4%ED%8C%A8%EB%93%9C%EB%88%84%EB%A5%B4%EA%B8%B0"    
      }]
    },
  {
    "cote_id": "_bwqq6th",
    "name": "신규 아이디 추천",
    "platform": CodingTestPlatform.PROGRAMMERS,
    "difficulty": ProgrammersLevel.LEVEL1,
    "company": Company.KAKAO,
    "language": [Language.JAVASCRIPT],
    "topic": [DataStructure.STRING],
    "url": [{
      "name": URLName.BLOG,
      "icon": URLIcon.BLOG,
      "link": "https://philosopherprogrammer.com/99"
    }, {
      "name": URLName.CODE,
      "icon": URLIcon.CODE,
      "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%8B%A0%EA%B7%9C%EC%95%84%EC%9D%B4%EB%94%94%EC%B6%94%EC%B2%9C"
    }]
  },
  { 
      "cote_id": "_u25qt9l",
      "name": "뉴스 클러스터링",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL2,       
      "company": Company.KAKAO,
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.IMPLEMENTATION],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.com/100"
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level2/%EB%89%B4%EC%8A%A4%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EB%A7%81"
      }]
    },
    { 
      "cote_id": "_jkqo9c9",
      "name": "괄호 변환",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL2,
      "company": Company.KAKAO,
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.RECURSION, Algorithms.IMPLEMENTATION],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.com/101"
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level2/%EA%B4%84%ED%98%B8%EB%B3%80%ED%99%98"
      }]
    },
    { 
      "cote_id": "_w978h5y",
      "name": "캐시",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL2,
      "company": Company.KAKAO,
      "language": [Language.JAVASCRIPT],
      "topic": [DataStructure.QUEUE],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.com/102"
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level2/%EC%BA%90%EC%8B%9C"
      }]
    },
    { 
      "cote_id": "_gwjquvn",
      "name": "피보나치 수",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL2,
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.MATH, DataStructure.ARRAY],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.com/103"
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level2/%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98%EC%88%98"
      }]
    },
    { 
      "cote_id": "_9w2iq37",
      "name": "이상한 문자 만들기",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL1,
      "language": [Language.JAVASCRIPT],
      "topic": [DataStructure.STRING],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.com/104"
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%9D%B4%EC%83%81%ED%95%9C%EB%AC%B8%EC%9E%90%EB%A7%8C%EB%93%A4%EA%B8%B0"
      }]
    },
    { 
      "cote_id": "_zo7bmsi",
      "name": "콜라츠 추측",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL1,
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.IMPLEMENTATION, Algorithms.MATH],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": "https://philosopherprogrammer.com/105"
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%BD%9C%EB%9D%BC%EC%B8%A0%EC%B6%94%EC%B8%A1"
      }]
    },
    { 
      "cote_id": "_27s6916",
      "name": "자릿수 더하기",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL1,
      "language": [Language.JAVASCRIPT],
      "topic": [Algorithms.IMPLEMENTATION],
      "url": [{
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EC%9E%90%EB%A6%BF%EC%88%98%EB%8D%94%ED%95%98%EA%B8%B0"
      }]
    },
    { 
      "cote_id": "_w34rd5o",
      "name": "문자열내 p와 y의 개수",
      "platform": CodingTestPlatform.PROGRAMMERS,
      "difficulty": ProgrammersLevel.LEVEL1,
      "language": [Language.JAVASCRIPT],
      "topic": [],
      "url": [{
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": "https://github.com/PhilosopherProgrammer/Coding-Test-Practice/tree/main/CodingTestPlatform/Programmers/Level1/%EB%AC%B8%EC%9E%90%EC%97%B4%EB%82%B4p%EC%99%80y%EC%9D%98%EA%B0%9C%EC%88%98"
      }]
    },
]

/**
    { 
      "cote_id": "",
      "name": "",
      "platform": ,
      "difficulty": ,
      "company": ,
      "lecture": ,
      "language": [Language.JAVASCRIPT],
      "topic": [],
      "url": [{
          "name": URLName.BLOG,
          "icon": URLIcon.BLOG,
          "link": ""
      }, {
          "name": URLName.CODE,
          "icon": URLIcon.CODE,
          "link": ""
      }]
    },
 */