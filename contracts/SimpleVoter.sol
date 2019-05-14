pragma solidity >=0.4.22 <0.6.0;

contract SimpleVoter {

    mapping(address => bool) hasVoted;
    uint256 public yeses;
    uint256 public nos;

    function castVote( bool _vote ) public {

        require(hasVoted[msg.sender] != true, "Already voted!");

        if (_vote) {
            yeses++;
        } else {
            nos++;
        }
        hasVoted[msg.sender] = true;

    }

}
