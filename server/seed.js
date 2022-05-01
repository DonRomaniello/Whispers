const {db, User} = require('../server/database')


const seed = async () => {

  await db.sync({force: true})

  const example = await User.create({token: {example: "really"}})

  console.log(example)

}

seed();
