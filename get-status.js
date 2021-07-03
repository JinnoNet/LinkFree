window.onload = function() {
  let req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://raw.githubusercontent.com/JinnoNet/status/main/status-json.json"
  );
  req.send(null);
  req.onload = function() {
    if (req.status == 200) {
    var data = req.responseText;
    var jsonData = JSON.parse(data);
    var status = jsonData.status;
    var timeLag = jsonData.timeLag;
    var date = 
      jsonData.upDateTime.y +
      "年" +
      jsonData.upDateTime.m +
      "月" +
      jsonData.upDateTime.d +
      "日 " +
      jsonData.upDateTime.H +
      ":" +
      jsonData.upDateTime.M +
      ":" +
      jsonData.upDateTime.S +
      " 更新(UTC+9)";

    if (status === "Online") {
      document.getElementById("status").innerHTML = "<span class='icon-discord'></span><p>Online</p>";
      document.querySelector('.status').style.backgroundColor = "#009222"
      document.querySelector('.status').style.border = 'solid #009222 2px'
      
    } else {
      document.getElementById("status").innerHTML = "<span class='icon-discord'></span><p>" + timeLag + "前までOnline</p>";
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
