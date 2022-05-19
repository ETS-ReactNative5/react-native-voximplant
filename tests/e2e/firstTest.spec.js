const should = require('should');

describe('Example', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('client exist', () => {
       const client = VICore.Client.getInstance();
       should.exist(client);
    });

});