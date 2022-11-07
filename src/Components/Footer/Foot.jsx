import React from "react";
import { BsTwitter, BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs"
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FootStyles";

const Foot = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Ulelu Emmanuel</FooterLink>
			<FooterLink href="#">AltSchool</FooterLink>
			<FooterLink href="#">Lagos</FooterLink>
			<FooterLink href="#">Nigeria</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				
				</span>
                <BsFacebook />
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				
                <BsInstagram />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				
                <BsTwitter />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				
                <BsYoutube />
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Foot;
