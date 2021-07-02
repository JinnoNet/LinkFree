window.onload = function() {
  let req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://raw.githubusercontent.com/JinnoNet/online-status-json/main/status-json.json"
  );
  req.send(null);
  req.onload = function() {
    if (req.status == 200) {
    var data = req.responseText;
    var jsonData = JSON.parse(data);
    var status = jsonData.status;
    var duration = jsonData.duration;
    var date =
      jsonData.date.y +
      "年" +
      jsonData.date.m +
      "月" +
      jsonData.date.d +
      "日 " +
      jsonData.date.H +
      ":" +
      jsonData.date.M +
      ":" +
      jsonData.date.S +
      " 更新(UTC+9)";

    if (status === "Online") {
      document.getElementById("status").innerHTML = "<span class='icon-discord'></span><p>Online</p>";
      document.querySelector('.status').style.backgroundColor = "#009222"
      document.querySelector('.status').style.border = 'solid #009222 2px'
      
    } else {
      document.getElementById("status").innerHTML = "<span class='icon-discord'></span><p>" + duration + "時間前までOnline</p>";
      document.querySelector('.status').style.backgroundColor = "#292929"
      document.querySelector('.status').style.border = 'solid #292929 2px'
    }
    document.getElementById("dateTime").innerHTML = "<p>" + date + "</p>";
  } else {
    document.getElementById("status").innerHTML = "<p>取得できません。</p>";
    document.querySelector('.status').style.backgroundColor = "#464646"
    document.querySelector('.status').style.border = 'solid #464646 2px'
  };
  }
};
