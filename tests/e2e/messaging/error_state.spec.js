const should = require('should');

//TODO: change errorEvent to userInfo and change promise reject on native side
const { TEST_LOGIN,
    TEST_PASSWORD,
    TEST_USER_2,
    TEST_USER_3 } = TestHelpers.credentials;

describe('error - invalid states', () => {
    let client = null;

    before(async() => {
        await device.reloadReactNative();
        client = VICore.Client.getInstance();
        await client.connect();
        await client.login(TEST_LOGIN, TEST_PASSWORD);
    });

    after(async() => {
        await client.disconnect();
     });

    it('use messenger before client', async () => {
        let messenger = VIMessaging.Messenger.getInstance();

        should.exist(messenger);
        try {
            await messenger.getUserByName(TEST_USER_2);
        } catch (errorEvent) {
            console.log(JSON.stringify(errorEvent));
            should.equal(errorEvent.code, 10003);
            should.equal(errorEvent.description, 'Client is not logged in.');
            should.equal(errorEvent.eventType, VIMessaging.MessengerEventType.Error);
            should.equal(errorEvent.action, VIMessaging.MessengerAction.getUser);
        }

    });

});