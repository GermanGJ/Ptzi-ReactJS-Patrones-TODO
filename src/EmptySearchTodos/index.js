import React from 'react';

function EmptySearchTodos( {searchText} ) {
  return (
    <div>
      <p>No hay resultados para la busqueda {searchText}</p>
    </div>
  );
}

export { EmptySearchTodos };