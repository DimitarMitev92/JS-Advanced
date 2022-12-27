class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        const playersArr = [];
        for (let line of footballPlayers) {
            let [name, age, playerValue] = line.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            const currentPlayer = this.invitedPlayers.find(el => el.name === name);

            if (currentPlayer) {
                if (currentPlayer.playerValue < playerValue) {
                    currentPlayer.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
                playersArr.push(name);
            }
        }
        return `You successfully invite ${playersArr.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        const currentPlayer = this.invitedPlayers.find(el => el.name === name);

        if (currentPlayer) {
            if (currentPlayer.playerValue > playerOffer) {
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${currentPlayer.playerValue - playerOffer} million more are needed to sign the contract!`);
            } else {
                currentPlayer.playerValue = 'Bought';
                return `Congratulations! You sign a contract with ${currentPlayer.name} for ${playerOffer} million dollars.`;
            }
        } else {
            throw new Error(`${name} is not invited to the selection list!`);
        }
    }

    ageLimit(name, age) {
        const currentPlayer = this.invitedPlayers.find(el => el.name === name);
        if (currentPlayer) {
            if (currentPlayer.age < age) {
                if (age - currentPlayer.age < 5) {
                    return `${name} will sign a contract for ${age - currentPlayer.age} years with ${this.clubName} in ${this.country}!`;
                } else {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
                }
            } else {
                return `${name} is above age limit!`;
            }
        } else {
            throw new Error(`${name} is not invited to the selection list!`);
        }
    }

    transferWindowResult() {
        let result = [`Players list:`];

        const sortedArr = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

        sortedArr.forEach(player => result.push(`Player ${player.name}-${player.playerValue}`));

        return result.join('\n');
    }
}