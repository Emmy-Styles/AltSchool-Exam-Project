import styled from 'styled-components';


export const Box = styled.div`
padding: 40px 30px;
background: lightseagreen;
position: relative;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 10px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;


@media (max-width: 420px) {
	padding-top: 20px;
}
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(300px, 1fr));
// grid-gap: 10px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 10px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: #fff;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #333;
margin-bottom: 20px;
font-weight: bold;
font-family: sans-serif;
`;
