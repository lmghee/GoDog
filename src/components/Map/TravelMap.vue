<template>
  <div id="map-container">
    <div class="row col-md-12 justify-content-center mb-2">
      <div class="form-group col-md-2">
        <select class="form-select bg-secondary text-light" id="sido">
          <option value="">강원도</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <select class="form-select bg-secondary text-light" id="gugun" @change="getLast($event)">
          <option value="구군선택">구군선택</option>
          <option v-for="(item, index) in gugunList" :key="index" :value="item">{{ item }}</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <button type="button" id="list-btn" class="btn btn-outline-primary" @click="getTourList">
          관광 정보 가져오기
        </button>
      </div>
    </div>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <!-- <div class="spinner-div" v-if="isLoading">
      <q-spinner-cube color="primary" size="5em" />
    </div> -->
    <div id="mapwrap">
      <!-- <div class="mb-2" v-show="false">
        <b-button id="mymodal" @click="showMsgBoxOne">Simple msgBoxOk</b-button>
      </div> -->
      <div v-show="false">
        <b-button id="mymodal" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>
        <b-modal id="bv-modal-example">
          <template #modal-title>
            <span class="modaltitle">{{ title }}</span>
          </template>
          <div class="d-block text-left">
            <h3 id="detail">상세주소 : {{ address }}</h3>
            <h3 id="tel">전화번호 : {{ tel }}</h3>
          </div>
          <template #modal-footer="{ cancel, hide }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <v-btn icon color="#e02b52" @click="addBookmark(cancel)"><v-icon>mdi-heart</v-icon></v-btn>
            <!-- <b-button size="sm" variant="danger" @click="cancel()"> 찜하기 </b-button> -->
            <!-- Button with custom close trigger value -->
            <b-button size="sm" variant="outline-secondary" @click="hide('forget')"> 닫기 </b-button>
          </template>
        </b-modal>
      </div>
      <div id="map" v-show="!isLoading"></div>
      <div class="category">
        <ul>
          <li id="coffeeMenu" @click="changeMarker('pc01')">
            <span class="ico_comm ico_coffee"></span>
            식음료
          </li>
          <li id="houseMenu" @click="changeMarker('pc02')">
            <span class="ico_comm ico_house"></span>
            숙박
          </li>
          <li id="tourMenu" @click="changeMarker('pc03')">
            <span class="ico_comm ico_tour"></span>
            관광지
          </li>
          <li id="actMenu" @click="changeMarker('pc04')">
            <span class="ico_comm ico_act"></span>
            체험
          </li>
          <li id="hospitalMenu" @click="changeMarker('pc05')">
            <span class="ico_comm ico_hospital"></span>
            동물병원
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const memberStore = "memberStore";

import { httpMake } from "@/api/index";
import LoadingSpinner from "@/components/Map/LoadingSpinner.vue";

const api = httpMake();

