import { createContext } from "react";

const UserContext = createContext({
    user: "Default user",
})

export default UserContext;