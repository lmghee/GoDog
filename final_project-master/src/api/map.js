import { httpMake } from "@/api/index";

const api = httpMake();

function getLast(event) {
  console.log(event.target.value);
  this.selGugun = event.target.value;
}

async function getTourList() {
  document.getElementById("coffeeMenu").className = "";
  document.getElementById("houseMenu").className = "";
  document.getElementById("tourMenu").className = "";
  document.getElementById("actMenu").className = "";
  document.getElementById("hospitalMenu").className = "";
  if (this.selGugun === "구군선택") {
    this.initList();
  } else {
    this.setPc01Markers(null);
    this.setPc02Markers(null);
    this.setPc03Markers(null);
    this.setPc04Markers(null);
    this.setPc05Markers(null);
    await api
      .get(`/map/travellist?areaName=${this.selGugun}`)
      .then((response) => (this.selList = response.data.regionlist));
    this.displayMarker2();
  }
}

function initMap() {
  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(37.790126, 128.344644), // 지도의 중심좌표
      level: 5, // 지도의 확대 레벨
    };
  this.map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  var zoomControl = new kakao.maps.ZoomControl();
  this.map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  // 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
  kakao.maps.event.addListener(this.map, "zoom_changed", function () {
    // 지도의 현재 레벨을 얻어옵니다
    // var level = this.map.getLevel();
    // console.log(level);
    // document.querySelector("#container").addEventListener("wheel", function () {
    console.log(this.map);
  });

  this.displayMarker();
}
async function initList() {
  await api.get(`/map/travelmap`).then((response) => {
    this.pc01 = response.data.PC01;
    this.pc02 = response.data.PC02;
    this.pc03 = response.data.PC03;
    this.pc04 = response.data.PC04;
    this.pc05 = response.data.PC05;
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    }
  });
}

function createMarkerImage(src, size, options) {
  var markerImage = new kakao.maps.MarkerImage(src, size, options);
  return markerImage;
}

function displayMarker() {
  console.log(this.pc01);
  this.pc01Makers = [];
  this.pc02Makers = [];
  this.pc03Makers = [];
  this.pc04Makers = [];
  this.pc05Makers = [];
  this.pcLength.push(this.pc01.length);
  this.pcLength.push(this.pc02.length);
  this.pcLength.push(this.pc03.length);
  this.pcLength.push(this.pc04.length);
  this.pcLength.push(this.pc05.length);

  var bounds = new kakao.maps.LatLngBounds();

  for (let i = 0; i < 5; i++) {
    var markerImageSrc = require("@/assets/img/category.png");

    var imageSize = new kakao.maps.Size(this.makerSet[i][0], this.makerSet[i][1]),
      imageOptions = {
        spriteOrigin: new kakao.maps.Point(this.makerSet[i][2], this.makerSet[i][3]),
        spriteSize: new kakao.maps.Size(this.makerSet[i][4], this.makerSet[i][5]),
      };

    // 마커이미지와 마커를 생성합니다
    var markerImage = this.createMarkerImage(markerImageSrc, imageSize, imageOptions);

    for (let j = 0; j < this.pcLength[i]; j++) {
      if (i === 0) {
        var latitude = this.pc01[j].latitude;
        var longitude = this.pc01[j].longitude;
        var title = this.pc01[j].title;
      } else if (i === 1) {
        latitude = this.pc02[j].latitude;
        longitude = this.pc02[j].longitude;
        title = this.pc02[j].title;
      } else if (i === 2) {
        latitude = this.pc03[j].latitude;
        longitude = this.pc03[j].longitude;
        title = this.pc03[j].title;
      } else if (i === 3) {
        latitude = this.pc04[j].latitude;
        longitude = this.pc04[j].longitude;
        title = this.pc04[j].title;
      } else if (i === 4) {
        latitude = this.pc05[j].latitude;
        longitude = this.pc05[j].longitude;
        title = this.pc05[j].title;
      }
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: this.map, //마커를 표시할 지도
        position: new kakao.maps.LatLng(parseFloat(latitude), parseFloat(longitude)), // 마커를 표시할 위치
        title: title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });

      bounds.extend(new kakao.maps.LatLng(parseFloat(latitude), parseFloat(longitude)));

      if (i === 0) {
        this.pc01Makers.push(marker);
      } else if (i === 1) {
        this.pc02Makers.push(marker);
      } else if (i === 2) {
        this.pc03Makers.push(marker);
      } else if (i === 3) {
        this.pc04Makers.push(marker);
      } else if (i === 4) {
        this.pc05Makers.push(marker);
      }
    }
  }
  this.map.setBounds(bounds);
}

