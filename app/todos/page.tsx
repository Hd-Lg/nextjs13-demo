import React from "react";
import TodosList from "./TodosList";

type Props = {};

function page({}: Props) {
	return (
		<div>
			{/* @ts-ignore */}
			<TodosList />
		</div>
	);
}

export default page;
