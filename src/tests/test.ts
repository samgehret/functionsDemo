import {test_src} from 'segment-local-functions'
import {expect} from 'chai'

const src_payload = require('./src-payload.json')

describe('Functions test', function () {
    it('verifies successful response', async () => {
        const src_result = await test_src(src_payload)

        expect(src_result.tracks).to.be.an('array').and.of.length(1);
        expect(src_result.identifies).to.be.an('array');
        expect(src_result.screens).to.be.an('array');
        expect(src_result.pages).to.be.an('array');
        expect(src_result.aliases).to.be.an('array');
        expect(src_result.groups).to.be.an('array');
    }).timeout(5000);
});
