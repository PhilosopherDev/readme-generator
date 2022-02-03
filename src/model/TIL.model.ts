import { URLType } from "./Common.model";

export interface TILModel {
    til_id: string;
    name: string;
    description?: string;
    date: string;
    category: Category;
    foreign_key?: string;
    url: Array<URLType>;  // 추후 foreign key 로 일원화
}

export enum Category {
    CODING_TEST = "coding_test",
    SIDE_PROJECT = "side_project",
    CHALLENGE = "challenge",
    CLONE_CODING = "clone_coding",
    FOUNDATIONAL_KNOWLEDGE = "foundational_knowledge"
}