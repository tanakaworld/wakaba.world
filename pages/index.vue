<template>
  <section class="Container">
    <section class="Section">
      <h1>
        WAKABA YAMAGUCHI
      </h1>

      <img
        class="ProfileIcon"
        src="~/assets/img/profile-icon.jpg"
        alt="wakaba yamaguchi profile icon">
    </section>

    <section class="Section">
      <h2>Event Organizer / Curator / Writer / Editor</h2>

      <div class="Section__Text">
        愛知県出身。人と人とがつながり自由になるビル、Nagatacho GRiDのコミュニケーター兼、フリーのエディター。
        「カッコいい生き様を全力で応援する」をモットーに、ブランドメイクやイベント企画、コミュニティサポートを行っている。
        学生時代に国内にて学芸員資格を取得。その後、アメリカにて美術館とギャラリーでインターン、現地の大学にて学芸員学課程修了後、帰国。ITベンチャーにてテクニカルアドバイザーとして従事後、現在の活動をはじめる。
      </div>
    </section>

    <section class="Section">
      <h2>CONTACT</h2>
      <ul class="List">
        <li
          v-for="(s, index) in snsLinks"
          :key="index"
          class="ListItem">
          <a :href="s.url">{{ s.text }}</a>
        </li>
      </ul>
    </section>

    <section class="Section">
      <h2>JOB</h2>
      <DateContentTable :contents="jobs"/>
    </section>

    <section class="Section">
      <h2>PROJECT</h2>
      <DateContentTable :contents="projects"/>
    </section>
  </section>
</template>

<script>
import DateContentTable from '~/components/DateContentTable.vue'

