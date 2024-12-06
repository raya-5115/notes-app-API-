const { addNoteHandler, getAllNotesHandler, getNotesbyIdHandler, editNoteByIdhadler, deleteNoteByIDHandler } = require('./handler.js');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesbyIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdhadler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIDHandler,
  },
];

module.exports = routes;