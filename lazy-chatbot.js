const Lazy = require('lazy.ai');

(async () => {
     const lazy = new Lazy()

     // Learn ..
     // const a = await lazy.learn({ phrase: 'Halo', category: 'greetings' })
     // await lazy.learn({ phrase: 'hi', category: 'greetings' })
     // await lazy.learn({ phrase: 'Hello there!', category: 'greetings' })

     // Maybe add action ..
     // await lazy.addAction({ category: 'greetings', actions: 'http://localhost:3000/' })
     // Or add usual response ..
     // await lazy.addResponse({ category: 'greetings', response: 'Hi there!' })

     // Query.
     const as = await lazy.query({ phrase: "halo" })
     console.log(await lazy.selfTrain)

     // Helpers..
     // const jel = await lazy.getResponses({ category: 'greetings' })
     console.log(as)
     // await lazy.getCategories()
})()
