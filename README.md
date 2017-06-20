# Sweep Counterparty Asset

JavaScript tool to transfer XCP or any Counterparty asset.

## Getting Started

1. Download ZIP
2. Extract ZIP on local computer
3. Open `sweep.html` in web browser

## Private Key

You need your address' private key to use this tool. If you only have a 12 word passphrase from Counterwallet or other Counterparty wallet, open `passphrase_address.html` to find the right address/private key pair. 

Once you enter the private key in `sweep.html` the corresponding address pops up. Link to block explorers appear as well. Click on XChain to verify its XCP and asset balances.

## Asset to Sweep

It can be `XCP` or any Counterparty asset that you own, such as `SJCX` or `FLDC`.

## Send Asset Quantity

Leave it on `MAX` to sweep the entire balance. Insert a number to specify amount.

## Recipient Address

This is the address you transfer the asset to.

## BTC Dust

For technical reasons, you must send a tiny amount of BTC along with the asset. The recipient receives the BTC dust.

Do not put it lower than the default.

If you want to sweep your address completely, i.e. you have ONE asset and bitcoin, you can set the `BTC Dust` such that `Dust + Fee` equals the entire bitcoin balance.

## BTC Miner Fee

To help you set a reasonable fee, the fee is converted to a USD equivilant and an estimated cost in satoshis / byte. 

The USD amount is estimated at a price of $2500 per bitcoin, not the current price. Change parameter `btc_usd` in source file to adjust this.

The estimated satoshis / byte assumes a transaction size of 280 bytes. Under some conditions your sweep transaction may be much larger. What happens then is that the real sat/byte ratio will be much lower and the transaction will take time to propagnate.
 
I've put the default fee high enough so it will go through no matter what, though in extreme cases some hours or even days of waiting should be expected.

# Tips

* Open blockchain.info or other block explorer to view unconfirmed transactions. Keep the tab open until you see it confirmed.

* You can only sweep one asset at a time. Wait for the first one to confirm before you sweep the next one.

* If only one asset, you can sweep the entire bitcoin balance at the same time. Make sure `Dust + Fee` equals the exact balance

* If the tool fails, it's most likely due to inability to access both Blockchain.info's and Bitpay api's APIs. Try another connection (another computer on the same connection won't work). VPN and Tor connections are very likely to be blocked.

* In rare cases the transaction is a `SUCCESS` but it won't show in block explorer. Wait a minute and check out several block explorers. If just one of them shows it, it's all good. Your transaction is out there waiting to confirm. If you cannot find your transaction anywhere, it has been rejected across the board. Try again, but with a higher fee.  

