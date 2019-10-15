const express = require('express')

const server = express()

server.use(express.json())

let count = 0

server.use((req, res, next) => {
  console.log(count += 1)

  next()
})

function checkProjectExists(req, res, next) {

  projects.filter(p => {
    if(p.id == req.params.id) {
      req.id = p.id
    }
  }) 

  if(!req.id) {
    return res.status(400).json({ error: "Id does note exists"})
  }

  return next()
}

const projects = []

server.get('/projects', (req, res) => {
  res.json(projects)
})

server.post('/projects', (req, res) => {
  const { id, title, task } = req.body 

  const new_project = {id, title, task}

  projects.push(new_project)

  return res.json(projects)
})

server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { title } = req.body

  projects.filter(project => {
    if(project.id == req.id) {
      project.title = title
    }
  })

  return res.json(projects)
})

server.delete('/projects/:id', checkProjectExists, (req, res) => {

  projects.filter(project => {
    if(project.id == req.id) {
      projects.splice(projects.indexOf(project), 1)
    }
  })

  return res.json(projects)
})

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { title } = req.body

  projects.filter(project => {
    if(project.id == req.id) {
      project.task.push(title)
    }
  })

  return res.json(projects)
})

server.listen(3000)