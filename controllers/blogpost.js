const blogPostModel = require('../models/blogpost');

const index = (request , response) =>{
    const blogpost = blogPostModel.index();
    return blogpost
}
const show = (request, response) => {
    const blogpost = blogPostModel.show(request.params.blogpost_id);
    return blogpost
}
const create = (request, response) => {
    const blogpost = blogPostModel.create(request.body);
    return blogpost
}
const update = (request, response) => {
    const blogpost = blogPostModel.update(request.params.blogpost_id, request.body);
    return blogpost
}
const destroy = (request, response) => {
    const blogpost = blogPostModel.destroy(request.params.blogpost_id);
    return blogpost
}
module.exports = {
    index,
    show,
    create,
    update,
    destroy
}