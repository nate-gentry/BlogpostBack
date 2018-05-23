const blogPostModel = require('../models/blogpost');

const index = (request , response) =>{
    const blogpost = blogPostModel.index();
    response.send(blogpost)
}
const show = (request, response) => {
    const blogpost = blogPostModel.show(request.params.blogpost_id);
    response.send(blogpost)
}
const create = (request, response) => {
    const blogpost = blogPostModel.create(request.body);
    response.send(blogpost)
}
const update = (request, response) => {
    const blogpost = blogPostModel.update(request.params.blogpost_id, request.body);
    response.send(blogpost)
}
const destroy = (request, response) => {
    const blogpost = blogPostModel.destroy(request.params.blogpost_id);
    response.send(blogpost)
}
module.exports = {
    index,
    show,
    create,
    update,
    destroy
}