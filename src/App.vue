<template>
  <v-app>
    <v-content>
      <v-container>
        <h5 class="headline">MC.SUNRIN.LIFE</h5>
        <v-layout row wrap align-start justify-space-around>
          <v-flex xs12 md5 mt-4>
            <v-card>
              <v-card-title>
                <div>
                  <h6 class="title">서버 정보</h6>
                  <v-btn v-text="copyText" @click="copy"></v-btn>
                  <v-simple-table class="mt-3 elevation-3">
                    <tbody>
                      <tr v-for="item in info" :key="item.th">
                        <th>{{ item.th }}</th>
                        <td class="text-end">{{ item.td }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>

                  <v-simple-table class="mt-3 elevation-3">
                    <tbody>
                      <tr v-for="item in contents" :key="item.th">
                        <th>{{ item.th }}</th>
                        <td class="text-end">{{ item.td }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12 md5 mt-4>
            <v-card>
              <v-card-title>
                <div>
                  <h6 class="title">실시간 정보</h6>
                  <v-simple-table class="mt-3 elevation-3">
                    <tbody>
                      <tr v-for="item in status" :key="item.th">
                        <th>{{ item.th }}</th>
                        <td class="text-end" :class="item.td">
                          읽어들이는 중
                        </td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="indigo lighten-1"
                  href="http://mc.sunrin.life:1001"
                  target="_blank"
                >
                  S1 MAP
                </v-btn>
                <v-btn
                  color="indigo lighten-1"
                  href="http://mc.sunrin.life:1002"
                  target="_blank"
                >
                  S2 MAP
                </v-btn>
                <v-btn
                  color="indigo lighten-1"
                  v-text="'S3 MAP'"
                  href="http://mc.sunrin.life:1003"
                  target="_blank"
                >
                  S3 MAP
                </v-btn>
                <!-- <v-btn color="green" v-text="'가입하기'" @click="registerDialog = true"></v-btn> -->
                <!-- <v-btn color="blue lighten-1" v-text="'METRO'" @click="metroDialog = true" disabled="disabled"></v-btn> -->
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 md5 mt-4>
            <v-card>
              <v-card-title>
                <h6 class="title">How to</h6>
                <ol class="body-2">
                  <li>
                    TeamExtreme 런처는
                    <v-btn
                      rounded
                      color="info"
                      href="https://mc-pc.net/backend/download.php?id=664"
                      target="_blank"
                      small
                    >
                      여기
                    </v-btn>
                    에서 다운로드 하십시오.
                  </li>
                  <li>
                    누구나 사용할 수 있는 명령어입니다.
                    <ul>
                      <li>/server [ 서버코드 ] - 서버 간 이동</li>
                      <li>/glist - 모든 서버에 접속 중인 플레이어 목록</li>
                      <li>/list - 현재 서버에 접속 중인 플레이어 목록</li>
                      <li>/pt - 플레이타임 보기</li>
                      <li>/pt [닉네임] - 타인의 플레이타임 보기</li>
                      <li>/pt top - 최장 플레이타임 상위 10위</li>
                    </ul>
                  </li>
                  <li>비밀번호 분실 시 연락주시면 재가입 도와드리겠습니다.</li>
                  <li>
                    모든 문의 사항은 메시지로 받습니다.<br /><b
                      >0507-0079-7709</b
                    >
                  </li>
                </ol>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12 md5 mt-4>
            <v-card>
              <v-card-title>
                <v-layout column>
                  <h6 class="title">S1 | 생야생</h6>
                  <ol class="body-2">
                    <li>
                      다음 명령어로 이 서버에 접속할 수 있습니다.<br />/server
                      s1
                    </li>
                    <li>매너플레이 부탁드립니다.</li>
                  </ol>
                  <v-divider class="my-3"></v-divider>
                  <h6 class="title">S2 | 건축</h6>
                  <ol class="body-2">
                    <li>
                      다음 명령어로 이 서버에 접속할 수 있습니다.<br />/server
                      s2
                    </li>
                    <li>Plot 플러그인 명령어는 /p 로 확인하실 수 있습니다.</li>
                    <li>
                      서버의 자원을 낭비하는 건축물은 통보없이 철거될 수
                      있습니다.
                    </li>
                    <li>
                      플롯은 선착순이기 때문에 불필요한 플롯은 관리자에 의해
                      삭제될 수 있습니다.
                    </li>
                  </ol>
                  <v-divider class="my-3"></v-divider>
                  <h6 class="title">S3 | 선린고 건축 프로젝트</h6>
                  <ol class="body-2">
                    <li>
                      다음 명령어로 이 서버에 접속할 수 있습니다.<br />/server
                      s3
                    </li>
                    <li>건축가로 신청하지 않은 일반인은 관람만 가능합니다.</li>
                    <li>
                      건축가가 아닌 플레이어가 60초 이상 잠수 시 접속이
                      끊어집니다.
                    </li>
                  </ol>
                </v-layout>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <!-- <v-dialog v-model="registerDialog" persistent max-width="600">
      <v-card>
        <v-card-title class="headline" v-text="'가입하기'"></v-card-title>
        <v-card-text>
          <div
            v-text="
              '게임 내에서 이미 회원가입을 한 경우 이 폼을 작성하더라도 반영되지 않습니다.'
            "
          ></div>
          <v-form ref="form" v-model="form">
            <v-text-field
              v-model="username"
              class="my-3"
              color="info"
              label="마인크래프트 닉네임"
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="password"
              class="my-3"
              color="info"
              label="비밀번호"
              :rules="[rules.required, rules.password]"
              counter
            ></v-text-field>
            <v-text-field
              v-model="email"
              class="my-3"
              color="info"
              label="이메일"
              :rules="[rules.required, rules.email]"
              type="email"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            flat
            v-text="'취소'"
            @click="registerDialog = false"
          ></v-btn>
          <v-btn
            color="success"
            v-text="'제출'"
            :loading="loading"
            :disabled="loading || !form"
            @click="(loader = 'loading'), register()"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
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

<script>
if (/*@cc_on!@*/ false) {
  location.replace("https://cdn.hyunwoo.kim/no_IE/#MC.SUNRIN.LIFE");
}
// const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  name: "App",
  data: () => ({
    loader: null,
    loading: false,
    copyText: "서버 주소 복사",
    registerDialog: false,
    form: false,
    username: "",
    password: "",
    email: "",
    metroDialog: false,
    info: [
      {
        th: "서버 주소",
        td: "mc.sunrin.life"
      },
      {
        th: "MC 버전",
        td: "1.12.2"
      },
      {
        th: "복돌",
        td: "허용"
      }
    ],
    contents: [
      {
        th: "서버1 (S1)",
        td: "생야생"
      },
      {
        th: "서버2 (S2)",
        td: "자유 건축"
      },
      {
        th: "서버3 (S3)",
        td: "선린 건축"
      }
    ],
    status: [
      {
        th: "서버 상태",
        td: "status"
      },
      {
        th: "서버 MOTD",
        td: "motd"
      },
      {
        th: "접속자",
        td: "players"
      }
    ]
    // rules: {
    //   required: value => !!value || "필수 사항",
    //   password: value => value.length >= 5 || "안전하지 않은 비밀번호",
    //   email: value => {
    //     return pattern.test(value) || "올바르지 않은 이메일 형식";
    //   }
    // }
  }),
  watch: {
    loader() {
      let l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 2000);
      this.loader = null;
    }
  },
  methods: {
    copy() {
      var t = document.createElement("textarea");
      document.body.appendChild(t);
      t.value = "mc.sunrin.life";
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
      this.copyText = "복사 완료!";
      setTimeout(function() {
        this.copyText = "서버 주소 복사";
      }, 1500);
    }
    // register() {
    //   let formData = new FormData();
    //   formData.set("username", this.username);
    //   formData.append("password", this.password);
    //   formData.append("email", this.email);
    //   fetch("proxy.php", { method: "POST", body: formData }).then(response => {
    //     return response.text().then(bool => {
    //       bool === "true"
    //         ? ((v.registerDialog = false),
    //           alert("[MCHWSV]\n\n가입이 완료되었습니다.\n감사합니다."))
    //         : alert("[MCHWSV]\n오류가 발생하였습니다.\n다시 시도하십시오.");
    //     });
    //   });
    // }
  }
};
$.getJSON("//api.mcsrvstat.us/1/mc.sunrin.life", function(status) {
  document.querySelector(".status").innerHTML = !status.offline
    ? "ONLINE"
    : "OFFLINE";
  document.querySelector(".motd").innerHTML = status.motd.html;
  document.querySelector(".players").innerHTML =
    status.players.online + "명 접속 중";
});
</script>
