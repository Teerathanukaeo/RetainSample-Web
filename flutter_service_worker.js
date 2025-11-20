'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "ab1cb6ac9ce706fc3f9c78a454dd9b3f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c406273bc167ca164947bc63939f2b1f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d191d25ea5c5f10e03c3bd19a4dc38b8",
".git/logs/refs/heads/master": "d191d25ea5c5f10e03c3bd19a4dc38b8",
".git/logs/refs/remotes/origin/HEAD": "4f460c4f72dae33cc7dc33fb97657193",
".git/logs/refs/remotes/origin/master": "c52a6793e105a1774ddcc80baeb173fd",
".git/objects/03/81198d346fb44a3dfa9c6c87a025a024e375c5": "d4ac5eb83a364df2077e328979dad055",
".git/objects/0a/973b82554bf44b77ce153a421cf7b5578e5f8f": "02dbc6d7f0d4a7b25930d0c820b50e39",
".git/objects/0c/31e9f57cca4d7f0567aa0d39baba1f54c1d160": "e707d1457afda78508b983a98fccfa56",
".git/objects/0f/6fe709cdd408727185b45cc8522e46a66f8060": "82d23477173a06d0c0bad41cacd81627",
".git/objects/11/88c1f5fd2e4050b9df3a580cfacadc65518537": "260841e57900557365eabb3ad0b300cf",
".git/objects/13/2cca1602beabba6145d103cca0592c13f3a39c": "663f9978261a68d6c79b605bd81848f0",
".git/objects/16/a1560e8de30e53bed2b05f643b2e4a902a975f": "78b5c5849e5a85d82ca4aff8d2ab4207",
".git/objects/16/ecd96f88bd9965d4783e3d8e55976f9d2b5a56": "8ba362b6a22f063f631377d2cd5fca97",
".git/objects/19/a509641c5391eb277a09cc9583858a22758b66": "d648919d2b8f000b6e258dd4a88b7cca",
".git/objects/19/ac2233084da5559d8342f6abd481d5229dec50": "e6f3e19bb0f2cec457bb64063ee39ef5",
".git/objects/1c/cebccfea89f68f413274a8ec1c2a9bb2c3648d": "3cec76446e1c8f2d0fdfb38943c47211",
".git/objects/23/454ff1d8263a83ded1adf367f473d7dc44e2c8": "a31f565049f831eb12c33ada53eff670",
".git/objects/23/45c344f3d72ac1f36343347eea50761cd9e0f0": "89332be8c913b1975ba6b8107c1cb310",
".git/objects/23/dbbef7ad33589162417e100093cea56d8dab03": "d3224be8b2ae5e0bb32090a116a2b104",
".git/objects/24/513a5d240b6de544cd6e6491446ad91725e55c": "6cde624bb12304ca9bd86718b668c085",
".git/objects/26/044c4cb3b6662f9ab2efc1e2f26cb2f668f168": "02eb6629dd2ee90471b4815d0cdb5c82",
".git/objects/26/368fa8e25d8d0f0e3655aca4a10d81dfc70dd3": "deb6d13f6bf2f5d9a3fa5aa976c1c331",
".git/objects/2e/e0765ce17270cfa861edeafaa6df30af6f3ff9": "8eebb8b42845a8d2db98791e62ac688e",
".git/objects/31/9f62ef81c2308b1e2468e0ab78c9b210d12cd8": "211997f3fbf3ef53f5a809d18b01622f",
".git/objects/35/cb8b0956a4276d57cf448da567f4b7d1366b8b": "526f26a7a5100543a8e83fce1a84503d",
".git/objects/36/109bacf238cc97aa747ad4e8d0e27b51e56c30": "a36b84caa1ab50261fe153c02d6fc4de",
".git/objects/36/423c33fbce703402a0e4c11ad763f4e4d13754": "cf027388eecf55177ca794f96e89279a",
".git/objects/3b/387eb859cae066d971ec9fe1dcb9b0263eb6f7": "ea3ee9828934533e4cb6809bd8be8b97",
".git/objects/3f/348341cb5b76e13dbed0555a58e964d71f8613": "457bf88de0a6a6e3a9d97b25852df5f2",
".git/objects/42/97f173868bae0333bd1089d73df42c5e7421c2": "893d687e4c66ba4424b7f0a45a18f726",
".git/objects/46/58f9a67b1414dc8f567cee8da7772494277329": "e56f949c02c6b158e6467bc25eea3a92",
".git/objects/47/d0afa62c85747c26ac4dd4ce968f9b169fb4ba": "23fa26e326f856c766d5f7f630def6d6",
".git/objects/49/173473cfdadd6da5e76afea2a0cbb1b61acd71": "c641867e9d7ff75a2ef9511cc51c9014",
".git/objects/4a/04f1ac1059baedf06d049701de7aa3a2a5b6e6": "5031f0195fbf5d67443779ee471e4ebb",
".git/objects/4d/ce8007ec25ee86ff8ad87b5019de41fff6b884": "41958f3478bde2033cd3e1cbb10d7a08",
".git/objects/54/f3e29af8a8f22bbd35b65ae95da51822946dc8": "9106faa09fe94f37541b53deca26fdad",
".git/objects/58/bfd37d86f8e68525477897b5685c1f6ecbaf6d": "e1999276e9be57fe55e6fca7e202648c",
".git/objects/5a/2b664ff66ef2786ca491f64acc48ce80252a53": "eacf451c4bfe4d43bb7be43f3177ea8c",
".git/objects/5a/f42d473356441cc19d900ed5f8bc35d065edcb": "d1b2bbcee63e63e0ed8de32a8c84f5ac",
".git/objects/5c/67ac5364bcef4eb35348f45428f1e87bb6bbc7": "cdd058dfcfbbe299a83f1965431e73b7",
".git/objects/5d/9ed6523b1771dab79da4f4391342092e72799a": "2b7fe7f835729fbc4506a0c34ef213ab",
".git/objects/5e/3fe2a87e3efbbe154d01389f7b1491c60f16fc": "ffc9845b788cb8941a11863a119d8b11",
".git/objects/6c/b4656c66c4938d3620d3a4cac76395030d136e": "098e189fa7793cda659b5e00ee5b96e8",
".git/objects/6d/10b333a0e9162bbe0c4aeea1a3867a7a78809c": "161a0386d2a09688253030ca6ad4b9f6",
".git/objects/6e/2da82bffc042257ef7fc2187fd835c1bac6ee9": "13b52627feeed48282853a6a175ec507",
".git/objects/6e/e97b889596da4b427f4230fe5ccf1b0a098de7": "215f5cda7eeb0c332acf3e1db32af270",
".git/objects/6f/cd5f964d3c54b1a94ed4ab2311fa3cc0d9f493": "3c7d2479adf529968467ad3a47182a6c",
".git/objects/70/92a880bbdbb22299a7bff0f2fa7879a8f1ad2d": "2f06ad9cf795b58fd2bdce97ffbb1a6b",
".git/objects/70/c22cf26d9075d9830e6410577f42405518c537": "0740b0620c67d8786908f66bcf3da27b",
".git/objects/73/79dbfb0229dbd8e35d45c776afb4838b617359": "30412f4921e834f18950a783afaf9cf1",
".git/objects/75/29d1b9051a6783bace1039d864d19bb8715a05": "7ee5d6f9a393cab37c71661265b9a884",
".git/objects/75/608c6642d677d8e05f46a3d3bd3669db806f53": "90832fa6d086cfa74605a75e79c0947c",
".git/objects/78/2442a7478bf6eb419a17f3b9cbc07383570729": "a7a84f550f9696e484a92baf6b0a2867",
".git/objects/7e/3bb2f8ce7ae5b69e9f32c1481a06f16ebcfe71": "4ac6c0fcf7071bf9fc9c013172f9996f",
".git/objects/80/ff64eca9a251e05588220c2f359932c6784b6a": "1654a4bb0c9b1edc086d86819d89a698",
".git/objects/81/5117791aab19fd33359db8d2bf6be00511c9a2": "caec208819b7fee7f08e6401f77aa179",
".git/objects/81/afeea53c93ec9135834ae9b9b90066a065134e": "574c9e28d7ef998b0516f8cca89df7e6",
".git/objects/89/6d9b32a7e9c36d84434177b15a721c26c758e0": "138e20b28624def1ce94b8125b2293b7",
".git/objects/8e/d8d79cb8edd3481f253a8ac5d15bd445370c0f": "53ea3559ca37b34f31391ff37b91c6eb",
".git/objects/8e/edb64afa4971743d2c42964c8852ac29da1ef4": "892f62ec7ac2531cbb8938c75e27c788",
".git/objects/92/0063fbf73cb8cffe76fa22490e57072b3988db": "013ae0f125618deac1e809d6d954b377",
".git/objects/92/9a0938bf3c19092cae78cb3dbd2d081798773d": "e112b2ba46629f474d0e5efea25b3931",
".git/objects/94/c42a3095002c4f8acf465114e61c1ee7d925d3": "6738c0e383a81aa78f5b5c9a700fec88",
".git/objects/97/8e53a7de6f5f8d1febb9fede1df0a077c03b21": "777269cc5a91f945d075a30d97de0836",
".git/objects/98/5cac05317a4985c2d4282c404f504819a142b4": "c8a23c2d2fb4290b0c37eda0e896d58c",
".git/objects/9c/48e05a24fa2267e207ecf17560291b5621c197": "a13c22bd1a9374d0763fc0ca6b07341d",
".git/objects/9f/623e0021bad8480f902921ff58bed6e46ca179": "d93a92f49f2ce2460ffa9e43670243dd",
".git/objects/a5/536f5d54791d4127dbd08383fa219daa0f03c1": "d07b61d9a02fa8e1cb2ce9da4fe7fd45",
".git/objects/a6/1ea73a57f29bc2f5802b6dff42407079cae0c1": "3cde5b56e6e7a5194ccabf0ed76c265e",
".git/objects/a6/e504709f43aab0ab597778467c7f65738e2a57": "c2e2a23357c4a7ed9f9bb2c8156faa07",
".git/objects/a7/c3cdf62b44da65e14fe6eee44c92169eb53ebe": "c57daaf42dc7c935f101547ffc726813",
".git/objects/ab/34b70cdbf8c98594c10332668d7c3cf0c43d76": "e1c730511cb8f7b10d1af69f333e9d7c",
".git/objects/ab/78f80d9fd6154f86fe6d340ebaf11e030875cb": "62e16e3b93e6b3f16fcb05fdae999312",
".git/objects/ae/ff7c299fe34b9cf00aba66925a358e4c398a35": "bbf2d4b5e4e39138f9aac005d9931de6",
".git/objects/b1/23b25f69459f935848eff9445a2ca7ad5f0eb8": "aaec438f1ea83093eeef5b8b5729cd03",
".git/objects/b2/3809658ba58c074dfdaaf791232a9bfcfd346c": "40c16b15da113e9d621f23da4304461a",
".git/objects/b4/0ce774d1f6a9e0d13acd68aa17fa22b1f6b201": "b4c3f9e730e8f23f84954f8405f47377",
".git/objects/b6/9b30b1986ff6e38e95d8e30b06c1ccbb8930c1": "65422fa3f47356954e5896b8d8c6ecca",
".git/objects/b7/4d2c526f666e190b64d12a6b10f0523faaff82": "2b1f7dee40642936faf18eaf7a0158d6",
".git/objects/b7/8e7663a64445090c58e515517cf36590e86dc8": "bf1c0795125de0a74f74b246a301966b",
".git/objects/b9/aedcd49d084a7a02213f4a5f7d9f5df090b900": "0fc24272109768e4178ca81b71f907f1",
".git/objects/ba/ad5587be3edea1c91a52cb275177e6778c430b": "3696535d6822e06bb55ff681a47d43d4",
".git/objects/bb/a55f616c811c4ee31535667dd2ed30229e5e71": "87e8270b4443b55645967860cb2b8253",
".git/objects/bb/d27acb2a5e90c970012b9b99f129333808faa8": "39bf08260b3f19d0b4b730240d5e381f",
".git/objects/c0/96473e92af3dafcd31220be7d17e1206bec24d": "be898f92f3e86bfa0dd2bf15f6cc3ff9",
".git/objects/c3/abaefb284004df30fc3017c7fa7985b412405d": "d933c20829aeab2af7aef2ea8dad1a69",
".git/objects/c7/048fb22689496efb5a4e0f80977ff1fd3cc5e9": "ed6d4e4eae8d20eb7f9ebf34d4bcb558",
".git/objects/c7/1c549d3f3c6d4c48d601c21efbdca7d3596ead": "441f41a6f253615b26d6d1fec3f7b6b9",
".git/objects/cf/bda326947ba49c4e9105ddace95007aa13d96b": "14b23fd1953fcba1ab489c5a4dcf0fb5",
".git/objects/d2/16a73c27d9e187d0c571380d9371acf958c202": "ad97e206e1b07dd33c607a1659198e84",
".git/objects/d2/8e10b34203e3253b7e053289a7e51d09d48de4": "5a7be2726b21ad7c207a1c049440483a",
".git/objects/d5/1221af2b255560bcb313fbcc22cc43167c173f": "d53872b2d53be94338bfdef44cde6386",
".git/objects/d6/29e984895d8ff4442fe7bdce1ed4dc754730ca": "b1752d2154478a6b9d06498cbb941b7d",
".git/objects/d7/e0d37b1e3f9c4188d1e7e1eb8feead756971c9": "362c2a11ce2e7bd8f68725ed723c30c1",
".git/objects/d9/ea7acb698a2fe4c26b9e4d946fcb3cb88593d9": "fc96ebfebb03623a92967ad1230d4fa2",
".git/objects/da/a9397510b8b2fd06ceb542dab3eeb760bb5bb5": "475cc2fa338eefbcb65b7817da146cf4",
".git/objects/dd/2842b5494b362eb6dec85d0641b35d8e864687": "b861c97efdafb69fa65a74624c6792ce",
".git/objects/df/fae4c0ad6b951a8704793fa15dd6533bf429fe": "54d2538e627a4ed680feb6178e08b59b",
".git/objects/e1/85104f4555932079ae7976e9f59d947a0246fc": "7645b51f4a8b7982f7af0fe1632bf796",
".git/objects/e1/c25a01c0c38619225d41b84d76f9d1fa42eeb2": "e5ca453c27658fcceef72e339db0462c",
".git/objects/e3/5dab9c9aaa2819f4b3026773ab0822c0cf602a": "38b8f047a082191ba9a9d754a50bc965",
".git/objects/e4/adbcbc1f0a53d7c359344ed13d491f0d55ffb4": "7c311b98039035d452c9aa370fc72952",
".git/objects/e5/8e966e13f2e26e2ec2c80edc4c9921831e3588": "14ae51ca35bc7b300f7be6b16dd47cb0",
".git/objects/e7/0c357377a97f8c9bba36112495861b17ab154e": "7b3cb3e4245161ab4df101897b54c395",
".git/objects/e8/8bc4af435555c98682b8b4b615802ac5760bfe": "4d70ec80381d2974b105dba0ddf51fd3",
".git/objects/e9/c34d6dd9789a7bfbd5801058fa4d323ae192a1": "acf09ac3c1ee32587c2b8e9be970e3a8",
".git/objects/ec/576ef584f5ce2e02d50dd89831ebcb80720c7c": "59349078dfa183ce2c45b5beaee7056e",
".git/objects/ed/56244400ce2ea48c51b04c260415296c716dae": "82c19c4075063cf4f2c12a215ff5d261",
".git/objects/ef/9ed1b441235bc6c5d0478f58876def61a02ae7": "d538592bb1283997a904bcaf83b77536",
".git/objects/f5/82dc81e20cfb214155bd1f7ce32b811ccd4c21": "5b01c633ae1e94dd66dcf36f83a0fe5a",
".git/objects/fa/56ee351160482faffdee7a49033df416b545c1": "79e909445c87127b114fb81aa13c3fef",
".git/objects/pack/pack-aef5705ddb1ab4ef778432478d25b92941915291.idx": "085ff6378d74e70e6d2358e53d0ecfd0",
".git/objects/pack/pack-aef5705ddb1ab4ef778432478d25b92941915291.pack": "f4fca66893b11e5e899f957d4d151a9e",
".git/objects/pack/pack-aef5705ddb1ab4ef778432478d25b92941915291.rev": "b1673f97738ac807106f785c46825c7f",
".git/packed-refs": "1d9d6d6bde2499ef33405c16fb9e4745",
".git/refs/heads/master": "209ee131eb929c4c892fca3ca27028f0",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "209ee131eb929c4c892fca3ca27028f0",
".vscode/launch.json": "8536c0b1b0a5a6da1637feed7ca91d43",
".vscode/settings.json": "6c78da2528d04022019d2162dd38ecd1",
"assets/AssetManifest.bin": "774a300ed4cf471a3956a148394783f1",
"assets/AssetManifest.bin.json": "3afba988347da24177cec9b43fc8f330",
"assets/AssetManifest.json": "f6d6e07a198960649d2144d03fa62746",
"assets/assets/fonts/NotoSansThai-Bold.ttf": "663842836542d7dfd4784c5642b204db",
"assets/assets/fonts/NotoSansThai-Regular.ttf": "427671697e1a490b1e0015e2d7eb4653",
"assets/assets/fonts/Roboto-Bold.ttf": "dd5415b95e675853c6ccdceba7324ce7",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/icons/icon-caution@3x.png": "8f984d63371c3c065a6600c8a3ce4610",
"assets/assets/icons/icon-close@3x.png": "acd36d73c212b0340765271095d4ab7a",
"assets/assets/icons/icon-correct@2x-green.png": "70325b6ace4a1fb08f6cdae73f72bb74",
"assets/assets/icons/icon-down_4@3x.png": "f7bd2048bda76031dc2c9f1c1851e39c",
"assets/assets/icons/icon-error@3x.png": "e5b60c16a6694859a9a342e66dc09609",
"assets/assets/icons/icon-info@3x.png": "f14fc07d89153a98cc979979c02757d8",
"assets/assets/icons/icon-notifications.png": "01e90e91bd50b2eb166784bac884b7e3",
"assets/assets/images/Base.png": "e50cdf464d7b2ac274867336c6c08e58",
"assets/assets/images/Chorm.png": "2eb2f7fdc7c0b91e0942a1ecc9a0b8ce",
"assets/assets/images/Gutter%2520at%2520Liquid%2520plant%2520for%2520Acid.png": "4020a69f2b7f3a57638c86b9804ea79e",
"assets/assets/images/Gutter%2520at%2520Liquid%2520plant%2520for%2520Alkaline.png": "14835c12f160ee58e0b4d0e32111c782",
"assets/assets/images/Gutter%2520at%2520reaction%2520tank%2520No.17.png": "a248eb89edf54684b6c633cca37856d2",
"assets/assets/images/Hood%2520at%2520QC%2520room.jpg": "2fecfa29d70d810874df54300fa3d703",
"assets/assets/images/IBC%2520for%2520Powder.png": "bf7a99900a6334439f291d69e79696da",
"assets/assets/images/IBC%2520for%2520Used%2520Oil.png": "4cd49906b9aae58a7de90224cee5412f",
"assets/assets/images/Liquid.png": "2eb2f7fdc7c0b91e0942a1ecc9a0b8ce",
"assets/assets/images/logoonly_tpkpng.png": "8351a8994e8b4049e562276d00c69682",
"assets/assets/images/logo_tpk.png": "6c5e90f3a6d7793651ae96a21318a911",
"assets/assets/images/Noxrust.png": "2b24b13c9e3b5b366624b9c3b96108dc",
"assets/assets/images/Powder.png": "a36c3f5f808923a18bf32e172b7ded43",
"assets/FontManifest.json": "7d97b2c7243292d1a46b6077e147f402",
"assets/fonts/MaterialIcons-Regular.otf": "753e822c48843027d22810f44546954d",
"assets/fonts/Roboto/OFL.txt": "57eb4b0a32a11ca605278cabc369677c",
"assets/fonts/Roboto/README.txt": "7947490bbf6b97b69d87213bf5880557",
"assets/fonts/Roboto/Roboto-Italic-VariableFont_wdth,wght.ttf": "5b03341126c5c0b1d4db52bca7f45599",
"assets/fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf": "3aa911d4a1e76c8946952fe744ce7434",
"assets/fonts/Roboto/static/Roboto-Black.ttf": "dc44e38f98466ebcd6c013be9016fa1f",
"assets/fonts/Roboto/static/Roboto-BlackItalic.ttf": "792016eae54d22079ccf6f0760938b0a",
"assets/fonts/Roboto/static/Roboto-Bold.ttf": "dd5415b95e675853c6ccdceba7324ce7",
"assets/fonts/Roboto/static/Roboto-BoldItalic.ttf": "dc10ada6fd67b557d811d9a6d031c4de",
"assets/fonts/Roboto/static/Roboto-ExtraBold.ttf": "27fd63e58793434ce14a41e30176a4de",
"assets/fonts/Roboto/static/Roboto-ExtraBoldItalic.ttf": "80b61563f9e8f51aa379816e1c6016ef",
"assets/fonts/Roboto/static/Roboto-ExtraLight.ttf": "83e5ab4249b88f89ccf80e15a98b92f0",
"assets/fonts/Roboto/static/Roboto-ExtraLightItalic.ttf": "41c80845424f35477f8ecadfb646a67d",
"assets/fonts/Roboto/static/Roboto-Italic.ttf": "1fc3ee9d387437d060344e57a179e3dc",
"assets/fonts/Roboto/static/Roboto-Light.ttf": "25e374a16a818685911e36bee59a6ee4",
"assets/fonts/Roboto/static/Roboto-LightItalic.ttf": "00b6f1f0c053c61b8048a6dbbabecaa2",
"assets/fonts/Roboto/static/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/fonts/Roboto/static/Roboto-MediumItalic.ttf": "918982b4cec9e30df58aca1e12cf6445",
"assets/fonts/Roboto/static/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/fonts/Roboto/static/Roboto-SemiBold.ttf": "dae3c6eddbf79c41f922e4809ca9d09c",
"assets/fonts/Roboto/static/Roboto-SemiBoldItalic.ttf": "2d365b1721b9ba2ff4771393a0ce2e46",
"assets/fonts/Roboto/static/Roboto-Thin.ttf": "1e6f2d32ab9876b49936181f9c0b8725",
"assets/fonts/Roboto/static/Roboto-ThinItalic.ttf": "dca165220aefe216510c6de8ae9578ff",
"assets/fonts/Roboto/static/Roboto_Condensed-Black.ttf": "b8e3ed03047190a170b330b99cb497cf",
"assets/fonts/Roboto/static/Roboto_Condensed-BlackItalic.ttf": "77716aa38d5bfb3b7a8707797e6d6d65",
"assets/fonts/Roboto/static/Roboto_Condensed-Bold.ttf": "5340a8744e1c9e34870f54f557d67b17",
"assets/fonts/Roboto/static/Roboto_Condensed-BoldItalic.ttf": "757801f54a84d6503d7bc9c56e763b75",
"assets/fonts/Roboto/static/Roboto_Condensed-ExtraBold.ttf": "e7921919c3021ad88323d48eb9294917",
"assets/fonts/Roboto/static/Roboto_Condensed-ExtraBoldItalic.ttf": "17772988c821639e9fe36044d6931208",
"assets/fonts/Roboto/static/Roboto_Condensed-ExtraLight.ttf": "cf9840bb59a0b4ef1f6441efde262ec0",
"assets/fonts/Roboto/static/Roboto_Condensed-ExtraLightItalic.ttf": "2c2c1df1100801d8a4b345d27f302980",
"assets/fonts/Roboto/static/Roboto_Condensed-Italic.ttf": "58ab0145561cf8b4782eea242cb30f5b",
"assets/fonts/Roboto/static/Roboto_Condensed-Light.ttf": "0f3de38ef164b0a65a8a0a686e08bbff",
"assets/fonts/Roboto/static/Roboto_Condensed-LightItalic.ttf": "d86a4886b06b3be02dd8c06db6c7b53d",
"assets/fonts/Roboto/static/Roboto_Condensed-Medium.ttf": "b9f98617f7bc110311f054d264f43b58",
"assets/fonts/Roboto/static/Roboto_Condensed-MediumItalic.ttf": "a887fedb5da68c3987dcaf272f685228",
"assets/fonts/Roboto/static/Roboto_Condensed-Regular.ttf": "6f1c323492d1266a46461cbc57101ad4",
"assets/fonts/Roboto/static/Roboto_Condensed-SemiBold.ttf": "e9bd6495779750596421effa84fdd4f5",
"assets/fonts/Roboto/static/Roboto_Condensed-SemiBoldItalic.ttf": "9f8f19b06543707a34bda741211fd833",
"assets/fonts/Roboto/static/Roboto_Condensed-Thin.ttf": "38ca91dbce841a3c3c20a3024a00fb93",
"assets/fonts/Roboto/static/Roboto_Condensed-ThinItalic.ttf": "66aeec1eb99fd707bbda2c23c0d88dbd",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-Black.ttf": "4e83f16b2aae530ed5a9eea2c6fcba0e",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-BlackItalic.ttf": "cee6c277748569381168fa4873f17951",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-Bold.ttf": "6176c398124c086287f8f2704e447d89",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-BoldItalic.ttf": "becb41b38acfe0bb5d4101cde6db0029",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-ExtraBold.ttf": "cd66a60e5be720ca2c368e6b60348cd4",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-ExtraBoldItalic.ttf": "76b49fa5b22fb20fd69561f17237e80d",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-ExtraLight.ttf": "83c6c6b25720032a079c86b8244ece58",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-ExtraLightItalic.ttf": "c5105f6fbcd6f492a2a6f99f92936d22",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-Italic.ttf": "5cae5cd3f40c671315aea0e55f8aa469",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-Light.ttf": "7f35ecca19fa7286023e6d5d29d98fee",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-LightItalic.ttf": "ee86d3beb5d7e6f711f0f12f09179d48",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-Medium.ttf": "ec198bede12e04919f81c2deabbfddfe",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-MediumItalic.ttf": "4404af13d7c2b95be24b367e5dfaa726",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-Regular.ttf": "1a494bea2b882849db6c932aee6a4302",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-SemiBold.ttf": "4cd0ff27a44b68f74262ec5d63d9f304",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-SemiBoldItalic.ttf": "60a345becd1b883beef9d02bbb655af6",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-Thin.ttf": "4f2191b28015879bcd1836c2d03b9ac5",
"assets/fonts/Roboto/static/Roboto_SemiCondensed-ThinItalic.ttf": "b1b3f970c13ebd8f93345d10d6ac3626",
"assets/fonts/Roboto-Black.ttf": "dc44e38f98466ebcd6c013be9016fa1f",
"assets/fonts/Roboto-BlackItalic.ttf": "792016eae54d22079ccf6f0760938b0a",
"assets/fonts/Roboto-Bold.ttf": "dd5415b95e675853c6ccdceba7324ce7",
"assets/fonts/Roboto-BoldItalic.ttf": "dc10ada6fd67b557d811d9a6d031c4de",
"assets/fonts/Roboto-ExtraBold.ttf": "27fd63e58793434ce14a41e30176a4de",
"assets/fonts/Roboto-ExtraBoldItalic.ttf": "80b61563f9e8f51aa379816e1c6016ef",
"assets/fonts/Roboto-ExtraLight.ttf": "83e5ab4249b88f89ccf80e15a98b92f0",
"assets/fonts/Roboto-ExtraLightItalic.ttf": "41c80845424f35477f8ecadfb646a67d",
"assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf": "5b03341126c5c0b1d4db52bca7f45599",
"assets/fonts/Roboto-Italic.ttf": "1fc3ee9d387437d060344e57a179e3dc",
"assets/fonts/Roboto-Light.ttf": "25e374a16a818685911e36bee59a6ee4",
"assets/fonts/Roboto-LightItalic.ttf": "00b6f1f0c053c61b8048a6dbbabecaa2",
"assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/fonts/Roboto-MediumItalic.ttf": "918982b4cec9e30df58aca1e12cf6445",
"assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/fonts/Roboto-SemiBold.ttf": "dae3c6eddbf79c41f922e4809ca9d09c",
"assets/fonts/Roboto-SemiBoldItalic.ttf": "2d365b1721b9ba2ff4771393a0ce2e46",
"assets/fonts/Roboto-Thin.ttf": "1e6f2d32ab9876b49936181f9c0b8725",
"assets/fonts/Roboto-ThinItalic.ttf": "dca165220aefe216510c6de8ae9578ff",
"assets/fonts/Roboto-VariableFont_wdth,wght.ttf": "3aa911d4a1e76c8946952fe744ce7434",
"assets/fonts/Roboto.zip": "66fdb4dd6e1e52e2af6f2f3b8cd99d13",
"assets/fonts/Roboto_Condensed-Black.ttf": "b8e3ed03047190a170b330b99cb497cf",
"assets/fonts/Roboto_Condensed-BlackItalic.ttf": "77716aa38d5bfb3b7a8707797e6d6d65",
"assets/fonts/Roboto_Condensed-Bold.ttf": "5340a8744e1c9e34870f54f557d67b17",
"assets/fonts/Roboto_Condensed-BoldItalic.ttf": "757801f54a84d6503d7bc9c56e763b75",
"assets/fonts/Roboto_Condensed-ExtraBold.ttf": "e7921919c3021ad88323d48eb9294917",
"assets/fonts/Roboto_Condensed-ExtraBoldItalic.ttf": "17772988c821639e9fe36044d6931208",
"assets/fonts/Roboto_Condensed-ExtraLight.ttf": "cf9840bb59a0b4ef1f6441efde262ec0",
"assets/fonts/Roboto_Condensed-ExtraLightItalic.ttf": "2c2c1df1100801d8a4b345d27f302980",
"assets/fonts/Roboto_Condensed-Italic.ttf": "58ab0145561cf8b4782eea242cb30f5b",
"assets/fonts/Roboto_Condensed-Light.ttf": "0f3de38ef164b0a65a8a0a686e08bbff",
"assets/fonts/Roboto_Condensed-LightItalic.ttf": "d86a4886b06b3be02dd8c06db6c7b53d",
"assets/fonts/Roboto_Condensed-Medium.ttf": "b9f98617f7bc110311f054d264f43b58",
"assets/fonts/Roboto_Condensed-MediumItalic.ttf": "a887fedb5da68c3987dcaf272f685228",
"assets/fonts/Roboto_Condensed-Regular.ttf": "6f1c323492d1266a46461cbc57101ad4",
"assets/fonts/Roboto_Condensed-SemiBold.ttf": "e9bd6495779750596421effa84fdd4f5",
"assets/fonts/Roboto_Condensed-SemiBoldItalic.ttf": "9f8f19b06543707a34bda741211fd833",
"assets/fonts/Roboto_Condensed-Thin.ttf": "38ca91dbce841a3c3c20a3024a00fb93",
"assets/fonts/Roboto_Condensed-ThinItalic.ttf": "66aeec1eb99fd707bbda2c23c0d88dbd",
"assets/fonts/Roboto_SemiCondensed-Black.ttf": "4e83f16b2aae530ed5a9eea2c6fcba0e",
"assets/fonts/Roboto_SemiCondensed-BlackItalic.ttf": "cee6c277748569381168fa4873f17951",
"assets/fonts/Roboto_SemiCondensed-Bold.ttf": "6176c398124c086287f8f2704e447d89",
"assets/fonts/Roboto_SemiCondensed-BoldItalic.ttf": "becb41b38acfe0bb5d4101cde6db0029",
"assets/fonts/Roboto_SemiCondensed-ExtraBold.ttf": "cd66a60e5be720ca2c368e6b60348cd4",
"assets/fonts/Roboto_SemiCondensed-ExtraBoldItalic.ttf": "76b49fa5b22fb20fd69561f17237e80d",
"assets/fonts/Roboto_SemiCondensed-ExtraLight.ttf": "83c6c6b25720032a079c86b8244ece58",
"assets/fonts/Roboto_SemiCondensed-ExtraLightItalic.ttf": "c5105f6fbcd6f492a2a6f99f92936d22",
"assets/fonts/Roboto_SemiCondensed-Italic.ttf": "5cae5cd3f40c671315aea0e55f8aa469",
"assets/fonts/Roboto_SemiCondensed-Light.ttf": "7f35ecca19fa7286023e6d5d29d98fee",
"assets/fonts/Roboto_SemiCondensed-LightItalic.ttf": "ee86d3beb5d7e6f711f0f12f09179d48",
"assets/fonts/Roboto_SemiCondensed-Medium.ttf": "ec198bede12e04919f81c2deabbfddfe",
"assets/fonts/Roboto_SemiCondensed-MediumItalic.ttf": "4404af13d7c2b95be24b367e5dfaa726",
"assets/fonts/Roboto_SemiCondensed-Regular.ttf": "1a494bea2b882849db6c932aee6a4302",
"assets/fonts/Roboto_SemiCondensed-SemiBold.ttf": "4cd0ff27a44b68f74262ec5d63d9f304",
"assets/fonts/Roboto_SemiCondensed-SemiBoldItalic.ttf": "60a345becd1b883beef9d02bbb655af6",
"assets/fonts/Roboto_SemiCondensed-Thin.ttf": "4f2191b28015879bcd1836c2d03b9ac5",
"assets/fonts/Roboto_SemiCondensed-ThinItalic.ttf": "b1b3f970c13ebd8f93345d10d6ac3626",
"assets/NOTICES": "b36b1a2832580413226ad66db2c6a290",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "74179144ad3cc03694b80a840e78ba9f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1338accc6d778f5ab572cbcd1e7f83e2",
"/": "1338accc6d778f5ab572cbcd1e7f83e2",
"main.dart.js": "7c7ea7f8a508e54fb186b0cbb43b723c",
"manifest.json": "e875afea49b634ea01ade7c516dc4cf5",
"version.json": "7f86edf6c13624ed15391b7ecd82e7d0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
