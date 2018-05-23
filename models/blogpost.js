const fs = require('fs');
const path = require('path');
const uuid = require('uuid/v1');
const blogpostPath = path.join(__dirname, '..', 'data', 'blogpost.json');

const index = () => {
    const blogpostJSON = fs.readFileSync(blogpostPath, 'utf-8');
    const blogposts = JSON.parse(blogpostJSON);
    return blogposts
}

const show = blogpost_id => {
    const blogpostJSON = fs.readFileSync(blogpostPath, 'utf-8');
    const blogposts = JSON.parse(blogpostJSON);
    const blogpost = blogposts.find(blogpost => blogpost.id === blogpost_id);
    return blogpost
}

const create = ({
    title,
    content
}) => {
    const blogpostJSON = fs.readFileSync(blogpostPath, 'utf-8');
    const blogposts = JSON.parse(blogpostJSON);
    const newBlogpost = {
        id: uuid(),
        title,
        content
    };
    blogposts.push(newBlogpost);
    const allBlogpostJSON = JSON.stringify(blogposts)
    fs.writeFileSync(blogpostPath, allBlogpostJSON)
    return newBlogpost
}

const destroy = blogpost_id => {
    let deleteObj;
    const blogpostJSON = fs.readFileSync(blogpostPath, 'utf-8');
    const blogposts = JSON.parse(blogpostJSON);
    const destroyBlogpost = blogposts.filter(blogpost => {
        if (blogpost.id === blogpost_id) {
            deleteObj = blogpost;
            return false;
        } else {
            return true;
        }
    });
    const deleteBlogpostJSON = JSON.stringify(destroyBlogpost);
    fs.writeFileSync(blogpostPath, deleteBlogpostJSON)
    return destroyBlogpost
}

const update = (blogpost_id , data)=>{
        const blogpostJSON = fs.readFileSync(blogpostPath, 'utf-8');
        const blogposts = JSON.parse(blogpostJSON);
        const updateBlogposts = blogposts.map(blogpost => {
            if(blogpost.id === blogpost_id){
                const updateBlogpost = {...blogpost, ...data}
                return updateBlogpost
            }else {
                return blogpost
            }
        })
            const updatedBlogpostJSON = JSON.stringify(updateBlogposts);
            fs.writeFileSync(blogpostPath, updatedBlogpostJSON)
            return updateBlogpost
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}