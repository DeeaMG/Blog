const PATH = "./data.json";
const fs = require("fs");

class Post {
    get() {
        return this.readData();
    }

    getIndividualBlog(postId) {
        /* Get One Blog Post */
        const posts = this.readData();
        return posts.find((post) => post.id == postId);
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
