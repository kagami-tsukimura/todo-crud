# Serverside ToDo application

## Introduction

This application is a simple toDo application on the server side.
Start the server.

```console
npm start
```

## Execution

Execute the post request.
The http file of the sample is stored in `http_requests`.
If `Rest Client` is installed in vscode extension, you can easily execute it with Send Request.
In addition, if you use `Postman`, you can execute it on the browser.
However, there is no guarantee because the operation confirmation is performed with `Rest Client`.
The following describes how to use a simple HTTP file.

## How to use

### Post request

Enter any character string in "Text" of `post.http`.

### GET request

`get.http` can be used without change.

### Patch request

Replace the uuid of the `patch.http` with the answered createdTodo id.

### Delete request

Replace the uuid of the `delete.http` with the answered createdTodo id.
