"use client"
const { createContext,  useState } = require("react");

export const AccountContext = createContext();

const AccountContextProvider = ({children,...props}) => {
    console.log(props);
    const [values, setValue] = useState({...props.values});

    const setUsername = (username) => {
        setValue(pre=>(
            {
                ...pre.user,
                meta: {
                    ...pre.meta,
                    name: username
                }
            }
        ))
    }

    return (
        <AccountContext.Provider value={{values,setUsername}}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider;