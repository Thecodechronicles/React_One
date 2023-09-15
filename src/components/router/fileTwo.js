import { OwnContext } from "./app";
import { useContext } from "react";

export const FileTwo = () => {
    const message = useContext(OwnContext);
    console.log('message', message);
    return (
        <div>
            {message}
        </div>
    )
}