function displayMarker2() {
  this.pc01 = [];
  this.pc02 = [];
  this.pc03 = [];
  this.pc04 = [];
  this.pc05 = [];
  this.pc01Makers = [];
  this.pc02Makers = [];
  this.pc03Makers = [];
  this.pc04Makers = [];
  this.pc05Makers = [];
  console.log(this.selList);

  var bounds = new kakao.maps.LatLngBounds();

  for (let i = 0; i < this.selList.length; i++) {
    var num = this.selList[i].pccode.substring(3, 4) - 1;
    var markerImageSrc = require("@/assets/img/category.png");

    var imageSize = new kakao.maps.Size(this.makerSet[num][0], this.makerSet[num][1]),
      imageOptions = {
        spriteOrigin: new kakao.maps.Point(this.makerSet[num][2], this.makerSet[num][3]),
        spriteSize: new kakao.maps.Size(this.makerSet[num][4], this.makerSet[num][5]),
      };

    // 마커이미지와 마커를 생성합니다
    var markerImage = this.createMarkerImage(markerImageSrc, imageSize, imageOptions);

    var latitude = this.selList[i].latitude;
    var longitude = this.selList[i].longitude;

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: this.map, //마커를 표시할 지도
      position: new kakao.maps.LatLng(parseFloat(latitude), parseFloat(longitude)), // 마커를 표시할 위치
      title: this.selList[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
    });

    bounds.extend(new kakao.maps.LatLng(parseFloat(latitude), parseFloat(longitude)));

    if (num === 0) {
      this.pc01Makers.push(marker);
    } else if (num === 1) {
      this.pc02Makers.push(marker);
    } else if (num === 2) {
      this.pc03Makers.push(marker);
    } else if (num === 3) {
      this.pc04Makers.push(marker);
    } else if (num === 4) {
      this.pc05Makers.push(marker);
    }
  }

  this.map.setBounds(bounds);
}

function changeMarker(type) {
  if (type === "pc01") {
    console.log(type);
    // 커피숍 카테고리를 선택된 스타일로 변경하고
    document.getElementById("coffeeMenu").className = "menu_selected";

    // 그 외 카테고리는 선택되지 않은 스타일로 바꿉니다
    document.getElementById("houseMenu").className = "";
    document.getElementById("tourMenu").className = "";
    document.getElementById("actMenu").className = "";
    document.getElementById("hospitalMenu").className = "";

    // 커피숍 마커들만 지도에 표시하도록 설정합니다
    this.setPc01Markers(this.map);
    this.setPc02Markers(null);
    this.setPc03Markers(null);
    this.setPc04Markers(null);
    this.setPc05Markers(null);
  } else if (type === "pc02") {
    console.log(type);
    document.getElementById("coffeeMenu").className = "";
    document.getElementById("houseMenu").className = "menu_selected";
    document.getElementById("tourMenu").className = "";
    document.getElementById("actMenu").className = "";
    document.getElementById("hospitalMenu").className = "";

    this.setPc01Markers(null);
    this.setPc02Markers(this.map);
    this.setPc03Markers(null);
    this.setPc04Markers(null);
    this.setPc05Markers(null);
  } else if (type === "pc03") {
    console.log(type);
    document.getElementById("coffeeMenu").className = "";
    document.getElementById("houseMenu").className = "";
    document.getElementById("tourMenu").className = "menu_selected";
    document.getElementById("actMenu").className = "";
    document.getElementById("hospitalMenu").className = "";

    this.setPc01Markers(null);
    this.setPc02Markers(null);
    this.setPc03Markers(this.map);
    this.setPc04Markers(null);
    this.setPc05Markers(null);
  } else if (type === "pc04") {
    console.log(type);
    document.getElementById("coffeeMenu").className = "";
    document.getElementById("houseMenu").className = "";
    document.getElementById("tourMenu").className = "";
    document.getElementById("actMenu").className = "menu_selected";
    document.getElementById("hospitalMenu").className = "";

    this.setPc01Markers(null);
    this.setPc02Markers(null);
    this.setPc03Markers(null);
    this.setPc04Markers(this.map);
    this.setPc05Markers(null);
  } else if (type === "pc05") {
    console.log(type);
    document.getElementById("coffeeMenu").className = "";
    document.getElementById("houseMenu").className = "";
    document.getElementById("tourMenu").className = "";
    document.getElementById("actMenu").className = "";
    document.getElementById("hospitalMenu").className = "menu_selected";

    this.setPc01Markers(null);
    this.setPc02Markers(null);
    this.setPc03Markers(null);
    this.setPc04Markers(null);
    this.setPc05Markers(this.map);
  }
}

function setPc01Markers(map) {
  for (var i = 0; i < this.pc01Makers.length; i++) {
    this.pc01Makers[i].setMap(map);
  }
}

function setPc02Markers(map) {
  for (var i = 0; i < this.pc02Makers.length; i++) {
    this.pc02Makers[i].setMap(map);
  }
}

function setPc03Markers(map) {
  for (var i = 0; i < this.pc03Makers.length; i++) {
    this.pc03Makers[i].setMap(map);
  }
}

function setPc04Markers(map) {
  for (var i = 0; i < this.pc04Makers.length; i++) {
    this.pc04Makers[i].setMap(map);
  }
}

function setPc05Markers(map) {
  for (var i = 0; i < this.pc05Makers.length; i++) {
    this.pc05Makers[i].setMap(map);
  }
}

export {
  getLast,
  getTourList,
  initMap,
  initList,
  displayMarker,
  displayMarker2,
  changeMarker,
  setPc01Markers,
  setPc02Markers,
  setPc03Markers,
  setPc04Markers,
  setPc05Markers,
};