export default {
  components: {
    DateContentTable
  },
  computed: {
    snsLinks: () => [
      { url: 'https://www.facebook.com/wakaba.yamaguchi.1', text: 'Facebook' },
      { url: 'https://twitter.com/wkwkbwb', text: 'Twitter' },
      { url: 'https://note.mu/wakabaworld', text: 'Note' }
    ],
    jobs: () => [
      {
        date: '2020/03 -',
        name: '一般社団法人日本CTO協会',
        role: 'イベント企画・会員サポート',
        url: 'https://cto-a.org/'
      },
      {
        date: '2019/03 -',
        name: '株式会社アドレス',
        role: 'イベント企画・支援',
        url: 'https://address.love/'
      },
      {
        date: '2018/07 -',
        name: '代官山ロータリークラブ',
        role: 'サイト、SNS管理・イベント補佐(事務局担当者）',
        url: 'http://rctd.club/'
      },
      {
        date: '2017/09 - 2020/03',
        name: '株式会社レクター',
        role: 'コンサルティング補佐',
        url: 'https://rector.co.jp/company/'
      },
      {
        date: '2016/08 - 2020/03',
        name: '一般社団法人Japan Elixir Association',
        role: '会計・イベント統括（代表監事）',
        url: 'https://rector.co.jp/company/'
      },
      {
        date: '2017/03 -',
        name: '株式会社ガイアックス',
        role: 'NagatachoGRiD　管理人',
        url: 'https://www.gaiax.co.jp/'
      },
      {
        date: '2013/04 - 2017/01',
        name: 'レバレジーズ株式会社',
        role: 'エンジニア部門人材スカウトチームマネージャー',
        url: 'https://leverages.jp/'
      }
    ],
    projects: () => [
      {
        date: '2020/05 -',
        name: '代官山ロータリークラブ　リモート卓話',
        role: 'イベント企画・運営',
        url: 'http://rctd.club/'
      },
      {
        date: '2020/04 -',
        name: 'オンライン就活-学生向け合同説明会',
        role: '講師',
        url: 'https://onlineshukatsu.com/'
      },
      {
        date: '2020/04 -',
        name: 'オンライン就活−人事向けオンライン活用術−',
        role: 'ファシリテーター',
        url: 'https://www.facebook.com/events/2870656162970395/'
      },
      {
        date: '2020/04',
        name: 'STAY HOME THINK WORK-withコロナの働き方と働く場を考える-',
        role: '登壇',
        url: 'https://shtw-think-howtowork.peatix.com/'
      },
      {
        date: '2020/03 -',
        name: '株式会社アドレス　オンライン説明会',
        role: 'ファシリテーション',
        url:
          'https://sites.google.com/address.love/event/%E8%AA%AC%E6%98%8E%E4%BC%9A%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88'
      },
      {
        date: '2020/2',
        name: 'しゅんダイアリーさん複業インタビュー',
        role: 'インタビュイー',
        url: 'https://youtu.be/VIHfcaskB1A'
      },
      {
        date: '2020/01',
        name: 'サイリウムダンスバトル紹介記事',
        role: '編集',
        url: 'https://www.cyalume-dance.com/'
      },
      {
        date: '2019/11',
        name: '100人カイギサミット',
        role: '司会',
        url: 'https://eventregist.com/e/100?lang=ja_JP'
      },
      {
        date: '2019/06 - 2019/11',
        name: 'GRIDROOFTOPCINEMA開催',
        role: '主催',
        url: 'https://motion-gallery.net/projects/grid_rooftop_cinema'
      },
      {
        date: '2019/10 - 2020/06',
        name: '代官山ロータリークラブ×ヒルサイドテラス　ラブコール企画',
        role: 'イベント企画・運営',
        url: 'http://hillsideterrace.com/events/8114/'
      },
      {
        date: '2019/07',
        name: 'Our Favorite Shop　猿楽祭り',
        role: 'イベントサポート',
        url: ''
      },
      {
        date: '2019/05',
        name: 'しゅんダイアリーさんGRiD紹介（後編）',
        role: 'インタビュイー',
        url: 'https://www.youtube.com/watch?v=KOdKMB2pY0M'
      },
      {
        date: '2019/05',
        name: 'しゅんダイアリーさんGRiD紹介（前編）',
        role: 'インタビュイー',
        url: 'https://www.youtube.com/watch?v=0gpZF8mC6kk'
      },
      {
        date: '2019/03',
        name: 'GRIDROOFTOPCINEMA クラウドファンディング',
        role: ' 主催',
        url: 'https://motion-gallery.net/projects/grid_rooftop_cinema'
      },
      {
        date: '2019/03',
        name: '「エンジニア採用最前線」イベント',
        role: '主催・登壇',
        url: 'https://rector.connpass.com/event/123315/'
      },
      {
        date: '2019/03',
        name: 'ログミー取材',
        role: 'インタビュイー',
        url: 'https://logmi.jp/tech/articles/320992'
      },
      {
        date: '2018/10',
        name: '千代田区100人カイギ',
        role: 'イベント企画・運営',
        url: 'https://chiyoda100.peatix.com/'
      },
      {
        date: '2018/09',
        name: 'JA農協　青森米活　キャンペーン',
        role: '執筆（ライター）',
        url: 'https://aomori-komekatu.com/'
      },
      {
        date: '2018/08',
        name: 'KAI-YOU',
        role: 'カルチャーメディア執筆（ライター・編集）',
        url: 'http://kai-you.net/'
      },
      {
        date: '2018/04',
        name: 'GRID CINEMA NITE',
        role: '屋上映画企画・広報・運営',
        url: 'https://www.facebook.com/gridcinemanite'
      },
      {
        date: '2018/04',
        name: '未知の街nagatacho',
        role: '企画立ち上げ・サイト運営',
        url: 'https://www.facebook.com/未知の街nagatacho'
      },
      {
        date: '2018/02',
        name: 'GRID 1st aniversery',
        role: 'イベント企画・運営',
        url: 'https://grid.tokyo.jp/note/406'
      },
      {
        date: '2017/10',
        name: '生き方見本市',
        role: '登壇',
        url: 'https://www.ikikata-mihonichi.com/top/'
      },
      {
        date: '2017/04',
        name: '国立国会図書館',
        role: '調査業務',
        url: 'http://www.ndl.go.jp/'
      },
      {
        date: '2017/02',
        name: 'GRiD opening party',
        role: 'イベント統括',
        url: 'https://www.facebook.com/events/303645783366856/'
      }
    ]
  }
}
</script>

<style scoped>
.ProfileIcon {
  width: 240px;
  border-radius: 50%;
}

.Table__ColumnDate {
  width: 130px;
}

.Table__ColumnName {
  white-space: pre-wrap;
}

@media only screen and (max-width: 700px) {
  .ProfileIcon {
    width: 120px;
  }
}
</style>
