import React from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

const CampaignIndex = ({ campaigns }) => {
	const renderCampaign = () => {
		if (!campaigns) return;
		const items = campaigns.map((address) => {
			return {
				header: address,
				description: (
					<Link route={`/campaigns/${address}`}>
						<a>View Campaign</a>
					</Link>
				),
				fluid: true,
			};
		});

		return <Card.Group items={items} />;
	};

	return (
		<Layout>
			<Link route="/campaigns/new">
				<a>
					<Button
						floated="right"
						content="Create Campaign"
						icon="add circle"
						primary
					/>
				</a>
			</Link>
			{renderCampaign()}
		</Layout>
	);
};

CampaignIndex.getInitialProps = async (ctx) => {
	const campaigns = await factory.methods.getDeployedCampaigns().call();

	return { campaigns };
};

export default CampaignIndex;
