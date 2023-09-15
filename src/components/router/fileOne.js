import { OwnContext } from "./app";
import { useContext } from "react";

export const FileOne = () => {
    const message = useContext(OwnContext);
    return (
        <div>
            {message}
        </div>
    )
}