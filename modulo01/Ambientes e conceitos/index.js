const express = require('express')

const server = express()

server.use(express.json())

let numberOfRequests = 0
const projects = []

function checkProjectExists(req, res, next) {

  const { id } = req.params

  const project = projects.find(p => p.id == id) 

  if(!project) {
    return res.status(400).json({ error: "Id does note exists"})
  }

  req.id = project.id

  return next()
}

function logRequests(req, res, next) {
  numberOfRequests++
  
  console.log(`Número de requisições: ${numberOfRequests}`)

  next()
}

server.use(logRequests)

server.get('/projects', (req, res) => {
  res.json(projects)
})

server.post('/projects', (req, res) => {
  const { id, title } = req.body 

  const new_project = {
    id, 
    title, 
    task: []
  }

  projects.push(new_project)

  return res.json(new_project)
})

server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { title } = req.body

  const project = projects.find(project => project.id == req.id)

  project.title = title

  return res.json(project)
})

server.delete('/projects/:id', checkProjectExists, (req, res) => {

  const projectIndex = projects.findIndex(p => p.id == req.id)

  projects.splice(projectIndex, 1)

  return res.json(projects)
})

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { title } = req.body

  const project = projects.find(project => project.id == req.id)

  project.task.push(title)

  return res.json(projects)
})

server.listen(3000)