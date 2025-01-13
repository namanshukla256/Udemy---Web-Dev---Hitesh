function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data fetched")
        }, 2000)
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data fetched");
        }, 3000)
    });
}

async function getBlogData(){
    try {
        console.log("Fetching blog data...");
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();
        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData(),
        ]);

        console.log(postData);
        console.log(commentData);
        console.log("fetch complete")
    } catch (error) {
        console.log("Error fetching blog data", error);
    }
}

getBlogData();


// output
// Fetching blog data...
// Post Data fetched
// Comment Data fetched
// fetch complete
