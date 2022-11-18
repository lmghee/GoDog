<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: "TrevelMap",
  data() {
    return {
      pc01: [],
      pc02: [],
      pc03: [],
      pc04: [],
      pc05: [],
    };
  },
  created() {
    // const url = "http://pettravel.kr/api/listPart.do?";
    // var paramPage = 1;
    // const pageBlock = 50;
    // var partCode = "PC01";
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
    },
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 600px;
}
</style>
