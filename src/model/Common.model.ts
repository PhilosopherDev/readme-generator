export type URLType = {
    name: URLName;
    icon: URLIcon;
    link: string;
}

export enum URLName {
    GITHUB = "Github",
    CODE = "Code",
    SOLUTION = "Solution",
    LIVE_SITE = "Live Site",
    COMMIT = "Commit",
    BLOG = "Blog",
    CERTIFICATION = "Certification"
}

export enum URLIcon {
    GITHUB = ":file_cabinet:",
    CODE = ":computer:",
    SOLUTION = ":crystal_ball:",
    LIVE_SITE = ":globe_with_meridians:",
    COMMIT = ":dart:",
    BLOG = ":pencil2:",
    CERTIFICATION = ":1st_place_medal:"
}