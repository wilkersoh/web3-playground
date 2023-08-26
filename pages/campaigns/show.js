import React from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card } from "semantic-ui-react";

const CampaignShow = (props) => {
	const renderCards = () => {
		const {
			minimumContribution,
			balance,
			requestsCount,
			approversCount,
			manager,
		} = props;
		const items = [
			{
				header: manager,
				meta: "Address of Manager",
				description:
					"The manger created this campaign and can create requests to withdraw money",
				style: {
					overflowWrap: "break-word",
				},
			},
		];

		return <Card.Group items={items} />;
	};

	return (
		<Layout>
			<h1>CampaignShow</h1>
			{renderCards()}
		</Layout>
	);
};

CampaignShow.getInitialProps = async (ctx) => {
	const address = ctx.query.address;
	const campaign = Campaign(address);

	const summary = await campaign.methods.getSummary().call();

	return {
		minimumContribution: summary[0],
		balance: summary[1],
		requestsCount: summary[2],
		approversCount: summary[3],
		manager: summary[4],
	};
};

export default CampaignShow;
