import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

const CampaignNew = () => {
	const [minimumContribution, setMinimumContribution] = useState();
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (event) => {
		const value = event.target.value;
		setMinimumContribution(value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		setErrorMessage("");
		try {
			const accounts = await web3.eth.getAccounts();
			await factory.methods.createCampaign(minimumContribution).send({
				from: accounts[0],
			});

			Router.pushRoute("/");
		} catch (error) {
			setErrorMessage(error.message);
		}
		setLoading(false);
	};

	return (
		<Layout>
			<h1>Create campaign</h1>
			<Form onSubmit={handleSubmit} error={!!errorMessage}>
				<Form.Field>
					<label>Minium Contribution</label>
					<Input
						label="wei"
						labelPosition="right"
						value={minimumContribution || ""}
						onChange={handleChange}
					/>
				</Form.Field>
				<Message error header="Oops!" content={errorMessage} />
				<Button primary loading={loading}>
					Create!
				</Button>
			</Form>
		</Layout>
	);
};

export default CampaignNew;
