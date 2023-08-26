import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
	return (
		<Menu style={{ marginTop: "1rem" }}>
			<Link route="/">
				<a class="item">CorwdCoin</a>
			</Link>
			<Menu.Menu position="right">
				<Link route="/">
					<a class="item">Campaigns</a>
				</Link>
				<Link route="/campaigns/new">
					<a class="item">+</a>
				</Link>
			</Menu.Menu>
		</Menu>
	);
};

export default Header;
