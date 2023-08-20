import "semantic-ui-css/semantic.min.css";
import React from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";

const CampaignIndex = ({ campaigns }) => {
	const renderCampaign = () => {
		if (!campaigns) return;
		const items = campaigns.map((address) => {
			return {
				header: address,
				description: <a>View Campaign</a>,
				fluid: true,
			};
		});

		return <Card.Group items={items} />;
	};

	return (
		<Layout>
			<Button
				floated="right"
				content="Create Campaign"
				icon="add circle"
				primary
			/>
			{renderCampaign()}
		</Layout>
	);
};

CampaignIndex.getInitialProps = async (ctx) => {
	const campaigns = await factory.methods.getDeployedCampaigns().call();
	return { campaigns };
};

export default CampaignIndex;
