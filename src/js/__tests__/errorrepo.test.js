import ErrorRepository from "../erorrepo";
test('Get error', () => {
    const repo = new ErrorRepository();
    const answer = repo.translate(404);
    expect(answer).toBe('Not Found')
})
test('Get unknown error', () => {
    const repo = new ErrorRepository();
    const answer = repo.translate(1000000);
    expect(answer).toBe('Unknown error')
})