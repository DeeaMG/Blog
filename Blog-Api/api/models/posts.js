const PATH = "./data.json";
const fs = require("fs");

class Post {
    get() {
        return this.readData();
    }

    getIndividualBlog() {
        /* Get One Blog Post */
    }

    add(newPost) {
        /* Add New Post */
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData() {
        let rawData = fs.readFileSync(PATH);
        return JSON.parse(rawData);
    }

    storeData(rawData) {
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;
