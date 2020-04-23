import getRepos from "./repos-service";


test("test api call", async () => {
    return await getRepos()
    .then(data => 
        expect(data).toBeDefined()
    )
});