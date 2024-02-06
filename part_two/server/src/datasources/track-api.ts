const { RESTDataSource } = require('@apollo/datasource-rest');

class TrackAPI extends RESTDataSource {
    baseUrl: string = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getTraksForHome() {
        return this.get("tracks");
    }

    getAuthor(authorId: string) {
        return this.get(`author/${authorId}`);
    }
}

export default TrackAPI;
