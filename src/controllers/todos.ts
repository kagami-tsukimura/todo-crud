import { RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(uuidv4(), text);

  TODOS.push(newTodo);

  res.status(201).json({
    message: 'Created a ToDo.',
    createdTodo: { id: newTodo.id, text: newTodo.text },
  });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updateText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('The target TODO was not found.');
  }

  TODOS[todoIndex] = new Todo(todoId, updateText);

  res.json({ message: 'Has been updated.', updateTodo: TODOS[todoIndex] });
};

export const detleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('The target TODO was not found.');
  }

  TODOS.splice(todoIndex, 1);

  res.json({ message: 'TODO has been deleted.' });
};
