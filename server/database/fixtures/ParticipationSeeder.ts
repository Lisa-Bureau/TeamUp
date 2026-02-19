import AbstractSeeder from "./AbstractSeeder";
import ActivitySeeder from "./ActivitySeeder";
import UserSeeder from "./UserSeeder";

class ParticipationSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "participation",
      truncate: true,
      dependencies: [UserSeeder, ActivitySeeder],
    });
  }

  run() {
    const statusArray = ["request", "inviting", "accepted", "refused"];

    for (let i = 0; i < 50; i += 1) {
      const randomActivity = Math.floor(Math.random() * 22);

      const fakeParticipation = {
        user_id: this.getRef(`user_${i}`).insertId,
        activity_id: this.getRef(`activity_${randomActivity}`).insertId,
        status: statusArray[Math.floor(statusArray.length * Math.random())],
        created_at: this.faker.date.soon(),
        updated_at: this.faker.date.future(),
      };

      this.insert(fakeParticipation);
    }
  }
}

export default ParticipationSeeder;
