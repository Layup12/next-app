export enum HeadConfigEnum {
    HOME = "/",
    ABOUT = "/about",
    USERS = "/users",
    USER = "/users/[id]",
    POSTS = "/posts",
    POST = "/posts/[id]",
}

export const headConfig = {
    [HeadConfigEnum.HOME]: {
        title: "Home",
        description: "home page",
    },
    [HeadConfigEnum.ABOUT]: {
        title: "About",
        description: "about",
    },
    [HeadConfigEnum.USERS]: {
        title: "Users",
        description: "users",
    },
    [HeadConfigEnum.USER]: {
        title: "User",
        description: "user",
    },
    [HeadConfigEnum.POSTS]: {
        title: "Posts",
        description: "posts",
    },
    [HeadConfigEnum.POST]: {
        title: "Post",
        description: "post",
    },
    default: {
        title: "Next App",
        description: "next app",
    },
};
