import express from 'express';
import controller from './controller';
export default express
  .Router()
  .post('/', controller.create)
  .put('/:id', controller.update)
  .get('/:id', controller.byId);
