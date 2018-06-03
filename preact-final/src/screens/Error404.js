import {h} from "preact";

const Error404 = () => {
    
    document.title = "Error";

    return (
        <div>
            <h1 class="lesser-heading">ERROR 404</h1>
            <hr class="lesser-line"/>
        </div>
    )
}

export default Error404;