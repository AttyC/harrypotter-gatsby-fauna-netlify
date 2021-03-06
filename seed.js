const fetch = require("isomorphic-fetch");
const { client, query } = require("./functions/graphql/db-connection");
const q = query;
const potterEndPoint = `https://www.potterapi.com/v1/characters/?key=${process.env.POTTER_KEY}`;

fetch(potterEndPoint)
  .then(res => res.json())
  .then(res => {
    console.log({ res });
    const characterArray = res.map((char, index) => ({
      _id: char._id,
      name: char.name,
      house: char.house,
      patronus: char.patronus,
      bloodStatus: char.blood,
      role: char.role,
      school: char.school,
      deathEater: char.deathEater,
      dumbledoresArmy: char.dumbledoresArmy,
      orderOfThePheonix: char.orderOfThePheonix,
      ministryOfMagic: char.ministryOfMagic,
      alias: char.alias,
      wand: char.wand,
      boggart: char.boggart,
      animagus: char.animagus
    }));

    client
      .query(
        q.Map(characterArray, q.Lambda("character", q.Create(q.Collection("Character"), { data: q.Var("character") })))
      )
      .then(console.log("Wrote Potter characters to FaunaDB"))
      .catch(err => console.log("Failed to add characters to FaunaDB", err));
  });