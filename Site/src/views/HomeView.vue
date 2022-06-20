<template>
	<div class="home">
		<div class="home_card-row-heading">
			<h1>Tramatize your Twitch community</h1>
		</div>

		<div class="home_card-row">
			<img
				class="home_card-row_image home_card-row_card home_card-row_card_1"
				src="../assets/Relationship.jpg"
			/>
			<div class="home_card-row_card home_card-row_card_2">
				<div class="home_card-row_card_background"></div>
				<div class="home_card-row_card_text">
					<h2>Go through the 5 stages of grief as a community</h2>
					<p>
						<span>
							It is now possible to experience the moments of victory, defeat,
							stress and disappointment through a team effort.
						</span>
						<span>
							Allow your viewers to unite with the wretched mercenaries and
							embark with them upon the road to ruin.
						</span>
						<span>
							Start a lobby and choose your preferred level of Twitch
							integration.
						</span>
					</p>
				</div>
			</div>
		</div>

		<div class="home_card-row">
			<div class="home_card-row_card home_card-row_card_1">
				<div class="home_card-row_card_background"></div>
				<div class="home_card-row_card_text">
					<h3>Integration Level I</h3>
					<h5>Team composition</h5>
					<p>
						<span>
							This level allows your viewers to suggest the team composition.
						</span>
						<span>
							When you have logged in with Your Twitch account and started a
							lobby, a raffle starts.
						</span>
						<span>
							Your viewers may participate in it, and the winners get to suggest
							the names, composition and more - all done through simple commands
							in Your chat.
						</span>
					</p>
				</div>
			</div>
			<div class="home_card-row_card home_card-row_card_1">
				<div class="home_card-row_card_background"></div>
				<div class="home_card-row_card_text">
					<h3>Integration Level II</h3>
					<h5>Death Roulette</h5>
					<p>
						<span>
							This layer Includes all the level I features. However, instead of
							chat, the entire lobby happens here, on the site.
						</span>
						<span>
							The unlucky viewers who weren't chosen as the Heroes get to
							participate in a death roulette and and guess how each of the
							Heroes will die, accumulating points if they win.
						</span>
					</p>
				</div>
			</div>
			<div class="home_card-row_card home_card-row_card_1">
				<div class="home_card-row_card_background"></div>
				<div class="home_card-row_card_text">
					<h3>Integration Level III</h3>
					<h5>Game modification</h5>
					<p>
						<span>
							This level allows your viewers to suggest the team composition.
						</span>
						<span>
							When you have logged in with Your Twitch account and started a
							lobby, a raffle starts.
						</span>
						<span>
							Your viewers may participate in it, and the winners get to suggest
							the names, composition and more - all done through simple commands
							in Your chat.
						</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: column;

	padding: 0 5rem;

	&_card-row-heading {
		display: flex;
		justify-content: space-around;
		margin-bottom: 2rem;
	}

	&_card-row {
		margin: 1rem 5rem;
		display: flex;
		justify-content: space-around;

		&_image {
			max-height: 300px;
			border-radius: 1.5rem;
		}

		&_card {
			margin: 0 1rem;

			&_text {
				padding: 1rem;

				p {
					margin-top: 1rem;
					margin-left: 1rem;
				}

				h3,
				h5 {
					justify-content: center;
				}
			}

			&_background {
				width: 100%;
				height: 100%;
				opacity: 18%;
				position: absolute;
				border-radius: 1rem;
				background-image: linear-gradient(var(--accent), var(--key-gradient-0));
			}

			&_1 {
				flex-grow: 1;
			}

			&_2 {
				flex-grow: 2;
			}
		}
	}
}
</style>
