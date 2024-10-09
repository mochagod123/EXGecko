'use strict';

function kotae() {
	try {
		var span = document.getElementsByClassName(" gadget-title-drill")[0];
		span.insertAdjacentHTML('beforeend', '<button id="kot' + '" onclick="drill.drawCorrectAnswer()" />答え</button>');
	} catch(e) {
		var span = document.getElementsByClassName(" gadget-title-test ")[0];
		span.insertAdjacentHTML('beforeend', '<button id="kot' + '" onclick="drill.drawCorrectAnswer()" />答え</button>');
	}
}

function main(e) {

    const jsInitCheckTimer = setInterval(jsLoaded, 100);
    function jsLoaded() {
		if (window.location.href == "https://ela.education.ne.jp/students/home")
		{
			var a = document.getElementsByClassName("gadget-growimage button nor")[0];

			a.innerHTML = "<img src=" + localStorage.getItem("shokubutu") + ">"
		} else if (window.location.href == "https://ela.education.ne.jp/students/lookinback") {
			var a = document.getElementsByClassName("gadget-growimage")[0];
			
			a.innerHTML = "<img src=" + localStorage.getItem("shokubutu") + ">"
		}

		if (window.location.href != "https://ela.education.ne.jp/students")
		{
			if (window.location.href != "https://ela.education.ne.jp/students/home/libraries") {
				var a = document.getElementsByClassName("name")[0];
				a.innerHTML = "<dd>" + `<font color="${localStorage.getItem("nickcl")}">` + localStorage.getItem("nick") + '</span>' + "</dd>"
				
			}
		}

		var a = document.getElementsByClassName("copyright")[0];
		
		a.innerHTML = `Plugin by 暇人`

		if (localStorage.getItem("shokubutu") === null) {
			localStorage.setItem("shokubutu", "https://originalnews.nico/wp-content/uploads/2021/04/28183640/mhcms_03.jpg");
		};
	
		if (localStorage.getItem("nick") === null) {
			localStorage.setItem("nick", "匿名さん");
		};
	}

	if (window.location.href == "https://ela.education.ne.jp/students/home")
	{
		var a = document.getElementsByClassName("gadget-growimage button nor")[0];
		a.insertAdjacentHTML('afterend', `<a href="${localStorage.getItem("shokubutu")}">画像URL</a>`);
		a.insertAdjacentHTML('afterend', `<a href="javascript:var wh = window.prompt('1~33までを入れて?');localStorage.setItem('shokubutu', '/images/grows_2023/gr0' + wh + '.png?tm=1680272550');">成長段階変更</a><br>`);
		a.insertAdjacentHTML('afterend', `<a href="javascript:var wh = window.prompt('画像URLを入れて?');localStorage.setItem('shokubutu', wh);">植物の画像変更</a><br>`);

		var name = document.getElementsByClassName("login-name")[0];
		name.insertAdjacentHTML('afterend', `<a href="javascript:var wh = window.prompt('名前を入れて?');var cl = window.prompt('色を入れて？');localStorage.setItem('nick', wh);localStorage.setItem('nickcl', cl);">名前変更</a><br>`);

		var msgbox = document.getElementsByClassName("content-block free_choice")[0];
		msgbox.insertAdjacentHTML('afterend', `<br><a href="javascript:var wh = window.prompt('メッセージを入れて?');showNotification(wh)">メッセージボックス</a><br>`);

		const element = document.getElementsByClassName("tiles_10")[0];
		element.insertAdjacentHTML('beforeend', `<a href="https://github.com/mochagod123" target="contents_115" onclick="log_contents(115)" class="docs-creator">
		                  <img class="button nor" src="https://avatars.githubusercontent.com/u/172371901?v=4" width="85px" height="65px" alt="">
		                </a>`);
	}

	if (window.location.href.includes('https://ela.education.ne.jp/students/questions/question')) {
		kotae();
	}

	// sendLoginMessage(window.location.href, localStorage.getItem("nick"))
}

function keypress_ivent(e) {
	//ここにいれる
}
// ページ読み込み後に実行するよう設定
window.addEventListener('keypress', keypress_ivent);
window.addEventListener("load", main, false);