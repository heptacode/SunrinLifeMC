<template>
  <v-app>
    <v-content>
      <v-container>
        <h2>SunrinLifeMC</h2>
        <v-layout row wrap align-start justify-center>
          <v-flex xs12 md6 mt-4>
            <v-layout justify-center>
              <v-card>
                <v-card-title>
                  <div>
                    <h5>System Status</h5>
                    <v-simple-table class="mt-3 elevation-3">
                      <tbody>
                        <tr>
                          <th>서버 주소</th>
                          <td class="text-end">
                            <strong class="yellow--text">mc.sunrin.life</strong>
                            <v-tooltip top>
                              <template v-slot:activator="{ on }">
                                <v-btn icon x-small class="ml-1" @click="copy" v-on="on"><v-icon v-text="!copied ? 'mdi-content-copy' : 'mdi-check'"></v-icon></v-btn>
                              </template>
                              <span>주소 복사</span>
                            </v-tooltip>
                          </td>
                        </tr>
                        <tr>
                          <th>서버 상태</th>
                          <td class="text-end">
                            <div v-if="!status">
                              <span class="grey--text mr-1">읽어들이는 중</span>
                              <v-btn icon small loading disabled></v-btn>
                            </div>
                            <div v-else class="light-container">
                              {{ status ? "ONLINE" : "OFFLINE" }}
                              <div class="light" :class="status_global"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>MOTD</th>
                          <td ref="motd" class="text-end">
                            <span class="grey--text mr-1">읽어들이는 중</span>
                            <v-btn icon small loading disabled></v-btn>
                          </td>
                        </tr>
                        <tr>
                          <th>접속자</th>
                          <td class="text-end">
                            <div v-if="!players">
                              <span class="grey--text mr-1">읽어들이는 중</span>
                              <v-btn icon small loading disabled></v-btn>
                            </div>
                            <div v-else v-text="players"></div>
                          </td>
                        </tr>
                      </tbody>
                    </v-simple-table>

                    <!-- <v-divider class="my-3"></v-divider> -->

                    <!-- <v-simple-table class="mt-3 elevation-3">
                      <thead>
                        <tr>
                          <th>상태</th>
                          <th>컨텐츠</th>
                          <th>서버 코드</th>
                          <th>MC 버전</th>
                          <th>다이나믹 맵</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="light-container">
                            <div class="light" :class="status_wild"></div>
                          </td>
                          <th>생야생</th>
                          <td>WILD</td>
                          <td>1.12.2</td>
                          <td class="text-end">
                            <v-btn icon small color="yellow" href="http://mc.sunrin.life:1001" target="_blank">
                              <v-icon>mdi-map</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                        <tr>
                          <td class="light-container">
                            <div class="light" :class="status_build"></div>
                          </td>
                          <th>자유 건축</th>
                          <td>BUILD</td>
                          <td>1.12.2</td>
                          <td class="text-end">
                            <v-btn icon small color="yellow" href="http://mc.sunrin.life:1002" target="_blank">
                              <v-icon>mdi-map</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                        <tr>
                          <td class="light-container">
                            <div class="light" :class="status_srbuild"></div>
                          </td>
                          <th>선린 건축</th>
                          <td>SRBUILD</td>
                          <td>1.12.2</td>
                          <td class="text-end">
                            <v-btn icon small color="yellow" href="http://mc.sunrin.life:1003" target="_blank">
                              <v-icon>mdi-map</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                        <tr>
                          <td class="light-container">
                            <div class="light" :class="status_beta"></div>
                          </td>
                          <th>생야생 <v-icon small>mdi-beta</v-icon></th>
                          <td>BETA</td>
                          <td>최신 릴리즈</td>
                          <td class="text-end">
                            <v-btn icon small color="yellow" href="http://mc.sunrin.life:1004" target="_blank">
                              <v-icon>mdi-map</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                        <tr>
                          <td class="light-container">
                            <div class="light" :class="status_skyblock"></div>
                          </td>
                          <th>스카이블럭 <v-icon small>mdi-beta</v-icon></th>
                          <td>SKYBLOCK</td>
                          <td>최신 릴리즈</td>
                          <td class="text-end">
                            <v-btn icon small color="yellow" href="http://mc.sunrin.life:1005" target="_blank">
                              <v-icon>mdi-map</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                        <tr>
                          <td class="light-container">
                            <div class="light" :class="status_lobby"></div>
                          </td>
                          <th>로비(eSports 대회용)</th>
                          <td>LOBBY</td>
                          <td>최신 릴리즈</td>
                          <td class="text-end">
                            <v-btn icon small color="yellow" href="http://mc.sunrin.life:1006" target="_blank">
                              <v-icon>mdi-map</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                        <tr>
                          <td class="light-container">
                            <div class="light" :class="status_esports"></div>
                          </td>
                          <th>집짓기 대회</th>
                          <td>ESPORTS</td>
                          <td>최신 릴리즈</td>
                          <td class="text-end">
                            <v-btn icon small color="yellow" href="http://mc.sunrin.life:1007" target="_blank">
                              <v-icon>mdi-map</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                        <tr>
                          <td class="light-container">
                            <div class="light" :class="status_iwop"></div>
                          </td>
                          <th>IWOP</th>
                          <td>IWOP</td>
                          <td>1.12.2</td>
                          <td class="text-end">
                            <v-btn icon small color="yellow" href="http://mc.sunrin.life:1008" target="_blank">
                              <v-icon>mdi-map</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </v-simple-table>

                    <v-divider class="my-3"></v-divider>

                    <v-simple-table class="mt-3 elevation-3">
                      <tr>
                        <th>VCS</th>
                        <td class="text-end">
                          <v-btn icon small href="https://github.com/sunrinlifemc" target="_blank"><v-icon>mdi-github</v-icon></v-btn>
                        </td>
                      </tr>
                    </v-simple-table>

                    <!-- <v-btn color="green" v-text="'가입하기'" @click="registerDialog = true"></v-btn> -->
                    <!-- <v-btn color="blue lighten-1" v-text="'METRO'" @click="metroDialog = true" disabled="disabled"></v-btn> -->
                  </div>
                </v-card-title>
              </v-card>
            </v-layout>
          </v-flex>

          <!-- <v-flex xs12 md6 mt-4>
            <v-layout justify-center>
              <v-card>
                <v-card-title>
                  <v-layout column>
                    <v-layout justify-space-between>
                      <h5>생야생</h5>
                      <h6>/server wild</h6>
                    </v-layout>
                    <ul class="body-2">
                      <li>매너플레이 부탁드립니다.</li>
                    </ul>
                    <v-divider class="my-3"></v-divider>
                    <v-layout justify-space-between>
                      <h5>자유 건축</h5>
                      <h6>/server build</h6>
                    </v-layout>
                    <ol class="body-2">
                      <li>
                        Plot 플러그인 명령어는 /p 로 확인하실 수 있습니다.
                      </li>
                      <li>
                        서버의 자원을 낭비하는 건축물은 통보없이 철거될 수 있습니다.
                      </li>
                      <li>
                        플롯은 선착순이기 때문에 불필요한 플롯은 관리자에 의해 삭제될 수 있습니다.
                      </li>
                    </ol>
                    <v-divider class="my-3"></v-divider>
                    <v-layout justify-space-between>
                      <h5>선린 건축</h5>
                      <h6>/server srbuild</h6>
                    </v-layout>
                    <ol class="body-2">
                      <li>
                        건축가로 신청하지 않은 일반인은 관람만 가능합니다.
                      </li>
                      <li>
                        건축가가 아닌 플레이어가 60초 이상 잠수 시 접속이 끊어집니다.
                      </li>
                    </ol>
                    <v-divider class="my-3"></v-divider>
                    <v-layout justify-space-between>
                      <h5>생야생<v-icon>mdi-beta</v-icon></h5>
                      <h6>/server beta</h6>
                    </v-layout>
                    <ul class="body-2">
                      <li>동거 금지를 원칙으로 합니다.</li>
                    </ul>
                    <v-divider class="my-3"></v-divider>
                    <v-layout justify-space-between>
                      <h5>스카이블럭<v-icon>mdi-beta</v-icon></h5>
                      <h6>/server skyblock</h6>
                    </v-layout>
                    <ul class="body-2">
                      <li>매너플레이 부탁드립니다.</li>
                    </ul>
                  </v-layout>
                </v-card-title>
              </v-card>
            </v-layout>
          </v-flex> -->
        </v-layout>
      </v-container>
    </v-content>

    <!-- <v-dialog
      v-model="metroDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar card dark>
          <v-btn icon dark @click="metroDialog = false">
            <v-icon v-text="'close'"></v-icon>
          </v-btn>
          <v-toolbar-title v-text="'실시간 지하철 교통상황'"></v-toolbar-title>
        </v-toolbar>
        <iframe
          :src="metroDialog ? 'metro' : ''"
          frameborder="0"
          width="100%"
          height="1024px"
          >읽어들이는 중</iframe
        >
      </v-card>
    </v-dialog> -->
  </v-app>
