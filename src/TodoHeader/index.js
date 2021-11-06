import react from "react";
import './TodoHeader.css';

function TodoHeader( { children } )
{
    return (
        <header className="Todo-Header">
            {children}
        </header>
    );
}

export { TodoHeader };