'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a326cb872315df87a3ba17f6f0e2ee63",
"index.html": "9b60b571b2d11776b3f0b3da4c89ee88",
"/": "9b60b571b2d11776b3f0b3da4c89ee88",
"main.dart.js": "5e8659cf431ad9d3036f509d894f5ede",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "82541ed73ccd91e0ae6d480a301c9d64",
".git/config": "8dbe190ccf12258e6ec0b24175fa442e",
".git/objects/68/0ea728a577c62e9fd6ce64736aa1765b116f64": "4b7443eb5532e42908e4aa4da5aa0c6b",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6f/412f521c933de67467fc7f4e43051a110ab71f": "0ce7777de1960c6d714dcb0ca536d647",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/a1f5b6fdbc7b37c7b626cd40e3373f954eca17": "5dc545e4ba5d44e4b9d55226fca05d05",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/93/797ced1f61d323c830e25f8e8ee466b1ecf67e": "3c8d070dab357bf51230604d1ca422ef",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/486f4e077e2a88a042f7f74ca7836b929848aa": "9a3dd789e1c54c39812cd69b5880df32",
".git/objects/5f/058c9246e15d3be2c885914abd4a27e61df703": "9b6797f34488e745096ba592e545ca78",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/e7c72c6b58e939806ce9f38a16a03321bf08f6": "b3c582667c5c8b23e9237f24621b40dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/54229f98e1b6b8ee21c5c2e6271712426d0427": "4108d2bcc11d3c97fe360847a5131d3b",
".git/objects/e5/1de981619de746c7007fa868e5a4d3219cf08e": "1fe7f5480cb4d72e80bb33ebaf62a7e6",
".git/objects/e5/b4965f1ffbf7ea4edd7af6305cd35c7adc262e": "7d53c56e7a44c053139c83061e896ce0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ee/9401073a8d3215fc337e74ddbd88a0bc8a8953": "afa569e1e6118987c8c9877283e2b927",
".git/objects/c9/a5fc69fc8b82bb620e890dac95a812e3c7cedb": "546cffca3fbbee44f355c726dd4e14ce",
".git/objects/fd/0a5010e5ae3a30a7ad0b0d9617fced5d5c6a27": "cef323e08c0ab26e1757d646f2542cfd",
".git/objects/cf/993744b4c6c764d61af0d3c10f70c835b2b9cd": "a55706b0071040db4448f5f58037c345",
".git/objects/e4/e3675d7a581ec22961c31e60dc19f0d8940bae": "84bca1b666705f5cdafffc3ac82bb32c",
".git/objects/c8/ef9a579b192c030010ce2f007726a9d5a00808": "3545e293fd908fec0ee2efe72d6e8942",
".git/objects/c8/254e81d657d8b0791da6ce502773c0cf61bba7": "d9ec4a752df583e7f3a467dfcd7d3730",
".git/objects/ed/56a12161913610f5f2ec8edd09b62a28104f1b": "43b2c1a48806b582cdbc74aff03ad279",
".git/objects/c1/9d6266582a91085ffd8df2c1bbee2785f01681": "d194a1803722c54d10be660dcd27391e",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/9b8d4952bb43435e20ae1defb82d46643d5055": "7e8fe616b39e58b8862d36674ba4993c",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/89/7e6d7062340d4a92df4979e5d7644c511c1a05": "04dc613fe5389c0e78886dbc94ae55be",
".git/objects/1f/f3556788168c9c588c642fab9f3f185b36d0e3": "99d75fd77be62f0b011916b8c7e0d627",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/17/8428e5b1d447153227623282bf4e0b668ecd63": "58f9eca8dae0722a55de5a325e496a42",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/da545308815706964aa46fd0d605b3cc850349": "92e7ea5e64e77be7a698e9608a0e97fc",
".git/objects/19/e746bc8851e62e4ff01adb41bedf3f4b729b6d": "5ca4f6885773c0e1b3a5b4147919da75",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/26/62893b3636b500ea387b3806fe2880c51a77b6": "804dd50104cf0aa70084f972db175c0b",
".git/objects/81/effee4d1c8696ad205d3af2d91aa75abd0f931": "53e9533bfcc00cde35dadd242f63327c",
".git/objects/81/4502f4823a5b1054fd5b5f455b4926a7a35751": "c04c8a04005830e552e1c0f9a0af55d8",
".git/objects/81/71b5416b71cd5ab5c9068ebe30b90f72933b0f": "96f7b20a48dd91cbccc1f0f91da02b53",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/72/99fff1a3c3469f12831d96922390b58fbd4111": "649d9a257c7968bec18eded461c2dfd8",
".git/objects/2a/24c5e80b35cccf50ba3f4f3a6b1a5487894672": "81c0b59884cd8e2ccbc11b26f1d706e8",
".git/objects/43/07de057ae5023ec888f599fae622736292758a": "b7d5c7d6d5dd0a0cd644996a6cb157d5",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/cb80901541904211268cefe3670f4be133edf0": "d083d68ed394022293944eda004034cc",
".git/objects/6b/3d63ff829d0aebbdf59c595f117a12b6438c3b": "2b5d1927195c5215c63bb4e2fac8b1ee",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/65/f53908bdb4580e817a5c1a34a43f4516e74616": "22db15bb716e78e661b0f785980b385e",
".git/objects/62/dd0fe3b598748fc29c086e3960f0118aebf745": "c9f17fddba9fd9b58c3296abf0a49017",
".git/objects/62/43deb165d73e0d77f496343599a620d3c3f182": "42abe89a9c76b0ec3613a8a105b3fc15",
".git/objects/54/d50902bd8d45962e808909f883d6968902ad6b": "e594c1b2528d65dd7ccbfa854fd3cbdd",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/1bf64b4a3b719041404eb641ee1d1baff14691": "9a97c734505fe61f49ead77b4573c53b",
".git/objects/97/041daacd184b11d61c8852bfcb274f39388c3b": "4e6d0ec92b7775ad6be3610f726538d5",
".git/objects/bf/d6f178b0694ce93bebd83251d775e6209d64e0": "ca28843a56e79ff5a5b328fc5aa60979",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dd/aae11d8b7dffe59e5bff2217354fa510725e8d": "1e78eebb7b9cc175f8df5449f04e9535",
".git/objects/aa/957430a4e6c786e81ea17083cfd825e69d50b9": "3631d1803ebc7ed5a5aa1466eafe567b",
".git/objects/aa/fb00741071c80af82d70bcf0aa27106f3894d8": "928dbdd551c01a0f3b9f9ae6b7249c8f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/074726f439fce22ef556c9ab52da605d736c5c": "887a0a60f8dd3ad1dc82357a14a48295",
".git/objects/b7/2ff0fe99fe23613171866f16ae48cdd8953568": "a5c441f368d3b2cbfedb032298fc20e7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/ca9af74a2526e39f82465f5b2a198a9d3b68a5": "08857a0b6629c2526d2ac35e3633709f",
".git/objects/e6/0ca4e78f5ebeb3dccdd8ca4cf5fceb78916182": "9972635952b346e50ee73e6ae8c3aec0",
".git/objects/e8/5d3a11360d777acffe5105efbb8d059bbdc41f": "9f6e402a777e06170d0ee6a75a982b00",
".git/objects/e8/b4039f01534cc95b83d9b9fd33c3322536c10c": "379549d6441fd7e4bcf88cbdf73e0ef1",
".git/objects/e8/3d2acd39f8fe22739ccccb65eb978f99969099": "58e1851fe5f0a226c4ab2d3a8d23d974",
".git/objects/c5/b011a40ee0019ca188efcaac7cb0800d20f3fa": "4ba076c321b5aa108c5c7437b42a0744",
".git/objects/f1/3d02d5313eb8bd28e5342a934869c18c925798": "7a36fa97d2d5eb8f5f79408f5787ffde",
".git/objects/f8/de7b28cc6882c6d56b20515ecb068b876852bb": "465d18642faf172e4bff1c2dbf10631e",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/277b58bf80f2691d4938ac78b44095754354a7": "4b4bf117a2a696480b978de3bafb24ca",
".git/objects/4a/91def1a81167b13fca422831d978c2e765b725": "2df552ba3ccb3c91d0d5f0294572e855",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/85/d702b86ea5bcef96d2a45bdbdc786c3eee5d1b": "5f2f0fa9ef3479a7b16b4882c4e08a94",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/9f37244d29c99fcc45fbf6d1aed5a4d4b554a4": "deed1f01c338d9b1ee8c1dad12ccb045",
".git/objects/1c/fbd64269bf97c2e77108ba93ed421d24b0910f": "3e8a0453af62bc64887e57e23387cdcc",
".git/objects/49/5420cb733dd7a384cd812c98b1f27836f170eb": "d099d92ee65da6f7ca74cfe13ffc9406",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/22/82284ba98f2353d51e40bc3bcd4e442de0c7a0": "abf6d20bae62bc00a28269ed93f34d44",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f009e32aeb3c608b406b0963da3138c1",
".git/logs/refs/heads/gh-pages": "e2880898eaf906e498294f11cea3b713",
".git/logs/refs/remotes/origin/gh-pages": "38caab45a94582c5ec30bbafae39324a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "54afaf1c40422cc619301327410e8378",
".git/refs/remotes/origin/gh-pages": "54afaf1c40422cc619301327410e8378",
".git/index": "b84e1f9fe2ccdcf32270a855ec78e04d",
".git/COMMIT_EDITMSG": "f41191bb585c1ce8dcdea2d25fbaea8a",
"assets/AssetManifest.json": "ead7bb9c7516dbe930f09489553f8d64",
"assets/NOTICES": "8ada7369c83d49116601ab9a0bcb9ba4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e34b658ac426f94c026d26a09759197f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "7286c70dee5433fbc27a113ef6bfbe70",
"assets/fonts/MaterialIcons-Regular.otf": "1264931ba29770971e1cedb590e95125",
"assets/assets/Logo.png": "0ed64a9faff5784942aee07ed3bc7282",
"assets/assets/icons/ic_square.png": "b8be1a83dc4d3588d2f4bfa32c1411c1",
"assets/assets/icons/ic_close.png": "567909f4b174360415fd8ea16b751242",
"assets/assets/icons/ic_location.png": "de345bfe84de1b401b1083d2a8e8fca5",
"assets/assets/icons/ic_lock.png": "b1b41ecf17b1eec7bae7b98cc9e4066c",
"assets/assets/icons/ic_map_pin_red.png": "d5b402238c07d2ff4238ed9ea1b6c880",
"assets/assets/icons/ic_play.png": "edaa9e3bc0f7f0c9dd7cca5f0c6bc343",
"assets/assets/icons/ic_map_pin_purple.png": "f6ea97d0bcd619a9e04d07613b2834ca",
"assets/assets/icons/ic_back_white.png": "49806336c6c4c1e70281b5edaa3125d1",
"assets/assets/page1.jpg": "68aa950a8de01a959a1fef63438098e4",
"assets/assets/page3.jpg": "11e622be4054dcf06f888f25f1f6f262",
"assets/assets/page2.jpg": "5e9b2243b58772d9a18713e4e922e82c",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
