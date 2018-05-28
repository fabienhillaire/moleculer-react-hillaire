#	Documentation API - Training
#### Base

-	http://trainings.nanoapp.io

#### Messenger
##### GET - /api/messenger/channel/:number-channel

```
Récupère la liste des messages
```

##### POST - /api/messenger/channel/:number-channel
Body :
* username : string
* message: string

```
Envoie un message sur un channel ciblé
```

#### Tasks Manager
##### GET - /api/tasks/todo/:id_todo

```
Récupère une tâche avec son id
```

##### GET - /api/tasks/todos

```
Récupère toutes les tâches
```

##### POST - /api/tasks/todos
Body : 
* name : string

```
Envoie une tâche avec un nom
```

##### PUT - /api/tasks/todo/:id_todo
Body : 
* name : string

```
Modifie le nom de la tâche
```


##### PATCH - /api/tasks/todo/:id_todo/toggle

```
Change le completed d'une tâche à l'inverse de son état
completed = true -> false
completed = false -> true
```

##### DELETE - /api/tasks/todo/:id_todo

```
Supprime une tâche si la tâche est completed
```
