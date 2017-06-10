//Run after every key stroke
//Verify that it is a valid private key
//and print status and address

timeoutIDprivkey = 0;
function preparePrivKey() {
    clearTimeout(timeoutIDprivkey);
    timeoutIDprivkey = setTimeout(validateInputPrivKey, 70);
}

function validateInputPrivKey() {
    var privKeyInput = document.getElementById('privatekey').value;
    privKeyInput = privKeyInput.trim();
    var output = "";
    if (isValidPrivKey(privKeyInput)) {
		var addr = privKeyToAddress(privKeyInput);
        output = addr + "<i><br>- View on <a href=\"https://xchain.io/address/"+addr+"\"  target=\"_blank\">XChain</a><br>- View on <a href=\"https://www.blocktrail.com/BTC/address/"+addr+"\"  target=\"_blank\">Blocktrail</a><br>- View on <a href=\"https://blockchain.info/address/"+addr+"\"  target=\"_blank\">Blockchain.info</a></i>";
    } else {
	 output = "<i>Address appears here when correct private key is entered</i>";
	}
    document.getElementById('privkeyfeedback').innerHTML = output;
    /*
    var output = ";;";
	
    var privKey = bitcore.privateKey.parseFromString(privKeyInput);
    
    output = privKey.toAddress();
	document.getElementById('privkeyfeedback').innerHTML = output;*/
}

function privKeyToAddress(privkey) {
//Takes private key string and returns address string
    var bitcore = require('bitcore');
    var imported = bitcore.PrivateKey.fromWIF(privkey);
    var publicKey = imported.toPublicKey();
    var address = publicKey.toAddress();
    return address.toString();
}

function isValidPrivKey(privkey) {
//Returns true or false
//Not perfect validation. Just ensures right prefix, length and characters. 
//No checksum validation
//https://en.bitcoin.it/wiki/Private_key#Base58_Wallet_Import_format
	if (privkey[0] != '5' && privkey[0] != 'L' && privkey[0] != 'K') return false;
	if (privkey.length < 51) return false;
	if (privkey.length > 52) return false;
	return /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/.test(privkey);
}
