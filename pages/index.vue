<template>
  <section class="Container">
    <div class="Section">
      <h1>
        WAKABA YAMAGUCHI
      </h1>

      <img
        class="ProfileIcon"
        src="~/assets/img/profile-icon.jpg"
        alt="wakaba yamaguchi profile icon">
    </div>

    <div class="Section">
      <h2>Communicator / Curator / Writer / Editor</h2>

      <div class="Section__Text">
        愛知県出身。人と人とがつながり自由になるビル、NagatachoGRiDのコミュニケーター兼、フリーのエディター。
        「カッコいい生き様を全力で応援する」をモットーに、ブランドメイクやイベント企画、コミュニティサポートを行っている。
        学生時代に国内にて学芸員資格を取得。その後、アメリカにて美術館とギャラリーでインターン、現地の大学にて学芸員学課程修了後、帰国。ITベンチャーにてテクニカルアドバイザーとして従事後、現在の活動をはじめる。
      </div>
    </div>

    <div class="Section">
      <h2>Contacts</h2>
      <ul class="List">
        <li
          v-for="(s, index) in snsLinks"
          :key="index"
          class="ListItem">
          <a :href="s.url">{{ s.text }}</a>
        </li>
      </ul>
    </div>

    <div class="Section">
      <h2>JOB / PROJECTS</h2>
      <table class="Table">
        <tr
          v-for="(p, index) in projects"
          :key="index"
          class="Table__Row">
          <td class="Table__Column">
            {{ p.date }}
          </td>
          <td class="Table__Column">
            <a
              :href="p.url"
              target="_blank">{{ p.name }}</a>
          </td>
          <td class="Table__Column">
            {{ p.role }}
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    snsLinks: () => [
      { url: 'https://www.facebook.com/wakaba.yamaguchi.1', text: 'Facebook' },
      { url: 'https://www.facebook.com/wakaba.yamaguchi.1', text: 'Twitter' },
      { url: 'https://note.mu/wakabaworld', text: 'Note' }
    ],
    projects: () => [
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
        date: '2018/07',
        name: '代官山ロータリークラブ',
        role: 'サイト、SNS管理・イベント補佐(事務局担当者）',
        url: 'http://rctd.club/'
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
        date: '2017/09',
        name: '株式会社レクター',
        role: 'コンサルティング補佐',
        url: 'http://rector.co.jp/company/'
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
      },
      {
        date: '2017/01',
        name: 'Nagatacho GRiD',
        role: '広報・オウンドメディア運営',
        url: 'https://grid.tokyo.jp/'
      },
      {
        date: '2016/08',
        name: '一般社団法人Japan Elixir Association',
        role: '会計・イベント統括（代表監事）',
        url: 'https://elixir-fest.jp/'
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
@media only screen and (max-width: 700px) {
  .ProfileIcon {
    width: 120px;
  }
}
</style>
