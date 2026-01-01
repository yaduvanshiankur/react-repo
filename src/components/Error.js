import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <>
            <div>Oops cmething went wrong</div>
            <p>{err.status}</p>
        </>
    )
}

export default Error;