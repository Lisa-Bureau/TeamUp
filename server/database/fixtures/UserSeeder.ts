import AbstractSeeder from "./AbstractSeeder";

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 50; i += 1) {
      const fakeUser = {
        email: this.faker.internet.email(),
        username: this.faker.internet.username(),
        password: this.faker.internet.password(),
        firstname: this.faker.person.firstName(),
        lastname: this.faker.person.lastName(),
        born_at: this.faker.date.birthdate(),
        address: this.faker.location.streetAddress(),
        city: this.faker.location.city(),
        zip_code: this.faker.location.zipCode("#####"),
        phone: this.faker.string.numeric(10),
        picture: this.faker.image.personPortrait(),
        refName: `user_${i}`,
      };

      this.insert(fakeUser);
    }
  }
}

export default UserSeeder;
