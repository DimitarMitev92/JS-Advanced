class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { 'picture': 200, 'photo': 50, 'item': 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        if (this.possibleArticles.hasOwnProperty(articleModel.toLowerCase()) === false) {
            throw new Error(`This article model is not included in this gallery!`);
        }

        let currentArticle = this.listOfArticles.find(el => el.articleName);

        if (currentArticle) {
            if (currentArticle.articleModel === articleModel) {
                currentArticle.quantity += quantity;
            } else {
                this.listOfArticles.push({ articleModel: articleModel.toLowerCase(), articleName, quantity });
            }
        } else {
            this.listOfArticles.push({ articleModel: articleModel.toLowerCase(), articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.find(el => el.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let currentPoints = 50;
        if (personality === 'Vip') {
            currentPoints = 500;
        } else if (personality === 'Middle') {
            currentPoints = 250;
        }

        this.guests.push({ guestName, points: currentPoints, purchaseArticle: 0 });

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        if (this.listOfArticles.find(el => el.articleName === articleName) === undefined) {
            throw new Error(`This article is not found.`);
        } else {
            if (this.listOfArticles.find(el => el.articleName === articleName).articleModel !== articleModel) {
                throw new Error(`This article is not found.`);
            }
        }

        let currentArticle = this.listOfArticles.find(el => el.articleName === articleName);

        if (currentArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let currentGuest = this.guests.find(el => el.guestName === guestName);

        if (currentGuest === undefined) {
            return `This guest is not invited.`;
        }

        const neededPoints = this.possibleArticles[articleModel];

        if (neededPoints > currentGuest.points) {
            return `You need to more points to purchase the article.`;
        } else if (neededPoints <= currentGuest.points) {
            currentGuest.points -= neededPoints;
            currentArticle.quantity--;
            currentGuest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${neededPoints} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            let result = ['Articles information:'];
            this.listOfArticles.forEach(el => result.push(`${el.articleModel} - ${el.articleName} - ${el.quantity}`));
            return result.join('\n');
        } else if (criteria === 'guest') {
            let result = ['Guests information:'];
            this.guests.forEach(el => result.push(`${el.guestName} - ${el.purchaseArticle}`));
            return result.join('\n');
        }
    }
}