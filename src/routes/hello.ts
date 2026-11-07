import { Hono } from 'hono'

const helloRoute = new Hono()

helloRoute.get('/hello', (c) => {
  return c.json({ Message: 'Hello Hono!' })
})

helloRoute.get('/echo', (c) => {
  const { message, name: allName } = c.req.query();

  return c.json({ Message: `${message} ${allName}!!!` })
})

export default helloRoute
