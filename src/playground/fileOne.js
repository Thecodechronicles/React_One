import { useContext } from "react";
import { OwnContext } from "../components/router/app";

export const FileOne = (props) => {
    const message = useContext(OwnContext);

    return (
        <div>
            {props.children}
            {message}
            {/* <OwnContext.Consumer>
                {(context) => context}
            </OwnContext.Consumer> */}
        </div>
    )
}