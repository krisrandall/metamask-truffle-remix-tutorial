const SimpleVoter = artifacts.require('SimpleVoter.sol');



contract ('SimpleVoter contract', (accounts) => {
    let simpleVoter;

    // Reset state before each run
    beforeEach('create a new contract for each test', async () => {
        simpleVoter = await SimpleVoter.new();
    })

    describe('Simple Voter', () => {
        it('no votes to begin with', async () => {
          let result;
                    
          result = await simpleVoter.yeses();
          assert.equal(result, "0", 'should be zero YES votes');

          result = await simpleVoter.nos();
          assert.equal(result, "0", 'should be zero NO votes');
        });

        it('Should vote successfully', async () => {
            let result;

            result = await simpleVoter.castVote(true);

            result = await simpleVoter.yeses();
            assert.equal(result, 1, 'one yes vote');

            result = await simpleVoter.nos();
            assert.equal(result, 0, 'zero no votes');
        });

        it('Should not allow multiple votes', async () => {
            let result;

            try {
                result = await simpleVoter.castVote(true);
                result = await simpleVoter.castVote(true);
            } catch (err) {
                // assert that we caught an exception
                assert(true, err.toString().includes('revert'), 'expected second vote to revert');
                return;
            }
            assert(false, 'did not catch expected exception');

        });
    });
});
