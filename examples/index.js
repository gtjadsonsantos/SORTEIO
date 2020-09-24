const serverNumber = [
  {
    draw_id: 1,
    participant_id: 7,
    draw_quota_id: 1,
    name: "Jadson dos Santos Silva",
    status: "sold",
    number: "000",
    value: 250,
  },
  {
    draw_id: 1,
    participant_id: 7,
    draw_quota_id: 1,
    name: "Jadson dos Santos Silva",
    status: "resevation",
    number: "001",
    value: 250,
  },
];

const localNumber = [
  {
    draw_quota_id: 1,
    number: "000",
    created_at: "2020-09-22T23:53:33.000Z",
    deleted_at: null,
  },
  {
    draw_quota_id: 2,
    number: "001",
    created_at: "2020-09-23T01:07:20.000Z",
    deleted_at: null,
  },
  {
    draw_quota_id: 3,
    number: "002",
    created_at: "2020-09-23T01:07:23.000Z",
    deleted_at: null,
  },
  {
    draw_quota_id: 4,
    number: "003",
    created_at: "2020-09-23T01:55:41.000Z",
    deleted_at: null,
  },
  {
    draw_quota_id: 5,
    number: "004",
    created_at: "2020-09-23T01:55:45.000Z",
    deleted_at: null,
  },
  {
    draw_quota_id: 6,
    number: "005",
    created_at: "2020-09-23T19:05:12.000Z",
    deleted_at: null,
  },
  {
    draw_quota_id: 7,
    number: "006",
    created_at: "2020-09-23T19:05:16.000Z",
    deleted_at: null,
  },
  {
    draw_quota_id: 8,
    number: "007",
    created_at: "2020-09-23T19:05:18.000Z",
    deleted_at: null,
  },
  {
    draw_quota_id: 9,
    number: "008",
    created_at: "2020-09-23T19:05:20.000Z",
    deleted_at: null,
  },
  {
    draw_quota_id: 10,
    number: "009",
    created_at: "2020-09-23T19:05:23.000Z",
    deleted_at: null,
  },
  {
    draw_quota_id: 11,
    number: "010",
    created_at: "2020-09-23T19:05:27.000Z",
    deleted_at: null,
  },
  {
    draw_quota_id: 12,
    number: "011",
    created_at: "2020-09-23T19:05:29.000Z",
    deleted_at: null,
  },
];
const render = localNumber.map((localItem) => {
  let response;

  serverNumber.map((serverItem) => {
    response =
      serverItem.number == localItem.number
        ? { ...serverItem }
        : {
            status: "free",
            number: localItem.number,
            draw_quota_id: localItem.draw_quota_id,
            draw_id: serverNumber[0].draw_id,
          };
  });

  return response;
});

console.log(render);
