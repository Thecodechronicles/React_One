import { useContext } from "react";
import { OwnContext } from "../components/router/app";

export const FileTwo = () => {
    const message = useContext(OwnContext);
    console.log('message', message);
    return (
        <div>
            {message}
        </div>
    )
}