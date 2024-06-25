import { Poppins } from "next/font/google";
import "./globals.scss";
import favicon from "../../public/favicon.ico";
import Container from "@/components/Container";

const font = Poppins({
	weight: ["400", "500", "600"],
	subsets: ["latin"],
	style: ["normal"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<title>Dashboard</title>
				<link rel="icon" href={favicon.src} />
			</head>
			<body className={font.className}>
				<Container>{children}</Container>
			</body>
		</html>
	);
}
