import AbstractSeeder from "./AbstractSeeder";
import UserSeeder from "./UserSeeder";

class ActivitySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "activity", truncate: true, dependencies: [UserSeeder] });
  }

  run() {
    const levels = ["beginner", "amateur", "advanced", "all"];
    const city = [
      "Paris",
      "Bordeaux",
      "Lille",
      "Lyon",
      "Marseille",
      "Toulouse",
      "Strasbourg",
    ];

    for (let i = 0; i < 22; i += 1) {
      const randomUser = Math.floor(Math.random() * 10);
      const futureDate = this.faker.date.future();
      const hours = futureDate.getHours().toString().padStart(2, "0");
      const minutes = futureDate.getMinutes().toString().padStart(2, "0");
      const time = `${hours}:${minutes}`;

      const fakeActivity = {
        address: this.faker.location.streetAddress(),
        city: this.faker.helpers.arrayElement(city),
        description: this.faker.lorem.words(10),
        zip_code: this.faker.location.zipCode("#####"),
        playing_at: futureDate.toISOString().split("T")[0],
        playing_time: time,
        playing_duration: this.faker.number.int({ min: 20, max: 180 }),
        nb_spots: this.faker.number.int({ min: 1, max: 22 }),
        auto_validation: this.faker.datatype.boolean(),
        price: this.faker.datatype.boolean({ probability: 0.1 })
          ? this.faker.number.float({ min: 1, max: 30, fractionDigits: 2 })
          : this.faker.datatype.boolean({ probability: 0.2222 })
            ? this.faker.number.int({ min: 1, max: 30 })
            : 0,
        visibility: this.faker.datatype.boolean(),
        user_id: this.getRef(`user_${randomUser}`).insertId,
        sport_id: this.faker.number.int({ min: 1, max: 26 }),
        level: this.faker.helpers.arrayElement(levels),
        disabled: this.faker.datatype.boolean(),
        locker: this.faker.datatype.boolean(),
        shower: this.faker.datatype.boolean(),
        air_conditioning: this.faker.datatype.boolean(),
        toilet: this.faker.datatype.boolean(),
        refName: `activity_${i}`,
      };

      this.insert(fakeActivity);
    }
  }
}

export default ActivitySeeder;
