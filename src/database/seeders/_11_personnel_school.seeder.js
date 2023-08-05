module.exports = {
  up: async (queryInterface) => {
    seedData = [
      {
        id: "11140938-0aaf-4b79-87d0-50781132c001",
        school_id: "e26263e9-cd10-4bd8-b040-ff550a1d1ba1",
        personnel_id: "18140938-0aaf-4b79-87d0-50781132c003",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "11140938-0aaf-4b79-87d0-50781132c002",
        school_id: "e26263e9-cd10-4bd8-b040-ff550a1d1ba2",
        personnel_id: "18140938-0aaf-4b79-87d0-50781132c003",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "11140938-0aaf-4b79-87d0-50781132c003",
        school_id: "e26263e9-cd10-4bd8-b040-ff550a1d1ba3",
        personnel_id: "18140938-0aaf-4b79-87d0-50781132c003",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "11140938-0aaf-4b79-87d0-50781132c004",
        school_id: "e26263e9-cd10-4bd8-b040-ff550a1d1ba4",
        personnel_id: "18140938-0aaf-4b79-87d0-50781132c004",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "11140938-0aaf-4b79-87d0-50781132c005",
        school_id: "e26263e9-cd10-4bd8-b040-ff550a1d1ba5",
        personnel_id: "18140938-0aaf-4b79-87d0-50781132c004",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "11140938-0aaf-4b79-87d0-50781132c006",
        school_id: "e26263e9-cd10-4bd8-b040-ff550a1d1ba6",
        personnel_id: "18140938-0aaf-4b79-87d0-50781132c004",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "11140938-0aaf-4b79-87d0-50781132c007",
        school_id: "e26263e9-cd10-4bd8-b040-ff550a1d1ba7",
        personnel_id: "18140938-0aaf-4b79-87d0-50781132c005",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "11140938-0aaf-4b79-87d0-50781132c008",
        school_id: "e26263e9-cd10-4bd8-b040-ff550a1d1ba8",
        personnel_id: "18140938-0aaf-4b79-87d0-50781132c005",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "11140938-0aaf-4b79-87d0-50781132c009",
        school_id: "e26263e9-cd10-4bd8-b040-ff550a1d1ba9",
        personnel_id: "18140938-0aaf-4b79-87d0-50781132c005",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "11140938-0aaf-4b79-87d0-50781132c010",
        school_id: "e26263e9-cd10-4bd8-b040-ff550a1d2ba0",
        personnel_id: "18140938-0aaf-4b79-87d0-50781132c005",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert("personnel_school", seedData);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("personnel_school", {});
  },
};
