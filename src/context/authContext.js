import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	const login = () => {
		// To do
		setCurrentUser({
			id: 1, 
			name: "John Doe", 
			profilePic: "https://www.health.qld.gov.au/__data/assets/image/0026/732284/2.-Alana-Social-Smoking.jpg"
		});
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