const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    } 
} // function to handle async errors. Also can use try-catch

export {asyncHandler};