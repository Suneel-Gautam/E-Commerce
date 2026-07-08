const asyncHandler = (fnc) => async (req, res, next) => {
    return Promise.resolve(fnc(
        req, res, next
    )).catch((err) => next(err))

}

export { asyncHandler }