</template>

<script lang="ts">
if (/*@cc_on!@*/ false) {
  location.replace("https://cdn.hyunwoo.kim/no_IE/#MC.SUNRIN.LIFE");
}
import axios from "axios";
import { Vue, Component, Watch } from "vue-property-decorator";
@Component({})
export default class App extends Vue {
  loader: App;
  loading: boolean = false;
  copied: boolean = false;
  form: boolean = false;
  status: boolean = false;
  motd: string = "";
  players: string = "";
  status_global: string = "light-undefined";
  // status_wild: "light-undefined",
  // status_build: "light-undefined",
  // status_srbuild: "light-undefined",
  // status_beta: string = "light-undefined";
  // status_skyblock: string = "light-undefined";
  // status_lobby: "light-undefined",
  // status_esports: "light-undefined"
  // status_iwop: string = "light-undefined";
  // metroDialog: false,
  @Watch("loader")
  isLoaderChanged() {
    let l: any = this.loader;
    this[l] = !this[l];
    setTimeout(() => (this[l] = false), 2000);
    this.loader = null;
  }

  mounted() {
    axios.get("//api.mcsrvstat.us/1/mc.sunrin.life").then(response => {
      let status = response.data;
      this.status = !status.offline;
      this.status_global = !status.offline ? "light-online" : "light-offline";
      let motd: any = this.$refs.motd;
      motd.innerHTML = status.motd.html[0];
      this.players = status.players.online + "명 접속 중";
    });
    // axios.get("//api.mcsrvstat.us/1/mc.sunrin.life:25566").then(response => {
    //   this.status_wild = !response.data.offline
    //     ? "light-online"
    //     : "light-offline";
    // });
    // axios.get("//api.mcsrvstat.us/1/mc.sunrin.life:25567").then(response => {
    //   this.status_build = !response.data.offline
    //     ? "light-online"
    //     : "light-offline";
    // });
    // axios.get("//api.mcsrvstat.us/1/mc.sunrin.life:25568").then(response => {
    //   this.status_srbuild = !response.data.offline
    //     ? "light-online"
    //     : "light-offline";
    // });
    // axios.get("//api.mcsrvstat.us/1/mc.sunrin.life:25569").then(response => {
    //   this.status_beta = !response.data.offline ? "light-online" : "light-offline";
    // });
    // axios.get("//api.mcsrvstat.us/1/mc.sunrin.life:25570").then(response => {
    //   this.status_skyblock = !response.data.offline ? "light-online" : "light-offline";
    // });
    // axios.get("//api.mcsrvstat.us/1/mc.sunrin.life:25571").then(response => {
    //   this.status_lobby = !response.data.offline
    //     ? "light-online"
    //     : "light-offline";
    // });
    // axios.get("//api.mcsrvstat.us/1/mc.sunrin.life:25572").then(response => {
    //   this.status_esports = !response.data.offline
    //     ? "light-online"
    //     : "light-offline";
    // });
    // axios.get("//api.mcsrvstat.us/1/mc.sunrin.life:25573").then(response => {
    //   this.status_iwop = !response.data.offline ? "light-online" : "light-offline";
    // });
  }
  copy() {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = "mc.sunrin.life";
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
    this.copied = true;
  }
}
</script>

<style>
.light-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.light {
  border-radius: 50%;
  height: 16px;
  width: 16px;
  margin-left: 5px;
}
.light-online {
  background: rgb(40, 201, 64);
}
.light-offline {
  background: rgb(241, 39, 26);
}
.light-undefined {
  background: rgb(138, 138, 138);
}
</style>
