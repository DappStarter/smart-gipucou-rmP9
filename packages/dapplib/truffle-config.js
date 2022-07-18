require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe stool regret scrub property hunt praise army genre'; 
let testAccounts = [
"0x4e19c6b7450a6881857798e80ee4f3d50b0e2adbb59d35ac9c0cee072ec1aa5c",
"0x81b3b2b9c1292d47e8f7e550acc2e4ec11a9c23b9c2cac050cc1c1b71d2e4fcd",
"0xb429b09c8351429faa1e3f4ec48b16cc700abd04be15633631a5abfc30659462",
"0x0ca5d6b0d5a5a8f3fbb694fb2b3737da7761c4b543bfe1ceab694c2b7b4248bb",
"0x4449bf85ce25e95312a35fcdbda3c3bd09a6dfaef9efd0487bdb6be4d8904b3a",
"0xa0c6bd4f8b7100db1989f0d9b65f982759456545d106d562e7ac8f2ab11b3527",
"0x2e89c9e0bb2a9004e5999b6be4d0043ed65e6088836cfb4ed94610c28265636e",
"0x60decf807c06019ae66497e0792967b319efb793047ccc971e1d9e52ad447b55",
"0xd16e1d8a5387845f35c9f4ada8882eec5f187561478b54c0726b1f28c9a24dd6",
"0xf183fc9a070899577dde21dde9564e874e3d2617ae6d0bbf27a3024a26cc177c"
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

