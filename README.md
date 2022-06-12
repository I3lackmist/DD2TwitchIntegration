# Concept
A Darkest Dungeon 2 chat engagement website. This application may have 3 layers of integration.

## Layer I - Team composition through chat
To start using the application, it needs a way to access the Twitch chat of a streamer. There are a couple proposed ways of achieving this:
1. The streamer provides the link to their stream, and the application starts observing the chat;
2. The streamer can log into the application using their Twitch account.

Having done the previous step, the streamer can start a lobby.
- If approach 1 was used, the lobby identifier is a randomly generated string of characters;
- If approach 2 was used, the lobby identifier is simply the streamer's Twitch handle.

The streamer has options to modify the conditions of the lobby, such as:
- Whether or not the raffle is timed;
- Whether or not the selection period is timed;
- Whether or not chat members may suggest the class they want to be assigned;
- Whether or not chat members may suggest the rank they want to be placed in;
- Optional - Selection period duration;
- Optional - Raffle duration.

Starting the lobby begins the raffle, during which chat members can participate in the raffle by sending a message in proper format.

The streamer sees the total number of raffle submissions and a list of participants is displayed to them.

When the raffle ends, 4+1 chat members get selected - respectively 4 to join the team of adventurers, and 1 to 'lead' the stagecoach.

From now, a 'selection period' starts. This is a period of time during which the designated chat members - let's call them the 'adventurers' and the 'stagecoach driver' from this point forward - get to influence their character/rank selections and the stagecoach.

During the selection period, the adventurers can specify their name, by default their Twitch handle (SFW names only, of course), the character they will play as and the rank in which they want to be placed.

In order to have a way to deal with class/rank collisions, the adventurers may provide 2 additional setups or modify any 3 of them.

The stagecoach drivers may choose the stagecoach name and the livery.

This is all done by sending messages in Twitch chat in proper format.

During the selection period, the streamer should stream the application view, which displays the current choice list and all the necessary instructions for the adventurers and stagecoach driver. They may also provide a link to the documentation to them, which is also displayed on the streamer's view.

The streamer can press a button to end the raffle and selection period at any moment. This ends the chat interaction.

The selected options are only a suggestion - there is no integration with the game itself to enforce these choices.

The following layers are opt-in features - this is the very base of the application.

# II - Team composition through the application

This layer requires that in layer I, the second approach for lobby creation was used, or that in the development cycle the application will be modified into using the second approach, or both.

Alike layer I, this layer also consists of a raffle, but instead of doing it through chat - Twitch viewers can log in to the application with their Twitch account.

From here, they can look up the existing lobbies in the raffle phase through a search bar. The viewers simply look up the streamer's name.

If the streamer started a lobby, the raffle should show up on the list, and the viewers can join it. After they joined, the raffle timer is displayed to them, and when it ends - the result of their participation.

The viewers who weren't chosen will be informed and redirected back to the lobby search view.

The viewers who were chosen are informed, and are presented with a selection screen, wherein they can choose all the things as in layer I, namely - the name, the class and the rank, with an option for specifying a list of selections of these things. They may also modify the list entries.

The adventurers may also select the skill-sets they desire, and which to upgrade.

The selection of skills and upgrades may also be toggled on/off in the lobby creation screen by the streamer.

Similar to layer I, these choices are all only suggestions from the adventurers.

Unlike layer I, the adventurer/stagecoach driver interaction doesn't end when the selection period ends. They may stay in the application to specify different skillsets, provided the streamer enabled this feature. The stagecoach driver may change the livery suggestion.

The adventurers and the stagecoach driver may vote for which region the embark upon.

# III - Darkest Dungeon 2 integration

This layer consists of a modification to the game. The specifications of this layer will be detailed at a later date, however the base concepts are:
- The adventurers may change their skillsets between battles;
- The adventurers may influence random barks;
- The adventurers may influence combat interactions;
- The stagecoach driver may change the livery at any time;
- The adventurers may influence their roadside combat attitude (whether or not they want to participate in the upcoming battles);
  - If an adventurer chains 'yes' combat decisions, they provide beneficial effects to battle start.
- The adventurers and the stagecoach driver may vote for upcoming regions.