const {getUser} = require('../user.ts');

test('test register new user', () => {
    const users = getUser();
    console.log(users);
})