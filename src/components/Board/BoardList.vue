<template>
  <div>
    <div class="col-12">
      <div class="card recent-sales overflow-auto">
        <div class="card-body">
          <h5 class="card-title">Recent Sales <span>| Today</span></h5>

          <table class="table table-borderless datatable">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">날짜</th>
                <th scope="col">제목</th>
                <th scope="col">작성자</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><a href="#">#2457</a></th>
                <td>Brandon Jacob</td>
                <td><a href="#" class="text-primary">At praesentium minu</a></td>
                <td>$64</td>
                <td><span class="badge bg-success">Approved</span></td>
              </tr>
              <tr>
                <th scope="row"><a href="#">#2147</a></th>
                <td>Bridie Kessler</td>
                <td><a href="#" class="text-primary">Blanditiis dolor omnis similique</a></td>
                <td>$47</td>
                <td><span class="badge bg-warning">Pending</span></td>
              </tr>
              <tr>
                <th scope="row"><a href="#">#2049</a></th>
                <td>Ashleigh Langosh</td>
                <td><a href="#" class="text-primary">At recusandae consectetur</a></td>
                <td>$147</td>
                <td><span class="badge bg-success">Approved</span></td>
              </tr>
              <tr>
                <th scope="row"><a href="#">#2644</a></th>
                <td>Angus Grady</td>
                <td><a href="#" class="text-primar">Ut voluptatem id earum et</a></td>
                <td>$67</td>
                <td><span class="badge bg-danger">Rejected</span></td>
              </tr>
              <tr>
                <th scope="row"><a href="#">#2644</a></th>
                <td>Raheem Lehner</td>
                <td><a href="#" class="text-primary">Sunt similique distinctio</a></td>
                <td>$165</td>
                <td><span class="badge bg-success">Approved</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardContent",
};
// document.addEventListener("DOMContentLoaded", () => {
//   new ApexCharts(document.querySelector("#reportsChart"), {
//     series: [
//       {
//         name: "Sales",
//         data: [31, 40, 28, 51, 42, 82, 56],
//       },
//       {
//         name: "Revenue",
//         data: [11, 32, 45, 32, 34, 52, 41],
//       },
//       {
//         name: "Customers",
//         data: [15, 11, 32, 18, 9, 24, 11],
//       },
//     ],
//     chart: {
//       height: 350,
//       type: "area",
//       toolbar: {
//         show: false,
//       },
//     },
//     markers: {
//       size: 4,
//     },
//     colors: ["#4154f1", "#2eca6a", "#ff771d"],
//     fill: {
//       type: "gradient",
//       gradient: {
//         shadeIntensity: 1,
//         opacityFrom: 0.3,
//         opacityTo: 0.4,
//         stops: [0, 90, 100],
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//       width: 2,
//     },
//     xaxis: {
//       type: "datetime",
//       categories: [
//         "2018-09-19T00:00:00.000Z",
//         "2018-09-19T01:30:00.000Z",
//         "2018-09-19T02:30:00.000Z",
//         "2018-09-19T03:30:00.000Z",
//         "2018-09-19T04:30:00.000Z",
//         "2018-09-19T05:30:00.000Z",
//         "2018-09-19T06:30:00.000Z",
//       ],
//     },
//     tooltip: {
//       x: {
//         format: "dd/MM/yy HH:mm",
//       },
//     },
//   }).render();
// });
</script>

<style>
@import "@/assets/css/board.css";
</style>
