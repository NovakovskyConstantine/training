import React, { useState } from 'react';

function App() {
	const [count, setCount] = useState(0)

	return React.createElement("div", { className: "container" }, [
		React.createElement("h1", { className: "font-bold", key: 1 }, `Количество нажатий на кнопку = ${count}`),
		React.createElement("button", {
			className: "py-2 px-4 border",
			key: 2,
			onClick: () => setCount(count + 1)
		}, "Нажми на меня")
	])
}