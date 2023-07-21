class ResponseHandler {
    constructor(res) {
        this.res = res;
    }

    sendResponse(statusCode, data) {
        return this.res.status(statusCode).json(data);
    }


    /* ###################### 200s ###################### */
    success(message = "Success!", payload = null) {
        return this.sendResponse(200, { type: "success", message, payload });
    }
    sendUser(user = {}) {
        return this.sendResponse(200, { type: "success", user });
    }



    /* ###################### 400s ###################### */

    badRequest(message = 'Bad Request. Some fields are not filled!') {
        return this.sendResponse(400, { type: "error", message });
    }
    wrongCredentials(message = 'Username or password is wrong!') {
        return this.sendResponse(401, { type: "error", message });
    }
    unAuthorized(message = 'Unauthorized!') {
        return this.sendResponse(401, { type: "error", message });
    }
    notFound(message = '404 Not Found') {
        return this.sendResponse(404, { type: "error", message });
    }
    alreadyExist(message = "User already exists!") {
        return this.sendResponse(409, { type: "error", message });
    }
    fileNotFound(message="No files uploaded!"){
        this.badRequest(message);
    }

    /* ###################### 500s ###################### */



    serverError(message = 'Internal server error') {
        return this.sendResponse(500, { type: "error", message });
    }
    tableNotFound(message = "Table not found") {
        return this.sendResponse(500, { type: "error", message });
    }
    requestTimeout(message = 'Request timed out') {
        return this.sendResponse(504, { type: "error", message });
    }


}

module.exports = ResponseHandler;
