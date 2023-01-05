import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	const login = async (inputs) => {
		const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
			withCredentials: true, // used for cors
		})

		setCurrentUser(res.data)
	}

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser)) // stringify is used because what are we gonna store is object but since localstorage cannot store objects we need to make it a string and later on parse it
	}, [currentUser])

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				login
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}