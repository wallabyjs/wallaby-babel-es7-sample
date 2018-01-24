
describe('Wallaby.js ES7 support via Babel', () => {

  var userRepo = new UserRepository();

  it('should support class props', () => {
    expect(userRepo.myProp).toBe(42);
  });

  it('should support async/await', async done => {
    var users = await userRepo.fetchUsers();
    expect(users/*?*/.length).toBe(2);
    done();
  });

  it('should support object spread', () => {
    let { x, y, ...z } = {x: 1, y: 2, a: 3, b: 4};
    expect(z).toEqual({a: 3, b: 4});
  });

});
