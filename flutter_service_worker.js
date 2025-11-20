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
".git/index": "3e9df6e35b08650c84c7e0efc379d6d5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "46d0287534ae9b99411a69f27558226e",
".git/logs/refs/heads/master": "46d0287534ae9b99411a69f27558226e",
".git/logs/refs/remotes/origin/HEAD": "4f460c4f72dae33cc7dc33fb97657193",
".git/logs/refs/remotes/origin/master": "87019dcfa011789e1a9159db5e0f1ddf",
".git/objects/19/ac2233084da5559d8342f6abd481d5229dec50": "e6f3e19bb0f2cec457bb64063ee39ef5",
".git/objects/26/044c4cb3b6662f9ab2efc1e2f26cb2f668f168": "02eb6629dd2ee90471b4815d0cdb5c82",
".git/objects/35/cb8b0956a4276d57cf448da567f4b7d1366b8b": "526f26a7a5100543a8e83fce1a84503d",
".git/objects/5c/67ac5364bcef4eb35348f45428f1e87bb6bbc7": "cdd058dfcfbbe299a83f1965431e73b7",
".git/objects/94/c42a3095002c4f8acf465114e61c1ee7d925d3": "6738c0e383a81aa78f5b5c9a700fec88",
".git/objects/d2/16a73c27d9e187d0c571380d9371acf958c202": "ad97e206e1b07dd33c607a1659198e84",
".git/objects/d2/8e10b34203e3253b7e053289a7e51d09d48de4": "5a7be2726b21ad7c207a1c049440483a",
".git/objects/df/fae4c0ad6b951a8704793fa15dd6533bf429fe": "54d2538e627a4ed680feb6178e08b59b",
".git/objects/fa/56ee351160482faffdee7a49033df416b545c1": "79e909445c87127b114fb81aa13c3fef",
".git/objects/pack/pack-aef5705ddb1ab4ef778432478d25b92941915291.idx": "085ff6378d74e70e6d2358e53d0ecfd0",
".git/objects/pack/pack-aef5705ddb1ab4ef778432478d25b92941915291.pack": "f4fca66893b11e5e899f957d4d151a9e",
".git/objects/pack/pack-aef5705ddb1ab4ef778432478d25b92941915291.rev": "b1673f97738ac807106f785c46825c7f",
".git/packed-refs": "1d9d6d6bde2499ef33405c16fb9e4745",
".git/refs/heads/master": "1985977a972da1762490247b0142c9a0",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "1985977a972da1762490247b0142c9a0",
".vscode/launch.json": "8536c0b1b0a5a6da1637feed7ca91d43",
".vscode/settings.json": "6c78da2528d04022019d2162dd38ecd1",
"assets/AssetManifest.bin": "8b6da834aa1d073f564244a22e3dd97a",
"assets/AssetManifest.bin.json": "6497ba34c4abcab83b69a8589c3f55e6",
"assets/AssetManifest.json": "eba83a0361b028b233834b2c69afb7f7",
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
"assets/FontManifest.json": "c5238a9df6770f15fb4677c696cfca5f",
"assets/fonts/MaterialIcons-Regular.otf": "753e822c48843027d22810f44546954d",
"assets/fonts/Roboto/OFL.txt": "3e5df346fd8c0867bac65e8a215771dd",
"assets/fonts/Roboto/README.txt": "3ffa129a97ef4e6614e51eae219207d5",
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
"flutter_bootstrap.js": "f4ec0e4d4bd0bc993db070f5cdbfc996",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5af1917fa72e1c05f944f8911f751e84",
"/": "5af1917fa72e1c05f944f8911f751e84",
"main.dart.js": "094a5db11426437ea1478ed810bcbba7",
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
