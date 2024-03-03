import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				alignItems: "center",
				justifyContent: "center",
				marginTop: "5rem",
			}}
		>
			<button onClick={() => navigate("/useState")}>useState</button>
			<button onClick={() => navigate("useImperativeHandle")}>
				useImperativeHandle
			</button>
		</div>
	);
};

export default HomePage;