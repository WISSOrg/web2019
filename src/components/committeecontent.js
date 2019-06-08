import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProgramCommitteeGrid from '../components/programcommitteegrid';
import ChairsTable from '../components/chairstable';

const data = {
  // "PC委員長": "伊藤 貴之",
  // "実行委員長": "西田 健志",
  // "副実行委員長": "五十嵐 悠紀",
  "会計": "細部 博史, 瀬川 典久",
  "出版・デザインコンペ": "中村 裕美, 益子 宗, 池松 香, 加藤 邦拓",
  "広報・学会リエゾン": "佃 洸摂, 横窪 安奈",
  "チャット": "福地 健太郎",
  "WISSチャレンジ": "入江 英嗣",
  "動画生中継": "杉浦 裕太, 阪口 紗季",
  "デモ・ポスター": "真鍋 宏幸, 村尾 和哉, 土田 修平",
  "ネットワーク": "原 貴洋, 奥本 隼",
  "照明・音響": "川口 一画",
  "Web・投票・サーバー": "加藤 淳, 小山 裕己",
  "懇親会": "簗瀬 洋平, 倉本 至",
  "表彰": "沖 真帆, 宮下 芳明",
  "企業スポンサー": "川本 菜摘, 岩本 拓也, 開原 沙文",
  "参加者管理": "樋口 啓太",
  "学生ボランティア": "櫻井 翔, 中野 倫靖",
};

export default class ProgramCommitteeGridSub extends Component {
  render() {

    const items = [];
    for (var key in data) {
      items.push(<Grid.Column mobile={8} tablet={4} computer={4}><h5>{ key }</h5><p style={{ paddingBottom: '1.5em' }}>{ data[key] }</p></Grid.Column>);
    }

    return (
      <div>
        <h1>WISS委員一覧</h1>
        
        <h2>WISS 2019実行委員</h2>
        <ChairsTable />

        <Grid style={{ marginTop: '30px' }}>
          <Grid.Row>
            { items }
          </Grid.Row>
        </Grid>

        <h2>WISS 2019プログラム委員</h2>
        <ProgramCommitteeGrid />
      </div>
    );
  }
}
