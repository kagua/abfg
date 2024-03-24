
// 2024年3月24日　カグア！
// アブフグ～よく使うネット検索パック
// https://creator.theletter.jp/
// サブメニュー化など使い勝手はご自由に変えて下さい。
// MIT License 2024


//親メニュー

chrome.runtime.onInstalled.addListener(function (details) {
    /* コンテキストメニューを作成 */

const parent = chrome.contextMenus.create({
      id: "abfg",
      title: "ABFG2",
      contexts: ["all"],
      });



chrome.contextMenus.create({
  parentId: parent,
  id: "mojisuu",
  title: "★文字数カウント",
  contexts: ["all"],
});


chrome.contextMenus.create({
  parentId: parent,
  id: "trend",
  title: "★Googleトレンド",
  contexts: ["all"],
});


chrome.contextMenus.create({
  parentId: parent,
  id: "amazon",
  title: "★Amazon検索",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "youtube",
  title: "★YouTube検索",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "books",
  title: "★GooglePlayBooks検索",
  contexts: ["all"],
});


chrome.contextMenus.create({
  parentId: parent,
  id: "title",
  title: "ページタイトルをコピー",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "shohyo",
  title: "商標検索",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "ogp",
  title: "OGPデバッガー",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "url",
  title: "URLパラメータ生成",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "kokudo",
  title: "国土地理院",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "decode",
  title: "URLデコード",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "mining",
  title: "テキストマイニング",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "site",
  title: "→サイト内検索",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "pageinsight",
  title: "→PageInsight",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "similar",
  title: "→シミラー",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "whois",
  title: "→Whois",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "archive",
  title: "→Archive.Org",
  contexts: ["all"],
});

chrome.contextMenus.create({
  parentId: parent,
  id: "insta",
  title: "★Instagramハッシュタグページ",
  contexts: ["all"],
});


});
/* メインメニューここまで */



/* コンテキストメニューがクリックされた時の処理 */
chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "title":
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: title,
      });
      break;


    case "mojisuu":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: mojisuu,
        });
      });
      break;

    case "books":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: books,
        });
      });
      break;

    case "amazon":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: amazon,
        });
      });
      break;


    case "shohyo":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: shohyo,
        });
      });
      break;

    case "mining":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: mining,
        });
      });
      break;

    case "url":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: url,
        });
      });
      break;

    case "kokudo":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: kokudo,
        });
      });
      break;

    case "decode":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: decode,
        });
      });
      break;

    case "ogp":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: ogp,
        });
      });
      break;

    case "site":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: site,
        });
      });
      break;

    case "pageinsight":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: pageinsight,
        });
      });
      break;

    case "similar":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: similar,
        });
      });
      break;

    case "whois":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: whois,
        });
      });
      break;

    case "archive":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: archive,
        });
      });
      break;

    case "insta":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: insta,
        });
      });
      break;

    case "trend":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: trend,
        });
      });
      break;

    case "youtube":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: youtube,
        });
      });
      break;


  }
});
/* クリック検知 */




/* 選択した文字の処理 */

function insta() {
        var selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            var url = 'https://www.instagram.com/explore/tags/' + encodeURIComponent(selectedText) + '/';
            window.open(url, '_blank');
        }
}

function books() {
        var selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            var url = 'https://play.google.com/store/search?q=' + encodeURIComponent(selectedText) + '&c=books&hl=ja';
            window.open(url, '_blank');
        }
}

function amazon() {
        var selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            var url = 'http://www.amazon.co.jp/gp/search?keywords=' + encodeURIComponent(selectedText);
            window.open(url, '_blank');
        }
}

function youtube() {
        var selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            var url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(selectedText);
            window.open(url, '_blank');
        }
}


function trend() {
        var selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            var url = 'https://www.google.co.jp/trends/explore#q=' + encodeURIComponent(selectedText) + '%2C%20%E3%83%AD%E3%83%BC%E3%82%BD%E3%83%B3&geo=JP&cmpt=q&tz=Etc%2FGMT-9';
            window.open(url, '_blank');
        }
}

function mojisuu() {
        var selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            // インスタグラムで選択されたテキストを検索
            var url = encodeURIComponent(selectedText.length);
            // 新しいタブでURLを開く
            window.open(url, '_blank');
        }
}



/* URLを使った単純処理 */

function site() {
  var ttab = location.host;
  var t_url = "https://www.google.co.jp/search?q=site:" + ttab;
  window.open(t_url, '_blank');
}

function pageinsight() {
  var ttab = location.href;
  var t_url = "https://developers.google.com/speed/pagespeed/insights/?url=" + ttab;
  window.open(t_url, '_blank');
}

function similar() {
  var ttab = location.host;
  var t_url = "https://www.similarweb.com/website/" + ttab;
  window.open(t_url, '_blank');
}

function whois() {
  var ttab = location.host;
  var t_url = "http://seocheki.net/whois.php?w-url=" + ttab;
  window.open(t_url, '_blank');
}

function archive() {
  var ttab = location.href;
  var t_url = "https://web.archive.org/web/" + ttab;
  window.open(t_url, '_blank');
}

function title() {
  const element = document.createElement("textarea");
  element.value = document.title + "\n" + location.href;
  document.body.append(element);
  element.select();
  document.execCommand("copy");
  element.remove();}
/* 処理ここまで */


/* 単純リンク */

function shohyo() {
  var t_url = "https://www.j-platpat.inpit.go.jp/";
  window.open(t_url, '_blank');
}

function ogp() {
  var t_url = "https://developers.facebook.com/tools/debug/";
  window.open(t_url, '_blank');
}

function url() {
  var t_url = "https://ga-dev-tools.appspot.com/campaign-url-builder/";
  window.open(t_url, '_blank');
}

function kokudo() {
  var t_url = "https://user.numazu-ct.ac.jp/~tsato/webmap/map/lmap.html?data=history";
  window.open(t_url, '_blank');
}

function decode() {
  var t_url = "https://www.tagindex.com/tool/url.html";
  window.open(t_url, '_blank');
}

function mining() {
  var t_url = "http://textmining.userlocal.jp/";
  window.open(t_url, '_blank');
}



/* 処理ここまで */


/* otowa.kyouzai.com */
/*

参考：謝辞

Chrome拡張機能で右クリックメニューを作る方法 #chrome-extension - Qiita
https://qiita.com/plumfield56/items/e98c247888d82a79c7ea

現在開いているタブを別の環境で開くChrome拡張機能を作る
https://zenn.dev/meihei/articles/2e73a54c6ea678

Chrome拡張にコンテキストメニューを追加する
https://zenn.dev/satoshie/articles/a27c5091c9ac89

Chrome拡張機能 manifest.json Ver.3の書き方 #JavaScript - Qiita
https://qiita.com/shiro1212/items/12f0a767494a7b2ab0b3

自作したchrome拡張機能のインストール方法 | EXE MATE 株式会社
https://exemate.co.jp/archives/7594

Chrome 拡張機能を作って公開しよう⑥コンテキストメニューを作る - カエルの人
https://frogapp.net/blog/2021-08/chrome-extension-6/

Chrome拡張機能の申請手順 JavaScript - Qiita
https://qiita.com/sasao3/items/0606b67da01948ae58b7

*/

