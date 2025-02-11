export type User = {
    id: number;
    name: string;
    role: string;
};

export const testUser = {
    id: 1,
    name: "John Doe",
    role: "admin"
}

export const findTestUser = () => {
    return testUser
}