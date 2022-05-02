const { db, Offer, Answer } = require('./database')


const seed = async () => {

  await db.sync({force: true})

  const offerExample = await Offer.create({token: {example: "this is an offer"}})

  const answerExample = await Answer.create({token: {example: "this is an answer"}})

}

seed();
