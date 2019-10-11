const assert = require("chai").assert

describe('Example', function () {
    it('should fail', function () {
        assert.isTrue(false);
    });
    it('should pass', function () {
        assert.isTrue(true);
    });
});