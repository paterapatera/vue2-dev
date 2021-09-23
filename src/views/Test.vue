<template>
  <div>
    <row>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <VABox title="bbbb" isBorder widgetType="box-widget">
          <div slot="content">aaaaaaaaaa</div>
        </VABox>
      </div>
    </row>
    <row>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <VABox widgetType="box-widget">
          <div slot="content">
            <span class="badge">26</span>
            <button
              type="button"
              id="sampleButtonSingleToggle"
              class="btn btn-primary"
              data-toggle="button"
              autocomplete="off"
            >
              サンプル
            </button>
          </div>
        </VABox>
      </div>
    </row>
    <row>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <VABox widgetType="box-widget">
          <div slot="content">
            <p>profileName={{ profile.name }}</p>
            <p v-on:click="profile.getProfile">
              groupsCount={{ groups.length }}
            </p>
          </div>
        </VABox>
      </div>
    </row>
    <row>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <VABox widgetType="box-widget">
          <div slot="content">
            <VAChart :chart-config="lineChart" />
          </div>
        </VABox>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <VABox widgetType="box-widget">
          <div slot="content">
            <div class="chart-price">
              <VAChart :chart-config="donutChart" />
              <p>256</p>
            </div>
          </div>
        </VABox>
      </div>
    </row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VABox from 'va/widgets/VABox.vue'
import VAChart from 'va/components/VAChart.vue'
import profile from '@/store/Profile'

@Component({
  components: { VABox, VAChart },
})
export default class Home extends Vue {
  profile = profile
  groups = [{ name: '111' }]
  lineChart = {
    type: 'line',
    data: {
      datasets: [
        {
          label: '発熱',
          backgroundColor: '#FF4B00',
          borderColor: '#FF4B00',
          data: [10, 20, 20, 10, 40, 30, 45],
        },
        {
          label: '微熱',
          backgroundColor: '#F6AA00',
          borderColor: '#F6AA00',
          data: [10, 20, 30, 0, 0, 30, 45],
        },
        {
          label: '正常',
          backgroundColor: '#005AFF',
          borderColor: '#005AFF',
          data: [10, 20, 30, 40, 30, 30, 45],
        },
        {
          label: '未登録',
          backgroundColor: '#909090',
          // backgroundColor: 'rgba(0, 0, 0, 0.0)',
          borderColor: '#909090',
          data: [10, 20, 30, 40, 2, 30, 45],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [{ stacked: true }],
        xAxes: [
          {
            type: 'category',
            labels: ['7/21', '7/22', '7/23', '7/24', '7/25', '7/26', '7/27'],
          },
        ],
      },
      // ベジェ曲線無効
      elements: { line: { tension: 0 } },
    },
  }
  donutChart = {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: 'ドーナツグラフ',
          data: [10, 20, 30, 40],
          backgroundColor: ['#FF4B00', '#F6AA00', '#005AFF', '#909090'],
        },
      ],
      // labels: ['発熱', '微熱', '正常', '未登録'],
    },
    options: {},
  }
}
</script>

<style>
.chart-price {
  position: relative;
}

.chart-price p {
  font-size: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  right: 0;
  margin: auto;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
