/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b363a9713ff43db40b8ac2683c270f93"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.874f5e71.css",
    "revision": "65297f51f5cab3bf1a2f70191982a0c8"
  },
  {
    "url": "assets/img/add_project.7a9b6c2a.png",
    "revision": "7a9b6c2af6e032fe29d026f2776b1168"
  },
  {
    "url": "assets/img/get_project_id_Invalid_project_id.47cde480.png",
    "revision": "47cde480a2592cdb9ee8acf23d403d4b"
  },
  {
    "url": "assets/img/get_project_id_no_project_with_such_id.5b2e4a15.png",
    "revision": "5b2e4a1517ba569701c53560892e4600"
  },
  {
    "url": "assets/img/get_project_id.ed311044.png",
    "revision": "ed3110443c81af52f6d7ea4e062a5328"
  },
  {
    "url": "assets/img/get_projects.e7bae362.png",
    "revision": "e7bae3623a34af1acd934cd345ccd788"
  },
  {
    "url": "assets/img/get_user_id_invalid_user_id.331ece46.png",
    "revision": "331ece4612469a5b716a21387b4442dd"
  },
  {
    "url": "assets/img/get_user_id_no_user_with_such_id.9f3360e6.png",
    "revision": "9f3360e62fb1ce90b2c3fc0383a191de"
  },
  {
    "url": "assets/img/get_user_id.ecf901e9.png",
    "revision": "ecf901e923fb56bcf62e7573895c7653"
  },
  {
    "url": "assets/img/get_user_login_no_user_with_such_login.3c6b003b.png",
    "revision": "3c6b003b07dfba1deb3b737d7211866b"
  },
  {
    "url": "assets/img/get_user_login.66ea4dbb.png",
    "revision": "66ea4dbbecc1d495fad83c169244d33d"
  },
  {
    "url": "assets/img/get_users.72b6ce8d.png",
    "revision": "72b6ce8d62c8ffc86c7a8b3e6a952a69"
  },
  {
    "url": "assets/img/MySQL.8db3eeeb.png",
    "revision": "8db3eeebdfb320985ce9aec2fee77203"
  },
  {
    "url": "assets/img/project_add_test.24d8cf13.png",
    "revision": "24d8cf13661818f43bde750a48534fc2"
  },
  {
    "url": "assets/img/project_delete_id_invalid_project_id.14bfda6b.png",
    "revision": "14bfda6b125ed38c9e2298ee6febda37"
  },
  {
    "url": "assets/img/project_delete_id_nothing_to_delete.69c23ebf.png",
    "revision": "69c23ebfbb43b0ea3f524d837779cbab"
  },
  {
    "url": "assets/img/project_delete_id_test.19926344.png",
    "revision": "199263440473a6283b869bc26fd305bc"
  },
  {
    "url": "assets/img/project_delete_id.0935689a.png",
    "revision": "0935689aad8bebfb501adae4524fd745"
  },
  {
    "url": "assets/img/project_update_invalid_amount_of_keys.9fdac64c.png",
    "revision": "9fdac64cad5e53fe91be55ece5e9defd"
  },
  {
    "url": "assets/img/project_update_invalid_project_id.7be38dcf.png",
    "revision": "7be38dcfd466105f98440bc5a75772a3"
  },
  {
    "url": "assets/img/project_update_nothing_to_update.25d2eff8.png",
    "revision": "25d2eff8aaf42fcb26d76e21f9fab9fa"
  },
  {
    "url": "assets/img/project_update_test.a3d6c233.png",
    "revision": "a3d6c233aa87a268e325138fd1074c8a"
  },
  {
    "url": "assets/img/project_update.3b22a92a.png",
    "revision": "3b22a92ac434e51acca85a91f615c014"
  },
  {
    "url": "assets/img/Run_server.2980945a.png",
    "revision": "2980945a8372b95d757cf2584874ceaf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/user_add_conflict.15a6c640.png",
    "revision": "15a6c640b02cf1c81828b089eb28b7e2"
  },
  {
    "url": "assets/img/user_add_invalid_amount_of_keys.6d0052e5.png",
    "revision": "6d0052e52a7ba1a67c5f8bdb7dbac21c"
  },
  {
    "url": "assets/img/user_add_invalid_role.a5c760e0.png",
    "revision": "a5c760e0a62ad90cf2aa7f6661d1cebf"
  },
  {
    "url": "assets/img/user_add_test.1616807d.png",
    "revision": "1616807de488a72bb67d8c1f690c3ac4"
  },
  {
    "url": "assets/img/user_add.1bd21b2e.png",
    "revision": "1bd21b2eec6f663f45e36c90ac23e452"
  },
  {
    "url": "assets/img/user_delete_id_invalid_user_id.0b7e5d33.png",
    "revision": "0b7e5d336eaa3cc31c471142fc7b1e0e"
  },
  {
    "url": "assets/img/user_delete_id_nothing_to_delete.9e6e470d.png",
    "revision": "9e6e470dbb849590fe01f6561d97dfec"
  },
  {
    "url": "assets/img/user_delete_id_test.514e6dc2.png",
    "revision": "514e6dc2b1f6c1d89897ca7d2af446ee"
  },
  {
    "url": "assets/img/user_delete_id.88924d9f.png",
    "revision": "88924d9f043cd0ad48a1ba7bcca5c607"
  },
  {
    "url": "assets/img/user_update_conflict.0d43559e.png",
    "revision": "0d43559e63b86769f8c42b2cebe738c6"
  },
  {
    "url": "assets/img/user_update_invalid_amount_of_keys.5dea73d8.png",
    "revision": "5dea73d8d5a904e7564a52da5217c7b3"
  },
  {
    "url": "assets/img/user_update_invalid_user_id.6ea040b9.png",
    "revision": "6ea040b95d876f6496d50b999163ed7c"
  },
  {
    "url": "assets/img/user_update_nothing_to_update.28034cbe.png",
    "revision": "28034cbef8ae18cc871d08ae7f704508"
  },
  {
    "url": "assets/img/user_update_test.0b73c0ca.png",
    "revision": "0b73c0ca100e06fe0923d5e22f67ef28"
  },
  {
    "url": "assets/img/user_update.b6237574.png",
    "revision": "b6237574ef83fa5b7d7277390e4d899f"
  },
  {
    "url": "assets/js/10.058efe11.js",
    "revision": "48bb5d0fa29784f6ce9247ff07a25981"
  },
  {
    "url": "assets/js/11.d83ebd41.js",
    "revision": "90c08e3abcfd250d6d2ff4bbeb1d76c0"
  },
  {
    "url": "assets/js/12.00f9d180.js",
    "revision": "c90723f2052c6724edffc737b7a80498"
  },
  {
    "url": "assets/js/13.8e04c8f9.js",
    "revision": "c31ad2f724c31a406c87adb39abf24e7"
  },
  {
    "url": "assets/js/14.a1548b5d.js",
    "revision": "bfad206eea6e032b312c7a6d098767cc"
  },
  {
    "url": "assets/js/15.752265c4.js",
    "revision": "e09bd1e970ed4b5b8f519a95fd3e22a0"
  },
  {
    "url": "assets/js/16.0f8e093d.js",
    "revision": "762eaf218675eecf95659eeac12f3d4b"
  },
  {
    "url": "assets/js/17.d8115c6c.js",
    "revision": "72d38e882f7a26a28ac350d36bb22315"
  },
  {
    "url": "assets/js/18.a7b33f14.js",
    "revision": "de04a4dbf286b7b19d4e9634de0b8c0c"
  },
  {
    "url": "assets/js/19.c2801565.js",
    "revision": "9161432207e0b5c4c75bedb5bdecbc9e"
  },
  {
    "url": "assets/js/2.f83c42ea.js",
    "revision": "2674b960136c68f94fedf8644be686b1"
  },
  {
    "url": "assets/js/20.80c9f1b7.js",
    "revision": "174388afbe66fff587bf8a61e294ea22"
  },
  {
    "url": "assets/js/21.9f49ff0a.js",
    "revision": "7dd290781c9d0de8011e4fc1e1b2bc4c"
  },
  {
    "url": "assets/js/22.f011ba89.js",
    "revision": "ec16c0b45d8f69ef15f1329726be7036"
  },
  {
    "url": "assets/js/23.e30e9ac8.js",
    "revision": "4e7fc8eb9a776c68be2d97f13dcb4aa2"
  },
  {
    "url": "assets/js/24.888dd86e.js",
    "revision": "1de598fa9299e439806623fafcddc651"
  },
  {
    "url": "assets/js/26.cf2af6f5.js",
    "revision": "30d8fc8b76d239ebafc3160a6a773e90"
  },
  {
    "url": "assets/js/3.370f022d.js",
    "revision": "d5ad8258d2d830ab1814c7fd0feff352"
  },
  {
    "url": "assets/js/4.4ccdd9af.js",
    "revision": "59f7a41bc0eec5641578ad31d838ab1f"
  },
  {
    "url": "assets/js/5.b80ab3fe.js",
    "revision": "ff771e6d51257990b98b9cdfaea0e507"
  },
  {
    "url": "assets/js/6.e1d58453.js",
    "revision": "f21b359d076b96afcf4916f48cb4c142"
  },
  {
    "url": "assets/js/7.51f1a8af.js",
    "revision": "983bb003cc37cc94254daf7057bada30"
  },
  {
    "url": "assets/js/8.b19cb7c7.js",
    "revision": "b899a0b789091696e396911fbda98f0a"
  },
  {
    "url": "assets/js/9.08d86688.js",
    "revision": "bdac4bb1461b36eeeb0efb6923fecdbd"
  },
  {
    "url": "assets/js/app.b74a9c1e.js",
    "revision": "d73acd49598a799a78c6daae5004cf9b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "008d5ef88bb7d8f0b5becb46e3279996"
  },
  {
    "url": "design/index.html",
    "revision": "8d5516349d29f3ad1e28d4d6410db7a0"
  },
  {
    "url": "index.html",
    "revision": "6d083b6a7c0e62669b4cab267bc74c87"
  },
  {
    "url": "intro/index.html",
    "revision": "6056000f585948cd648502848f327a41"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "aa150d4e3d82c7aba4286cd662096d7c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a558038257525335adb3be36a152d765"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "15dfb89b88adb85ccc29cd84ebdc8bd1"
  },
  {
    "url": "software/index.html",
    "revision": "7f54eb9292189561099545a890b4a3a4"
  },
  {
    "url": "test/index.html",
    "revision": "4382eacd252b57d3bed98382575424d3"
  },
  {
    "url": "use cases/index.html",
    "revision": "72c1de73a8985423033eccdb0a19d4a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
