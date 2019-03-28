/****************************************************************************************************
 * src/mastered-detail/mastered-detail.component.ts
 *    習得済み技術詳細を表示するコンポーネント
 ****************************************************************************************************/

/* --------------------------------------------------------------------------------------------------
 * import構文
 *    import { インポートするクラス as 別名 } from 'インポート元モジュール';
 * ------------------------------------------------------------------------------------------------ */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Technology } from '../technology';
import { TechnologyService } from '../technology.service';

/* --------------------------------------------------------------------------------------------------
 * @Component
 *    コンポーネントの構成情報を宣言するデコレーター
 *    selector:     コンポーネントを識別する為の名称
 *    templateUrl:  対応するテンプレートファイル
 *    styleUrls:    対応するSassファイル
 * ------------------------------------------------------------------------------------------------ */

@Component({
  selector: 'app-mastered-detail',
  templateUrl: './mastered-detail.component.html',
  styleUrls: ['./mastered-detail.component.scss']
})

/* --------------------------------------------------------------------------------------------------
 * クラス定義
 *    export class クラス名 { }
 *    ※exportを付けると、他クラスから参照(import)可能となる
 * ------------------------------------------------------------------------------------------------ */

export class MasteredDetailComponent implements OnInit {
  /* --------------------------------------------------------------------------------------------------
  * フィールド定義
  *    フィールド名: 型名;
  *    ※使用できる主な型は、
  *     ・any       型指定なし
  *     ・number    数値(浮動小数含む)
  *     ・boolean   真偽値
  *     ・string    文字列
  *     ・enum      列挙
  *    ※配列は、型[]／Array<型> で指定
  *    ※タプルは、[型, 型, …]
  * ------------------------------------------------------------------------------------------------ */
  tech: Technology;

  /* --------------------------------------------------------------------------------------------------
   * コンストラクター
   *    constructor(アクセス修飾子 引数(フィールド)名:引数(フィールド)型)
   *    ※引数であると同時に、フィールドの宣言および代入も兼ねている
   * ------------------------------------------------------------------------------------------------ */

  constructor(
    private route: ActivatedRoute,
    private technologyService: TechnologyService,
    private location: Location
  ) {
  }

  /* --------------------------------------------------------------------------------------------------
   * implementsしたOnInitインターフェースのメソッドの実装
   * ngOnInit()はコンポーネントの作成直後に呼び出される
   * ------------------------------------------------------------------------------------------------ */
  ngOnInit() {
    this.getTechnology();
  }

  getTechnology(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    // サービスでHTTPリクエストにて取得された結果を受け取る(subscribe)
    this.technologyService.getTechnology(id).subscribe(
      // 受け取ったtechをフィールドのtechに格納
      tech => this.tech = tech
    );
  }

  save(): void {
    // サービスでHTTPリクエストにて入力された内容を反映し、結果を得る(subscribe)
    this.technologyService.updateTechnology(this.tech).subscribe(
      () => this.goBack()
    );
  }

  goBack(): void {
    this.location.back();
  }
}
