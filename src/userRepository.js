
class UserRepository {

  myProp = 42;

  fetchUsers() {
    return new Promise(resolve => {
      resolve(
        [
          {id: 1, name: 'Homer Simpson'},
          {id: 2, name: 'Foo Bar'}
        ]);
    });
  }
}