import {blogData} from "./blog-data.js";

console.log(blogData)

function getBlogs(){
    let blogHtml = ``;

    blogData.forEach(blog=>{
        blogHtml +=`
        <div class="blog-card" id="blog-${blog.id}">
            <div class="blog-img">
                <img src="${blog.imgPic}">
            </div>
            <div>
                <h3>${blog.headingTitle}</h3>
                <p>${blog.desc}</p>
                <a href="${blog.blogLink}">
                    <button class="blog-btn">Read More</button>
                </a>
            </div>
        </div> 
        `
    })

    return blogHtml;
}

function render(){
    document.getElementById("blog").innerHTML = getBlogs();
}

render();