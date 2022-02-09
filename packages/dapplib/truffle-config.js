require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remind concert grace casino system tenant'; 
let testAccounts = [
"0x0e56ccfc5ffe111ebebc467d0c5f54925adb33d8ea74ade0d63e6a1f8e8b2733",
"0x2d897ae79c7c9c9cce724d38c14524118afcbed36187e5415b6c034a77dd1e01",
"0x596bb6edf5a39e407605a996ae83064c336488cbcc006469770c9eeb2c0225a8",
"0x4db45104970901a92590b774bdea250ab26add0ee56e400183612000498bbab2",
"0x0311911dac0a0481df4285fc7ce215aacc54fc4ae095337714ff1cbc9fde6e2c",
"0xb42d9bb85a94efd5878b483a66dcab7c341332ebb54bfd7d595b27a102108180",
"0x4e888573220c9deefff50bceed7f5d9caed8c300e8e0f76050af1935934a5487",
"0xce4733bf3f077e40a4938a246412eece8b33855c51a243bdf06840ad08e1fd5e",
"0xe161c8b8a90d6673d445088acd3f0ce783539245cb664f1961fda0684e1e9f5e",
"0xc9a50d6014088f048334a1d7207c94d89f3e5363bd7921a6b5f468b6267b41db"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