export default {
  name: "TrevelMap",
  components: { LoadingSpinner },
  data() {
    return {
      isLoading: true,
      gugunList: [],
      pc01: [],
      pc02: [],
      pc03: [],
      pc04: [],
      pc05: [],
      pc01Makers: [],
      pc02Makers: [],
      pc03Makers: [],
      pc04Makers: [],
      pc05Makers: [],
      pcLength: [],
      selGugun: null,
      selList: [],
      makerSet: [
        [27, 27, 10, -5, 36, 98],
        [27, 27, 8, 15, 33, 98],
        [27, 27, 4, 35, 30, 96],
        [27, 27, 4, 58, 30, 96],
        [27, 27, 4, 78, 30, 96],
      ],
      title: "",
      address: "",
      tel: "",
      contentSeq: null,
    };
  },
  created() {
    api.get(`/map/gugun`).then((response) => {
      this.gugunList = response.data.gugunlist;
      // console.log(response.data.gugunlist);
    }),
      this.initList();
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.$router.go();
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5e9a56d7c451eb1a6c578c840da9773d&libraries=services,clusterer";
      document.head.appendChild(script);
    }
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    getLast(event) {
      console.log(event.target.value);
      this.selGugun = event.target.value;
    },
    async getTourList() {
      document.getElementById("coffeeMenu").className = "";
      document.getElementById("houseMenu").className = "";
      document.getElementById("tourMenu").className = "";
      document.getElementById("actMenu").className = "";
      document.getElementById("hospitalMenu").className = "";
      if (this.selGugun === "구군선택") {
        this.isLoading = false;
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
    },
    initMap() {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.790126, 128.344644), // 지도의 중심좌표
          level: 5, // 지도의 확대 레벨
        };
      this.map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      this.displayMarker();
    },
    async initList() {
      await api.get(`/map/travelmap`).then((response) => {
        this.pc01 = response.data.PC01;
        this.pc02 = response.data.PC02;
        this.pc03 = response.data.PC03;
        this.pc04 = response.data.PC04;
        this.pc05 = response.data.PC05;
        if (window.kakao && window.kakao.maps) {
          this.initMap();
        }
        this.isLoading = false;
      });
    },
    createMarkerImage(src, size, options) {
      var markerImage = new kakao.maps.MarkerImage(src, size, options);
      return markerImage;
    },
    displayMarker() {
      this.pc01Makers = [];
      this.pc02Makers = [];
      this.pc03Makers = [];
      this.pc04Makers = [];
      this.pc05Makers = [];
      this.pcLength = [];
      this.pcLength.push(this.pc01.length);
      this.pcLength.push(this.pc02.length);
      this.pcLength.push(this.pc03.length);
      this.pcLength.push(this.pc04.length);
      this.pcLength.push(this.pc05.length);

      var bounds = new kakao.maps.LatLngBounds();

      // 마커 클러스터러를 생성합니다
      let clusterer = new kakao.maps.MarkerClusterer({
        map: this.map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10, // 클러스터 할 최소 지도 레벨
      });

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
          let latitude;
          let longitude;
          let title;
          let address;
          let tel;
          let contentSeq;
          if (i === 0) {
            latitude = this.pc01[j].latitude;
            longitude = this.pc01[j].longitude;
            title = this.pc01[j].title;
            address = this.pc01[j].address;
            tel = this.pc01[j].tel;
            contentSeq = this.pc01[j].contentSeq;
          } else if (i === 1) {
            latitude = this.pc02[j].latitude;
            longitude = this.pc02[j].longitude;
            title = this.pc02[j].title;
            address = this.pc02[j].address;
            tel = this.pc02[j].tel;
            contentSeq = this.pc02[j].contentSeq;
          } else if (i === 2) {
            latitude = this.pc03[j].latitude;
            longitude = this.pc03[j].longitude;
            title = this.pc03[j].title;
            address = this.pc03[j].address;
            tel = this.pc03[j].tel;
            contentSeq = this.pc03[j].contentSeq;
          } else if (i === 3) {
            latitude = this.pc04[j].latitude;
            longitude = this.pc04[j].longitude;
            title = this.pc04[j].title;
            address = this.pc04[j].address;
            tel = this.pc04[j].tel;
            contentSeq = this.pc04[j].contentSeq;
          } else if (i === 4) {
            latitude = this.pc05[j].latitude;
            longitude = this.pc05[j].longitude;
            title = this.pc05[j].title;
            address = this.pc05[j].address;
            tel = this.pc05[j].tel;
            contentSeq = this.pc05[j].contentSeq;
          }
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: this.map, //마커를 표시할 지도
            position: new kakao.maps.LatLng(parseFloat(latitude), parseFloat(longitude)), // 마커를 표시할 위치
            title: title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
            clickable: true,
          });

          kakao.maps.event.addListener(marker, "click", () => {
            this.title = title;
            this.address = address;
            this.tel = tel;
            this.contentSeq = contentSeq;
            document.querySelector("#mymodal").click();
            // document.getElementById("detail").innerHTML = "hello";
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
      clusterer.addMarkers(this.pc01Makers);
      clusterer.addMarkers(this.pc02Makers);
      clusterer.addMarkers(this.pc03Makers);
      clusterer.addMarkers(this.pc04Makers);
      clusterer.addMarkers(this.pc05Makers);
      this.map.setBounds(bounds);
    },
    displayMarker2() {
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
      let clusterer = new kakao.maps.MarkerClusterer({
        map: this.map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10, // 클러스터 할 최소 지도 레벨
      });
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

      clusterer.addMarkers(this.pc01Makers);
      clusterer.addMarkers(this.pc02Makers);
      clusterer.addMarkers(this.pc03Makers);
      clusterer.addMarkers(this.pc04Makers);
      clusterer.addMarkers(this.pc05Makers);
      this.map.setBounds(bounds);
    },
    changeMarker(type) {
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
    },
    setPc01Markers(map) {
      for (var i = 0; i < this.pc01Makers.length; i++) {
        this.pc01Makers[i].setMap(map);
      }
    },
    setPc02Markers(map) {
      for (var i = 0; i < this.pc02Makers.length; i++) {
        this.pc02Makers[i].setMap(map);
      }
    },
    setPc03Markers(map) {
      for (var i = 0; i < this.pc03Makers.length; i++) {
        this.pc03Makers[i].setMap(map);
      }
    },
    setPc04Markers(map) {
      for (var i = 0; i < this.pc04Makers.length; i++) {
        this.pc04Makers[i].setMap(map);
      }
    },
    setPc05Markers(map) {
      for (var i = 0; i < this.pc05Makers.length; i++) {
        this.pc05Makers[i].setMap(map);
      }
    },
    async addBookmark(cancel) {
      if (this.$store.state.memberStore.userInfo === null) {
        alert("로그인 후 이용 가능합니다.");
        this.$router.push({ name: "loginform" });
      } else {
        let bookmarkDto = {
          id: this.$store.state.memberStore.userInfo.userId,
          contentSeq: this.contentSeq,
        };
        console.log(this.title + ", " + this.address + ", " + this.tel + ", " + bookmarkDto);
        await api.post("/map/insertbk", bookmarkDto).then((response) => {
          if (response.data === "success") {
            alert("관심 지역으로 등록되었습니다.");
          } else if (response.data === "fail") {
            alert("이미 관심 지역으로 등록된 지역이거나 잠시 후에 다시 시도해 주십시오.");
          }
        });

        cancel();
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/map.css";
</style>
