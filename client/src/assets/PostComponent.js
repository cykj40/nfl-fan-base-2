class PostComponent {
    constructor(author, content, timestamp, reactions) {
        this.author = author;
        this.content = content;
        this.timestamp = timestamp;
        this.reactions = reactions;
    }

    display() {
        console.log(`Author: ${this.author}`);
        console.log(`Content: ${this.content}`);
        console.log(`Timestamp: ${this.timestamp}`);
        console.log(`Reactions: ${this.reactions}`);
    }

    comment() {
        // Add logic to handle commenting on the post
    }

    share() {
        // Add logic to handle sharing the post
    }

    report() {
        // Add logic to handle reporting the post
    }
}

// Usage example:
const post = new PostComponent("John Doe", "Check out this awesome photo!", "2022-01-01 12:00:00", ["👍", "❤️"]);
post.display();
post.comment();
post.share();
post.report();
