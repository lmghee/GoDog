<template>
  <div id="main">
    <div id="map"></div>
    <div class="category">
      <ul>
        <li id="coffeeMenu" onclick="changeMarker('coffee')">
          <span class="ico_comm ico_coffee"></span>
          커피숍
        </li>
        <li id="storeMenu" onclick="changeMarker('store')">
          <span class="ico_comm ico_store"></span>
          편의점
        </li>
        <li id="carparkMenu" onclick="changeMarker('carpark')">
          <span class="ico_comm ico_carpark"></span>
          주차장
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "TrevelMap",
  data() {
    return {
      pc01: [],
      pc01location: [
        ["37.747381503046", "127.630154310527"],
        ["37.9152543465461", "127.720272370027"],
        ["37.8843707666682", "127.683178984882"],
        ["37.6971372819658", "127.710361611242"],
        ["37.7047302352898", "128.062938974935"],
        ["37.6971734021349", "127.894729548316"],
        ["37.6357036047999", "127.648613781139"],
        ["37.9309335965671", "127.781621590274"],
        ["37.6523370640771", "127.687334801646"],
        ["37.88259709810171", "127.77297704708683"],
        ["37.9017171161485", "127.697019864644"],
        ["37.860764261522", "127.762482823682"],
        ["37.8659197131017", "127.761847830397"],
        ["37.8398438631123", "127.76218026733"],
        ["37.9313601707332", "127.790376588308"],
      ],
      pc02: [],
      pc02location: [
        ["37.8398438631123", "127.76218026733"],
        ["37.8573446452206", "127.742713543193"],
        ["37.9296127963991", "127.778816835104"],
        ["37.9462775281342", "127.730399095531"],
        ["37.9528326517088", "127.746327491038"],
        ["37.9294184569595", "127.787522384522"],
        ["37.8901514322299", "127.76959167626"],
        ["37.8438991468181", "127.745403139926"],
        ["37.8777482570001", "127.734029871638"],
        ["37.9208381200867", "127.782209947509"],
        ["37.8666876548551", "127.731708595333"],
        ["37.925203195181", "127.753023062733"],
        ["37.8703181279392", "128.842976758593"],
      ],
      pc03: [],
      pc04: [],
      pc05: [],
    };
  },
  created() {
    const url = "https://pettravel.kr/api/listPart.do?";
    var paramPage = 1;
    const pageBlock = 50;
    var partCode = "PC01";
    var param = "page=" + paramPage + "&pageBlock=" + pageBlock + "&partCode=" + partCode;
    console.log(url + param);
    // axios.get(url + param).then((response) => (this.pc01 = response.data[0].resultList));
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
      this.markerPositions = [];
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5e9a56d7c451eb1a6c578c840da9773d&libraries=services";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.790126, 128.344644), // 지도의 중심좌표
          level: 10, // 지도의 확대 레벨
        };
      this.map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
      for (let i = 0; i < this.pc01.length; i++) {
        // this.pc01location.push([this.pc01[i].latitude, this.pc01[i].longitude]);
        console.log(this.pc01[i].latitude);
        console.log(this.pc01[i].longitude);
      }
      this.displayMarker1();
      this.displayMarker2();
      //   this.displayMarker3();
    },
    createMarkerImage(src, size, options) {
      var markerImage = new kakao.maps.MarkerImage(src, size, options);
      return markerImage;
    },
    displayMarker1() {
      var markerImageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png";

      for (var i = 0; i < this.pc01location.length; i++) {
        console.log("?");
        // // 마커 이미지의 이미지 크기 입니다
        // var imageSize = new kakao.maps.Size(24, 35);

        // // 마커 이미지를 생성합니다
        // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        var imageSize = new kakao.maps.Size(22, 26),
          imageOptions = {
            spriteOrigin: new kakao.maps.Point(10, 0),
            spriteSize: new kakao.maps.Size(36, 98),
          };

        // 마커이미지와 마커를 생성합니다
        var markerImage = this.createMarkerImage(markerImageSrc, imageSize, imageOptions);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(parseFloat(this.pc01location[i][0]), parseFloat(this.pc01location[i][1])), // 마커를 표시할 위치
          //   title: this.pc01location[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });

        marker.setMap(this.map);
      }
    },
    displayMarker2() {
      var markerImageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png";

      for (var i = 0; i < this.pc02location.length; i++) {
        console.log("??");
        var imageSize = new kakao.maps.Size(22, 26),
          imageOptions = {
            spriteOrigin: new kakao.maps.Point(10, 72),
            spriteSize: new kakao.maps.Size(36, 98),
          };
        // 마커이미지와 마커를 생성합니다
        var markerImage = this.createMarkerImage(markerImageSrc, imageSize, imageOptions);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(parseFloat(this.pc01location[i][0]), parseFloat(this.pc01location[i][1])), // 마커를 표시할 위치
          //   title: this.pc01location[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });

        marker.setMap(this.map);
      }
    },
    displayMarker3() {
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      for (var i = 0; i < this.pc01location.length; i++) {
        console.log("?");
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(parseFloat(this.pc01location[i][0]), parseFloat(this.pc01location[i][1])), // 마커를 표시할 위치
          //   title: this.pc01location[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });

        marker.setMap(this.map);
      }
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 600px;
  position: relative;
  top: 100px;
}
</style>
