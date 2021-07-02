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
      jsonData.date.h +
      ":" +
      jsonData.date.M +
      ":" +
      jsonData.date.s +
      " 更新(UTC+9)";

    if (status === "Online") {
      document.getElementById("status").innerText = "Online";
      document.querySelector('.status').style.backgroundColor = "#009222"
      document.querySelector('.status').style.border = 'solid #009222 2px'
      
    } else {
      document.getElementById("status").innerText =
        duration + "時間前までOnline";
      document.querySelector('.status').style.backgroundColor = "#292929"
      document.querySelector('.status').style.border = 'solid #292929 2px'
    }
    document.getElementById("dateTime").innerText = date;
  } else {
    document.getElementById("status").innerText = "取得できません。";
    document.querySelector('.status').style.backgroundColor = "#464646"
    document.querySelector('.status').style.border = 'solid #464646 2px'
  };
  }
};
