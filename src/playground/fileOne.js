import { OwnContext } from "../components/router/app";
import { useContext } from "react";

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